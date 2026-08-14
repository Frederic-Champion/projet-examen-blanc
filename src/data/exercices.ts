export interface Exercice {
  path: string;
  titre: string;
  description: string;
}

export const EXERCICES: Exercice[] = [
  {
    path: "/brouillon",
    titre: "Brouillon",
    description: "Page d'exercice Bac à Sable",
  },
  {
    path: "/calculatrice",
    titre: "Calculatrice",
    description: "Machine à états, cas limites, parsing d'entrée.",
  },
];

/* Maquette à remplir pour copier coller à la suite :

  {
    path: "/***",
    titre: "***",
    description: "***",
  },

*/
