import { useReducer, useRef, useState } from "react";
import type { StateTodo } from "./types";
import { ID_PROJET_DEFAUT, reducerTodo } from "./componentsReducer";
import { Dialog } from "./Dialog";

const ETAT_INITIAL: StateTodo = {
  projets: [{ id: ID_PROJET_DEFAUT, nom: "Général" }],
  taches: [],
  projetAffiche: ID_PROJET_DEFAUT,
};

export function TodoList() {
  const [state, dispatch] = useReducer(reducerTodo, ETAT_INITIAL);
  const refProjet = useRef<HTMLDialogElement>(null);
  const refTache = useRef<HTMLDialogElement>(null);
  const [input, setInput] = useState("");

  //Ebauche du return.
  //Translate à faire sur mobile
  return (
    <div className="pt-16">
      <h1>Todo-list en titre</h1>
      <ul className="flex flex-col items-center">
        {state.projets.map((p) => (
          <li key={p.id}>
            <button className="w-fit rounded-full">{p.nom}</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => refProjet.current?.showModal()}>Ajouter un Projet</button>
        {/* idée du bouton tache si pas trop encombrannt */}
        <button>Ajouter une tache dans la liste de son choix (general / nouveau projet / lié à un projet)</button>
      </div>

      <div>
        <ul>
          {state.taches.map((t) => (
            <li key={t.id}>
              <h3>{t.titre}</h3>
              <p>{t.priorite}</p>
              <p>{t.echeance}</p>
              <p>{t.description}</p>
              <input type="checkbox" checked={t.fait} />
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => refTache.current?.showModal()}>Ajouter Tache</button>
        </div>
      </div>

      {/* <button className="border">Afficher Calendrier</button>
      <button className="border">Paramètre des couleurs</button>
      <button className="border">Switch liste et taches</button> */}

      {/* Composant <Dialog /> a faire plus tard je pense. */}
      <Dialog
        ref={refProjet}
        title="Ajouter un projet"
        textBtnClose="Retour"
        textBtnValid="Valider"
        functionReducer={() => dispatch({ type: "ajouterProjet", projet: { id: crypto.randomUUID(), nom: input } })}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nom du projet" />
      </Dialog>

      {/* <dialog
        onClick={(e) => e.target === e.currentTarget && refProjet.current?.close()}
        className="m-auto backdrop:bg-transparent"
        ref={refProjet}
      >
        <div className="bg-stone-100">
          <h3>Ajouter un projet :</h3>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nom du projet" />
          <button
            onClick={() => {
              dispatch({ type: "ajouterProjet", projet: { id: crypto.randomUUID(), nom: input } });
              refProjet.current?.close();
            }}
          >
            valide
          </button>
          <button onClick={() => refProjet.current?.close()}>Retour</button>
        </div>
      </dialog> */}
    </div>
  );
}
