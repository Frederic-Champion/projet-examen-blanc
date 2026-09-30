import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import type { Article, Produit } from "./type";
import { BarreRecherche } from "./BarreRecherche";
import { Home, ShoppingCart, Store } from "lucide-react";

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

  return (
    <div className=" flex min-h-screen flex-col pt-4">
      <header className="grid grid-cols-3 items-center text-center px-12 py-3">
        <Link className="text-4xl font-bold justify-self-start hover:text-blue-400" to="/shopping-cart">ODIN Store</Link>
        <BarreRecherche produits={produits} />
        <nav className="flex gap-4 p-2 justify-self-end">
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? "flex gap-1 text-blue-600 font-semibold hover:text-blue-600" : "flex gap-2 font-semibold hover:text-blue-600"
            }
            to="/shopping-cart"
          >
            <Home />
            <p>Accueil</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "flex gap-1 text-blue-600 font-semibold hover:text-blue-600" : "flex gap-2 font-semibold hover:text-blue-600"
            }
            to="/shopping-cart/boutique"
          >
            <Store />
            <p>Boutique</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "flex gap-1 text-blue-600 font-semibold hover:text-blue-600" : "flex gap-2 font-semibold hover:text-blue-600"
            }
            to="/shopping-cart/panier"
          >
            <ShoppingCart />
            <p>Votre panier</p>
            <p>{nombreArticles ? nombreArticles : ""}</p>
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
