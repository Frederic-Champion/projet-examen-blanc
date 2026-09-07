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
    path: "/cv-application",
    titre: "Odin - CV Application",
    description: "Premier Exercice du projet Odin React",
  },
    {
    path: "/catalogue",
    titre: "Catalogue Montures useParams",
    description: "Apprentissage de useParams",
  },
    {
    path: "/page-calculatrice",
    titre: "Page Calculatrice",
    description: "Lien vers les exercices de calculatrice",
  },

];

/* Maquette à remplir pour copier coller à la suite :

  {
    path: "/***",
    titre: "***",
    description: "***",
  },

*/
