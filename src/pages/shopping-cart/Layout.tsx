import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import type { Article, Produit } from "./type";

function LayoutPage() {
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");
  const [produits, setProduits] = useState<Produit[]>([]);
  const [panier, setPanier] = useState<Article[]>(() => {
    const memoire =localStorage.getItem("panier");
    return JSON.parse(memoire ?? "[]")
  });
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    async function fetchData() {
      const URL = "https://fakestoreapi.com/products";
      const reponse = await fetch(URL);
      if (!reponse.ok) throw new Error("Impossible de récupérer les données");
      const data: Produit[] = await reponse.json();
      setProduits(data);
    }
    fetchData()
      .catch((e) => setErreur(e instanceof Error ? e.message : "erreur inconnu"))
      .finally(() => setChargement(false));
  }, []);

  function ajouterPanier(produit: Produit, quantite: number) {
    setPanier((prev) => {
      const dejaPresent = prev.some((a) => a.produit.id === produit.id);
      if (dejaPresent) {
        return prev.map((a) => (a.produit.id === produit.id ? { ...a, quantite: a.quantite + quantite } : a));
      }
      return [...prev, { produit, quantite }];
    });
  }
  const nombreArticles = panier.reduce((acc, a) => acc + a.quantite, 0);

  function supprimerPanier(id: number) {
    setPanier((prev) => {
      return prev.filter((a) => a.produit.id !== id);
    });
  }

  function modifierPanier(id: number, delta: number) {
    setPanier((prev) => {
      return prev.map((a) => (a.produit.id !== id ? a : { ...a, quantite: a.quantite + delta }));
    });
  }

  function rechercher(mot: string) {
    setRecherche(mot);
    
  }

  useEffect(() => {
    const memoire = JSON.stringify(panier);
    localStorage.setItem("panier", memoire);
  }, [panier]);


  return (
    <div className="pt-16">
      <header className="flex justify-between">
        <Link to="/shopping-cart">Un titre sur la gauche ramenant également à l'accueil</Link>
        <div>
          <input value={recherche} onChange={(e) => setRecherche(e.target.value)} placeholder="Recherchez un article, un produit ..." />
          <button>🔍</button>
        </div>
        <nav>
          <NavLink end className={({ isActive }) => (isActive ? "text-blue-600" : "")} to="/shopping-cart">
            Accueil
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "")} to="/shopping-cart/boutique">
            Boutique
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "")} to="/shopping-cart/panier">
            <p>Panier</p>
            <p>{nombreArticles ? nombreArticles : ""}</p>
          </NavLink>
        </nav>
      </header>

      <Outlet context={{ chargement, erreur, produits, ajouterPanier, panier, supprimerPanier, modifierPanier }} />
    </div>
  );
}

export { LayoutPage };
