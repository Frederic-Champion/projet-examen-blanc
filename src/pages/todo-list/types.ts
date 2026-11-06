/*
 * Liste les types rencontré dans la todo list.
 */

export interface Tache {
  id: string;
  idProjet: string;
  titre: string;
  priorite: "basse" | "moyenne" | "haute";
  description: string;
  echeance: string;
  fait: boolean
}

export interface Projet {
  id: string;
  nom: string;
}

export interface StateTodo {
  projets: Projet[];
  taches: Tache[];
  projetAffiche: string;
}

export type ActionReducer =
  | { type: "ajouterProjet", projet: Projet }
  | { type: "ajouterTache", tache: Tache}
  | { type: "cocher", id: string }
  | { type: "supprimerProjet", id: string }
  | { type: "choisirProjet", afficher: string}
  | { type: "supprimerTache", id: string }
  | { type: "modifierTache", tache: Tache };
