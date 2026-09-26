export interface Produit {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface FetchDataContext {
  chargement: boolean;
  erreur: string;
  produits: Produit[];
  panier: Article[];
  ajouterPanier: (produit: Produit, quantite: number) => void;
  supprimerPanier: (id: number) => void;
  modifierPanier: (id:number, delta: number) => void;
}

export interface Article {
  produit: Produit;
  quantite: number;
}