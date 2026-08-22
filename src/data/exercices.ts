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
    {
    path: "/calculatrice-pageblanche",
    titre: "Calculatrice Page Blanche",
    description: "Exercice calculatrice refait seul",
  },
];

/* Maquette à remplir pour copier coller à la suite :

  {
    path: "/***",
    titre: "***",
    description: "***",
  },

*/
