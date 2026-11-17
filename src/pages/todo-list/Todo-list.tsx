import { useEffect, useReducer, useRef, useState } from "react";
import type { Priorite, Projet, StateTodo, Tache } from "./types";
import { ID_PROJET_DEFAUT, ID_VUE_TOUTES, reducerTodo } from "./componentsReducer";
import { Dialog } from "./Dialog";
import { ChevronRight, Folder, Pencil, Trash } from "lucide-react";
import { creerTodo, estEnRetard, formaterEcheance, libelleCompteur, lireChampsTache } from "./Todo-utils";
import { compareAsc, parseISO } from "date-fns";
import { cn } from "../../utils/cn";

const CHAMP =
  "rounded-lg border border-todo-bordure bg-todo-fond px-3 py-2 text-todo-textP placeholder:text-todo-textS focus:outline-none focus:ring-2 focus:ring-todo-accent";
const LIBELLE = "flex flex-col gap-1 text-left text-sm text-todo-textS";

const ETAT_INITIAL: StateTodo = {
  projets: [{ id: ID_PROJET_DEFAUT, nom: "Général" }],
  taches: [],
  projetAffiche: ID_VUE_TOUTES,
};

class ErreurDonnees extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ErreurDonnées";
  }
}

function lireEtat(etatParDefaut: StateTodo): StateTodo {
  try {
    const sauvegarde = localStorage.getItem("todo-list");
    if (sauvegarde === null) return etatParDefaut;
    const stockage = JSON.parse(sauvegarde);
    if (typeof stockage !== "object") throw new ErreurDonnees("Le format de la donnée reçu n'est pas le bon");
    if (!Array.isArray(stockage.projets)) throw new ErreurDonnees("projets n'est pas de la bonne forme");
    if (!Array.isArray(stockage.taches)) throw new ErreurDonnees("tâches n'est pas de la bonne forme");
    if (typeof stockage.projetAffiche !== "string") throw new ErreurDonnees("ETAT_INITIAL n'est pas de forme string");
    return stockage;
  } catch (e) {
    if (e instanceof ErreurDonnees) {
      console.warn(e.message);
    } else {
      console.warn("erreur inconnu");
    }
    return etatParDefaut;
  }
}
const PRIORITE_COULEUR = {
  basse: "border-todo-prioBasse",
  moyenne: "border-todo-prioMoyenne",
  haute: "border-todo-prioHaute",
};
const PRIORITE_LIBELLE = {
  basse: "Faible",
  moyenne: "Moyenne",
  haute: "Forte",
};

