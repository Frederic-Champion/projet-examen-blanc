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
  produits: Produit[]
}

export interface Article {
  produit: Produit;
  quantite: string;
}