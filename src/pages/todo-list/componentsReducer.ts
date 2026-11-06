import type { ActionReducer, StateTodo } from "./types";

export const ID_PROJET_DEFAUT = "general";

export function reducerTodo(state: StateTodo, action: ActionReducer): StateTodo {
  switch (action.type) {
    case "ajouterProjet":
      return { ...state, projets: [...state.projets, action.projet] };
    case "ajouterTache":
      return { ...state, taches: [...state.taches, action.tache] };
    case "cocher":
      return { ...state, taches: state.taches.map((t) => (t.id !== action.id ? t : { ...t, fait: !t.fait })) };
    case "supprimerProjet":
      if (action.id === ID_PROJET_DEFAUT) return state;
      return {
        ...state,
        taches: state.taches.filter((t) => t.idProjet !== action.id),
        projets: state.projets.filter((p) => p.id !== action.id),
        projetAffiche: ID_PROJET_DEFAUT,
      };
    case "choisirProjet":
      return { ...state, projetAffiche: action.afficher };
    case "supprimerTache":
      return { ...state, taches: state.taches.filter((t) => t.id !== action.id) };
    case "modifierTache":
      return { ...state, taches: state.taches.map((t) => (t.id !== action.tache.id ? t : action.tache)) };
  }
}
