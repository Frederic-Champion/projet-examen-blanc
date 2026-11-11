import { useEffect, useReducer, useRef, useState } from "react";
import type { Projet, StateTodo, Tache } from "./types";
import { ID_PROJET_DEFAUT, ID_VUE_TOUTES, reducerTodo } from "./componentsReducer";
import { Dialog } from "./Dialog";
import { Pencil, Trash } from "lucide-react";
import { creerTodo, lireChampsTache } from "./Todo-utils";

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

  const tachesAffichees = state.taches.filter(
    (t) => state.projetAffiche === ID_VUE_TOUTES || t.idProjet === state.projetAffiche,
  );

  const reduceTaches = state.taches.reduce((acc: Record<string, number>, tache) => {
    acc[tache.idProjet] = (acc[tache.idProjet] ?? 0) + 1 ;
    return acc
  },{})

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(state));
  }, [state]);
  //Ebauche du return.
  //Translate à faire sur mobile
  return (
    <div className="pt-16">
      <h1>Todo-list</h1>
      <ul className="flex flex-col items-center">
        <li>
          <button
            onClick={() => dispatch({ type: "choisirProjet", afficher: ID_VUE_TOUTES })}
            className={`w-fit rounded-full ${state.projetAffiche === ID_VUE_TOUTES ? "bg-blue-300" : ""}`}
          >
            <span>Toutes</span>
            <span>{state.taches.length}</span>
          </button>
        </li>
        {state.projets.map((p) => (
          <li key={p.id}>
            <button
              onClick={() => dispatch({ type: "choisirProjet", afficher: p.id })}
              className={`w-fit rounded-full ${state.projetAffiche === p.id ? "bg-blue-300" : ""}`}
            >
              <span>{p.nom}</span>
              <span>{reduceTaches[p.id] ?? "0"}</span>
            </button>
            {p.id !== ID_PROJET_DEFAUT && (
              <button
                aria-label={`Supprimer le projet ${p.nom}`}
                onClick={() => {
                  setProjetSupprimer(p);
                  refSuppression.current?.showModal();
                }}
              >
                <Trash />
              </button>
            )}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => refProjet.current?.showModal()}>Ajouter un Projet</button>
      </div>

      <div>
        {tachesAffichees.length === 0 ? (
          <p>Aucunes taches dans ce projet</p>
        ) : (
          <ul>
            {tachesAffichees.map((t) => (
              <li className="flex" key={t.id}>
                <input
                  aria-label={`Marquer ${t.titre} comme faite`}
                  type="checkbox"
                  checked={t.fait}
                  onChange={() => dispatch({ type: "cocher", id: t.id })}
                />
                <details className="flex-1">
                  <summary className="flex">
                    <h3>{t.titre}</h3>
                    <p>{t.echeance}</p>
                  </summary>
                  <p>{t.priorite}</p>
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
        <div>
          <button onClick={() => refTache.current?.showModal()}>Ajouter Tache</button>
        </div>
      </div>

      {/* <button className="border">Afficher Calendrier</button>
      <button className="border">Paramètre des couleurs</button>
      <button className="border">Switch liste et taches</button> */}

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
