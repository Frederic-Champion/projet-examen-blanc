import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import type { Article, Produit } from "./type";
import { BarreRecherche } from "./BarreRecherche";
import { Home, ShoppingCart, Store, X } from "lucide-react";
import clsx from "clsx";
import { formatEuro } from "../../utils/format";
import { cn } from "../../utils/cn";
import { SelecteurQuantite } from "./SelecteurQuantite";

function LayoutPage() {
  const location = useLocation();
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");
  const [produits, setProduits] = useState<Produit[]>([]);
  const [panier, setPanier] = useState<Article[]>(() => {
    const memoire = localStorage.getItem("panier");
    return JSON.parse(memoire ?? "[]");
  });
  const [bandeOuverte, setBandeOuverte] = useState(false);

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
    setBandeOuverte(true);
  }

  function supprimerPanier(id: number) {
    setPanier((prev) => {
      return prev.filter((a) => a.produit.id !== id);
    });
  }

  function modifierPanier(id: number, delta: number) {
    setPanier((prev) => {
      return prev.map((a) => (a.produit.id !== id ? a : { ...a, quantite: a.quantite + delta }));
    });
    setBandeOuverte(true);
  }

  useEffect(() => {
    const memoire = JSON.stringify(panier);
    localStorage.setItem("panier", memoire);
  }, [panier]);

  const nombreArticles = panier.reduce((acc, a) => acc + a.quantite, 0);
  const lienActif = ({ isActive }: { isActive: boolean }) =>
    clsx("flex gap-2 font-semibold hover:text-blue-600", isActive && "text-blue-600");
  const afficherBande = nombreArticles > 0 && location.pathname.startsWith("/shopping-cart/boutique");

  return (
    <div className="flex min-h-screen flex-col bg-stone-100 pt-4 font-shop-texte text-shop-texte">
      <header className="px-[clamp(16px,13.09vw-41px,160px)] grid grid-cols-2 gap-2 items-center py-3 text-center lg:grid-cols-3">
        <Link className="justify-self-start font-shop-titre text-4xl hover:text-blue-400" to="/shopping-cart">
          ODIN Store
        </Link>
        <BarreRecherche className="order-last col-span-2 lg:order-0 lg:col-span-1" produits={produits} />
        <nav className="flex gap-4 justify-self-end">
          <NavLink end className={lienActif} to="/shopping-cart">
            <Home />
            <p className="hidden md:block">Accueil</p>
          </NavLink>
          <NavLink className={lienActif} to="/shopping-cart/boutique">
            <Store />
            <p className="hidden md:block">Boutique</p>
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
            <p className="hidden md:block lg:hidden xl:block">Votre panier</p>
          </NavLink>
        </nav>
      </header>

      <main className="flex flex-1 flex-col">
        <Outlet context={{ chargement, erreur, produits, ajouterPanier, panier, supprimerPanier, modifierPanier }} />
      </main>

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-20 hidden w-36 translate-x-full flex-col border border-gray-400 bg-stone-100 p-2 text-center transition-transform duration-300 2xl:flex",
          afficherBande && bandeOuverte && "translate-x-0",
        )}
      >
        <div className="flex shrink-0 flex-col border-b border-gray-300 pb-4">
          <button
            className="absolute top-1 right-1 cursor-pointer rounded-full p-1 hover:bg-gray-200"
            aria-label="Fermer le panier"
            onClick={() => setBandeOuverte(false)}
          >
            <X className="size-4" />
          </button>
          <h3>Sous-total</h3>
          <p className="text-shop-prix">
            {formatEuro(panier.reduce((acc, a) => acc + a.quantite * a.produit.price, 0))}
          </p>
          <Link
            className="my-2 cursor-pointer rounded-lg border bg-blue-500 px-1 py-0.5 text-white hover:bg-shop-primaire"
            to="/shopping-cart/panier"
          >
            Aller au panier
          </Link>
        </div>
        <ul className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          {panier.map((a) => (
            <li
              className="flex flex-col items-center justify-center gap-2 border-b border-gray-300 py-4"
              key={a.produit.id}
            >
              <Link to={`/shopping-cart/boutique/${a.produit.id}`} title={a.produit.title}>
                <img className="size-20 shrink-0 object-contain" src={a.produit.image} alt={a.produit.title} />
              </Link>
              <p className="shrink-0 text-center font-semibold text-[#1D2633] tabular-nums">
                {formatEuro(a.produit.price * a.quantite)}
              </p>
              <SelecteurQuantite
                quantite={a.quantite}
                onChangerQuantite={(nouvelle) =>
                  nouvelle === 0 ? supprimerPanier(a.produit.id) : modifierPanier(a.produit.id, nouvelle - a.quantite)
                }
              />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export { LayoutPage };
