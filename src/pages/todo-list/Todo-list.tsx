import { useEffect, useReducer, useRef, useState } from "react";
import type { Priorite, Projet, StateTodo, Tache } from "./types";
import { ID_PROJET_DEFAUT, ID_VUE_TOUTES, reducerTodo } from "./componentsReducer";
import { Dialog } from "./Dialog";
import { ChevronRight, Folder, Pencil, Trash } from "lucide-react";
import { creerTodo, estEnRetard, formaterEcheance, lireChampsTache } from "./Todo-utils";
import { compareAsc, parseISO } from "date-fns";
import { cn } from "../../utils/cn";

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
    if (!Array.isArray(stockage.taches)) throw new ErreurDonnees("taches n'est pas de la bonne forme");
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

  const reduceTaches = state.taches.reduce((acc: Record<string, number>, tache) => {
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
          "md fixed inset-0 flex flex-col items-center justify-center gap-8 bg-todo-section p-4 text-center transition-all md:visible md:static md:flex-1 md:translate-x-0 md:rounded-xl",
          !voirProjet && "invisible -translate-x-full",
        )}
      >
        <h1 className="mx-6 w-full rounded-xl bg-todo-surface px-4 py-2 text-center border border-todo-accent/50">PROJETS</h1>
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
              <span className="text-sm">{state.taches.length} tâches en cours</span>
            </button>
          </li>
          {state.projets.map((p) => (
            <li
              className={cn(
                "flex w-full rounded-xl bg-linear-to-r from-todo-surface to-todo-section shadow-todo-carte",
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
                <span className="text-sm">{reduceTaches[p.id] ?? "0"} tâche en cours</span>
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
            className="flex cursor-pointer gap-1 rounded-xl px-4 py-2 md:hidden shadow-todo-carte border border-todo-accent/50"
          >
            <ChevronRight />
            <p>TACHES</p>
          </button>
          <button className="ml-auto cursor-pointer rounded-xl px-4 py-2 shadow-todo-carte border border-todo-accent/50" onClick={() => refProjet.current?.showModal()}>
            Ajouter un Projet
          </button>
        </div>
      </div>
      <div
        className={cn(
          "md fixed inset-0 flex flex-col items-center justify-center gap-8 bg-todo-section p-4 text-center transition-all md:visible md:static md:flex-2 md:translate-x-0 md:rounded-xl",
          voirProjet && "invisible translate-x-full",
        )}
      >
        <h1 className="mx-6 w-full rounded-xl bg-todo-surface px-4 py-2 text-center border border-todo-accent/50">
          {state.projets.find((p) => p.id === state.projetAffiche)?.nom || "Toutes"}
        </h1>
        <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-4">
          {tachesAffichees.length === 0 ? (
            <p>Aucunes taches dans ce projet</p>
          ) : (
            <ul className="flex min-h-0 w-full flex-col gap-4 p-2 overflow-y-auto">
              {tachesAffichees.map((t) => (
                <li className="flex w-full justify-between rounded-xl bg-todo-surface p-4 shadow-todo-carte" key={t.id}>
                  <input
                    aria-label={`Marquer ${t.titre} comme faite`}
                    type="checkbox"
                    checked={t.fait}
                    onChange={() => dispatch({ type: "cocher", id: t.id })}
                  />
                  <details className="flex-1">
                    <summary className="flex">
                      <h3>{t.titre}</h3>
                      <p>{t.priorite}</p>
                      <p>{formaterEcheance(t.echeance)}</p>
                      {estEnRetard(t.echeance, t.fait) && <span>En retard</span>}
                    </summary>
                    <p>{t.description}</p>
                  </details>
                  <button
                    aria-label="Modifier"
                    onClick={() => {
                      setTacheAModifier(t);
                      refModifier.current?.showModal();
                    }}
                  >
                    <Pencil />
                  </button>
                  <button
                    aria-label={`Supprimer la tâche ${t.titre}`}
                    onClick={() => dispatch({ type: "supprimerTache", id: t.id })}
                  >
                    <Trash />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto flex w-full items-center justify-between">
            <button
              onClick={() => setVoirProjet((prev) => !prev)}
              className="flex cursor-pointer gap-1 rounded-xl px-4 py-2 md:hidden shadow-todo-carte border border-todo-accent/50"
            >
              <Folder />
              <p>PROJETS</p>
            </button>
            <button className="cursor-pointer rounded-xl shadow-todo-carte px-4 py-2 border border-todo-accent/50" onClick={() => refTache.current?.showModal()}>
              Ajouter une tache
            </button>
          </div>
        </div>
      </div>

      {/* <button className=">Afficher Calendrier</button>
      <button className=">Paramètre des couleurs</button>
      <button className=">Switch liste et taches</button> */}

      <Dialog
        ref={refProjet}
        title="Ajouter un projet"
        textBtnClose="Retour"
        textBtnValid="Valider"
        functionReducer={(data) =>
          dispatch({ type: "ajouterProjet", projet: { id: crypto.randomUUID(), nom: String(data.get("Projet")) } })
        }
      >
        <input aria-label="Nom du projet" required name="Projet" placeholder="Nom du projet" />
      </Dialog>
      <Dialog
        ref={refTache}
        title="Ajouter une tache"
        textBtnClose="Retour"
        textBtnValid="Ajouter"
        functionReducer={(data) =>
          dispatch({
            type: "ajouterTache",
            tache: creerTodo(data, state.projetAffiche !== ID_VUE_TOUTES ? state.projetAffiche : ID_PROJET_DEFAUT),
          })
        }
      >
        <input required aria-label="Titre de la tâche" name="Tache" placeholder="Titre de la tache" />
        <select aria-label="Priorité" name="priorite">
          <option value="basse">Faible</option>
          <option value="moyenne">Moyenne</option>
          <option value="haute">Forte</option>
        </select>
        <input aria-label="Échéance" name="date" type="date" placeholder="Quel date" />
        <textarea aria-label="Description" name="description" placeholder="Description..." />
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
        title="Modifier les informations"
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
        <div key={tacheAModifier?.id}>
          <input
            required
            aria-label="Titre de la tâche"
            name="Tache"
            placeholder="Titre de la tache"
            defaultValue={tacheAModifier?.titre}
          />
          <select aria-label="Priorité" name="priorite" defaultValue={tacheAModifier?.priorite}>
            <option value="basse">Faible</option>
            <option value="moyenne">Moyenne</option>
            <option value="haute">Forte</option>
          </select>
          <select aria-label="Projet" name="projet" defaultValue={tacheAModifier?.idProjet}>
            {state.projets.map((p) => (
              <option value={p.id} key={p.id}>
                {p.nom}
              </option>
            ))}
          </select>
          <input
            aria-label="Échéance"
            name="date"
            type="date"
            placeholder="Quel date"
            defaultValue={tacheAModifier?.echeance}
          />
          <textarea
            aria-label="Description"
            name="description"
            placeholder="Description..."
            defaultValue={tacheAModifier?.description}
          />
        </div>
      </Dialog>
    </div>
  );
}
