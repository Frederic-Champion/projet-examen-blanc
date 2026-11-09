import { useReducer, useRef, useState } from "react";
import type { Priorite, Projet, StateTodo } from "./types";
import { ID_PROJET_DEFAUT, ID_VUE_TOUTES, reducerTodo } from "./componentsReducer";
import { Dialog } from "./Dialog";
import { Trash } from "lucide-react";

const ETAT_INITIAL: StateTodo = {
  projets: [{ id: ID_PROJET_DEFAUT, nom: "Général" }],
  taches: [],
  projetAffiche: ID_VUE_TOUTES,
};

export function TodoList() {
  const [state, dispatch] = useReducer(reducerTodo, ETAT_INITIAL);
  const refProjet = useRef<HTMLDialogElement>(null);
  const refTache = useRef<HTMLDialogElement>(null);
  const refSuppression = useRef<HTMLDialogElement>(null);
  const [projetSupprimer, setProjetSupprimer] = useState<Projet | null>(null);

  const tachesAffichees = state.taches.filter(
    (t) => state.projetAffiche === ID_VUE_TOUTES || t.idProjet === state.projetAffiche,
  );

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
            Toutes
          </button>
        </li>
        {state.projets.map((p) => (
          <li key={p.id}>
            <button
              onClick={() => dispatch({ type: "choisirProjet", afficher: p.id })}
              className={`w-fit rounded-full ${state.projetAffiche === p.id ? "bg-blue-300" : ""}`}
            >
              {p.nom}
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
              <li key={t.id}>
                <h3>{t.titre}</h3>
                <p>{t.priorite}</p>
                <p>{t.echeance}</p>
                <p>{t.description}</p>
                <input
                  aria-label={`Marquer ${t.titre} comme faite`}
                  type="checkbox"
                  checked={t.fait}
                  onChange={() => dispatch({ type: "cocher", id: t.id })}
                />
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
            tache: {
              titre: String(data.get("Tache")),
              id: crypto.randomUUID(),
              priorite: String(data.get("priorite")) as Priorite,
              description: String(data.get("description")),
              echeance: String(data.get("date")),
              idProjet: state.projetAffiche !== ID_VUE_TOUTES ? state.projetAffiche : ID_PROJET_DEFAUT,
              fait: false,
            },
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
    </div>
  );
}