export function TodoList() {
  const [state, dispatch] = useReducer(reducerTodo, ETAT_INITIAL, lireEtat);
  const refProjet = useRef<HTMLDialogElement>(null);
  const refTache = useRef<HTMLDialogElement>(null);
  const refSuppression = useRef<HTMLDialogElement>(null);
  const refModifier = useRef<HTMLDialogElement>(null);
  const [projetSupprimer, setProjetSupprimer] = useState<Projet | null>(null);
  const [tacheAModifier, setTacheAModifier] = useState<Tache | null>(null);
  const [voirProjet, setVoirProjet] = useState(true);

  const tachesAffichees = state.taches
    .filter((t) => state.projetAffiche === ID_VUE_TOUTES || t.idProjet === state.projetAffiche)
    .sort((a, b) => {
      if (a.echeance === "" && b.echeance === "") return 0;
      if (a.echeance === "") return 1;
      if (b.echeance === "") return -1;
      return compareAsc(parseISO(a.echeance), parseISO(b.echeance));
    })
    .sort((a, b) => {
      const ORDRE_PRIORITE: Record<Priorite, number> = { haute: 0, moyenne: 1, basse: 2 };
      const rangA = ORDRE_PRIORITE[a.priorite];
      const rangB = ORDRE_PRIORITE[b.priorite];
      return rangA - rangB;
    });

  const tacheEnCours = state.taches.filter((t) => t.fait === false);
  const reduceTaches = tacheEnCours.reduce((acc: Record<string, number>, tache) => {
    acc[tache.idProjet] = (acc[tache.idProjet] ?? 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(state));
  }, [state]);
  //Ebauche du return.
  //Translate à faire sur mobile
  return (
    <div className="bg-todo-fond text-todo-textP md:flex md:h-screen md:justify-center md:gap-8 md:p-8">
      <div
        className={cn(
          "fixed inset-0 flex flex-col items-center justify-center gap-8 bg-todo-section p-4 text-center transition-all md:visible md:static md:flex-1 md:translate-x-0 md:rounded-xl",
          !voirProjet && "invisible -translate-x-full",
        )}
      >
        <h1 className="mx-6 w-full rounded-xl border border-todo-accent/50 bg-todo-surface px-4 py-2 text-center">
          PROJETS
        </h1>
        <ul className="flex min-h-0 w-full flex-1 flex-col items-center gap-4 overflow-y-auto p-2">
          <li
            className={cn(
              "flex w-full rounded-xl bg-linear-to-r from-todo-surface to-todo-section shadow-todo-carte",
              state.projetAffiche === ID_VUE_TOUTES && "to-todo-accent/50",
            )}
          >
            <button
              onClick={() => {
                setVoirProjet(false);
                dispatch({ type: "choisirProjet", afficher: ID_VUE_TOUTES });
              }}
              className={`flex flex-1 cursor-pointer flex-col items-start rounded-xl p-4`}
            >
              <span className="font-semibold">Toutes</span>
              <span className="text-sm">{libelleCompteur(tacheEnCours.length)} </span>
            </button>
          </li>
          {state.projets.map((p) => (
            <li
              className={cn(
                "flex w-full rounded-xl bg-linear-to-r from-todo-surface to-todo-section shadow-todo-carte motion-safe:animate-apparition",
                state.projetAffiche === p.id && "to-todo-accent/50",
              )}
              key={p.id}
            >
              <button
                onClick={() => {
                  dispatch({ type: "choisirProjet", afficher: p.id });
                  setVoirProjet(false);
                }}
                className="flex flex-1 cursor-pointer flex-col items-start rounded-xl p-4"
              >
                <span className="font-semibold">{p.nom}</span>
                <span className="text-sm">{libelleCompteur(reduceTaches[p.id] ?? 0)}</span>
              </button>
              {p.id !== ID_PROJET_DEFAUT && (
                <button
                  className="m-4 cursor-pointer self-center rounded-full p-2"
                  aria-label={`Supprimer le projet ${p.nom}`}
                  onClick={() => {
                    setProjetSupprimer(p);
                    refSuppression.current?.showModal();
                  }}
                >
                  <Trash size={16} />
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex w-full items-center justify-between">
          <button
            onClick={() => setVoirProjet((prev) => !prev)}
            className="flex cursor-pointer gap-1 rounded-xl border border-todo-accent/50 px-4 py-2 shadow-todo-carte md:hidden"
          >
            <ChevronRight />
            <p>TACHES</p>
          </button>
          <button
            className="ml-auto cursor-pointer rounded-xl border border-todo-accent/50 px-4 py-2 shadow-todo-carte"
            onClick={() => refProjet.current?.showModal()}
          >
            Ajouter un Projet
          </button>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 flex flex-col items-center justify-center gap-8 bg-todo-section p-4 text-center transition-all md:visible md:static md:flex-2 md:translate-x-0 md:rounded-xl",
          voirProjet && "invisible translate-x-full",
        )}
      >
        <h1 className="mx-6 w-full rounded-xl border border-todo-accent/50 bg-todo-surface px-4 py-2 text-center">
          {state.projets.find((p) => p.id === state.projetAffiche)?.nom || "Toutes"}
        </h1>
        <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-4">
          {tachesAffichees.length === 0 ? (
            <p>Aucunes tâches dans ce projet</p>
          ) : (
            <ul className="flex min-h-0 w-full flex-col gap-4 overflow-y-auto p-2">
              {tachesAffichees.map((t) => (
                <li
                  className={cn(
                    "flex w-full justify-between rounded-xl border bg-todo-surface p-4 shadow-todo-carte motion-safe:animate-apparition",
                    PRIORITE_COULEUR[t.priorite],
                  )}
                  key={t.id}
                >
                  <details className="group flex flex-1 flex-col justify-between gap-4">
                    <summary className="flex list-none items-baseline justify-between">
                      <div className="flex items-baseline gap-8">
                        <input
                          className="size-5 cursor-pointer appearance-none rounded-full border-2 border-todo-accent checked:bg-todo-accent m-auto"
                          aria-label={`Marquer ${t.titre} comme faite`}
                          type="checkbox"
                          checked={t.fait}
                          onChange={() => dispatch({ type: "cocher", id: t.id })}
                        />
                        <ChevronRight className="m-auto transition-transform group-open:rotate-90" />
                        <h3 className={cn("font-semibold", t.fait && "line-through")}>{t.titre}</h3>
                      </div>
                      <p>
                        {estEnRetard(t.echeance, t.fait) && (
                          <span className="rounded-full bg-todo-retard p-2 font-bold">Retard</span>
                        )}
                      </p>
                    </summary>
                    <div className="flex flex-col gap-4">
                      <div className="text-start">
                        <p>Priorité : {PRIORITE_LIBELLE[t.priorite]}</p>
                        <p>Date d'échéance : {formaterEcheance(t.echeance)}</p>
                        <p>{t.description}</p>
                      </div>
                      <div className="flex justify-end gap-6">
                        <button
                          aria-label="Modifier"
                          onClick={() => {
                            setTacheAModifier(t);
                            refModifier.current?.showModal();
                          }}
                        >
                          <Pencil className="size-4 md:size-6" />
                        </button>
                        <button
                          aria-label={`Supprimer la tâche ${t.titre}`}
                          onClick={() => dispatch({ type: "supprimerTache", id: t.id })}
                        >
                          <Trash className="size-4 md:size-6" />
                        </button>
                      </div>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto flex w-full items-center justify-between">
            <button
              onClick={() => setVoirProjet((prev) => !prev)}
              className="flex cursor-pointer gap-1 rounded-xl border border-todo-accent/50 px-4 py-2 shadow-todo-carte md:hidden"
            >
              <Folder />
              <p>PROJETS</p>
            </button>
            <button
              className="cursor-pointer rounded-xl border border-todo-accent/50 px-4 py-2 shadow-todo-carte"
              onClick={() => refTache.current?.showModal()}
            >
              Ajouter une tâche
            </button>
          </div>
        </div>
      </div>

      {/* <button className=">Afficher Calendrier</button>
      <button className=">Paramètre des couleurs</button>*/}

      <Dialog
        ref={refProjet}
        title="Ajouter un projet"
        textBtnClose="Retour"
        textBtnValid="Valider"
        functionReducer={(data) =>
          dispatch({ type: "ajouterProjet", projet: { id: crypto.randomUUID(), nom: String(data.get("Projet")) } })
        }
      >
        <div className="my-6 flex flex-col gap-4">
          <label className={LIBELLE}>
            Nom du projet
            <input className={CHAMP} required name="Projet" placeholder="Ex. Salon de l'optique" />
          </label>
        </div>
      </Dialog>
      <Dialog
        ref={refTache}
        title="Ajouter une tâche"
        textBtnClose="Retour"
        textBtnValid="Ajouter"
        functionReducer={(data) =>
          dispatch({
            type: "ajouterTache",
            tache: creerTodo(data, state.projetAffiche !== ID_VUE_TOUTES ? state.projetAffiche : ID_PROJET_DEFAUT),
          })
        }
      >
        <div className="my-6 flex flex-col gap-4">
          <label className={LIBELLE}>
            Titre
            <input className={CHAMP} required name="Tache" placeholder="Ex. Commander les verres" />
          </label>

          <div className="flex gap-4">
            <label className={cn(LIBELLE, "flex-1")}>
              Priorité
              <select className={CHAMP} name="priorite">
                <option value="basse">Faible</option>
                <option value="moyenne">Moyenne</option>
                <option value="haute">Forte</option>
              </select>
            </label>
            <label className={cn(LIBELLE, "flex-1")}>
              Échéance
              <input className={cn(CHAMP, "[color-scheme:dark]")} name="date" type="date" />
            </label>
          </div>

          <label className={LIBELLE}>
            Description
            <textarea className={cn(CHAMP, "min-h-24 resize-y")} name="description" placeholder="Détails…" />
          </label>
        </div>
      </Dialog>
      <Dialog
        ref={refSuppression}
        title="Êtes-vous sûr de vouloir supprimer ?"
        textBtnClose="Annuler"
        textBtnValid="Supprimer"
        functionReducer={() => {
          if (!projetSupprimer) return;
          dispatch({ type: "supprimerProjet", id: projetSupprimer.id });
          setProjetSupprimer(null);
        }}
      >
        <p>Le projet {projetSupprimer?.nom} va être supprimé avec toutes ses tâches.</p>
      </Dialog>
      <Dialog
        ref={refModifier}
        textBtnClose="Retour"
        textBtnValid="Modifier"
        title="Modifier la tâche"
        functionReducer={(data) => {
          if (!tacheAModifier) return;
          dispatch({
            type: "modifierTache",
            tache: {
              ...tacheAModifier,
              ...lireChampsTache(data),
              idProjet: String(data.get("projet")),
            },
          });
          setTacheAModifier(null);
        }}
      >
        <div key={tacheAModifier?.id} className="my-6 flex flex-col gap-4">
          <label className={LIBELLE}>
            Titre
            <input className={CHAMP} required name="Tache" defaultValue={tacheAModifier?.titre} />
          </label>

          <div className="flex gap-4">
            <label className={cn(LIBELLE, "flex-1")}>
              Priorité
              <select className={CHAMP} name="priorite" defaultValue={tacheAModifier?.priorite}>
                <option value="basse">Faible</option>
                <option value="moyenne">Moyenne</option>
                <option value="haute">Forte</option>
              </select>
            </label>
            <label className={cn(LIBELLE, "flex-1 [color-scheme:dark]")}>
              Échéance
              <input className={CHAMP} name="date" type="date" defaultValue={tacheAModifier?.echeance} />
            </label>
          </div>

          <label className={LIBELLE}>
            Projet
            <select className={CHAMP} name="projet" defaultValue={tacheAModifier?.idProjet}>
              {state.projets.map((p) => (
                <option value={p.id} key={p.id}>
                  {p.nom}
                </option>
              ))}
            </select>
          </label>

          <label className={LIBELLE}>
            Description
            <textarea
              className={cn(CHAMP, "min-h-24 resize-y")}
              name="description"
              defaultValue={tacheAModifier?.description}
            />
          </label>
        </div>
      </Dialog>
    </div>
  );
}
