import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import type { Article, Produit } from "./type";
import { BarreRecherche } from "./BarreRecherche";
import { Home, ShoppingCart, Store } from "lucide-react";
import clsx from "clsx";

function LayoutPage() {
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");
  const [produits, setProduits] = useState<Produit[]>([]);
  const [panier, setPanier] = useState<Article[]>(() => {
    const memoire = localStorage.getItem("panier");
    return JSON.parse(memoire ?? "[]");
  });

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

  useEffect(() => {
    const memoire = JSON.stringify(panier);
    localStorage.setItem("panier", memoire);
  }, [panier]);

  const lienActif = ({ isActive }: { isActive: boolean }) =>
    clsx("flex gap-2 font-semibold hover:text-blue-600", isActive && "text-blue-600");

  return (
    <div className="flex min-h-screen flex-col pt-4 text-shop-texte">
      <header className="grid grid-cols-3 items-center px-12 py-3 text-center">
        <Link className="justify-self-start text-4xl font-bold hover:text-blue-400" to="/shopping-cart">
          ODIN Store
        </Link>
        <BarreRecherche produits={produits} />
        <nav className="flex gap-4 justify-self-end p-2">
          <NavLink end className={lienActif} to="/shopping-cart">
            <Home />
            <p>Accueil</p>
          </NavLink>
          <NavLink className={lienActif} to="/shopping-cart/boutique">
            <Store />
            <p>Boutique</p>
          </NavLink>
          <NavLink className={lienActif} to="/shopping-cart/panier">
            <span className="relative flex gap-2">
              <ShoppingCart />
              {nombreArticles > 0 && (
                <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                  {nombreArticles}
                </span>
              )}
            </span>
            <p>Votre panier</p>
          </NavLink>
        </nav>
      </header>

      <main className="flex flex-1 flex-col">
        <Outlet context={{ chargement, erreur, produits, ajouterPanier, panier, supprimerPanier, modifierPanier }} />
      </main>
    </div>
  );
}

export { LayoutPage };
