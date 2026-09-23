import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import type { Produit } from "./type";

function LayoutPage() {
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");
  const [produits, setProduits] = useState<Produit[]>([]);


  useEffect(() => {
    async function fetchData() {
        const URL = 'https://fakestoreapi.com/products';
        const reponse = await fetch(URL);
        if (!reponse.ok) throw new Error("Impossible de récupérer les données");
        const data = await reponse.json();
        setProduits(data);
    }
    fetchData()
      .catch(e => setErreur(e instanceof Error ? e.message : "erreur inconnu"))
      .finally(() => setChargement(false))
  }, [])

  return (
    <div className="pt-16">
      <header className="flex justify-between">
        <Link to="/shopping-cart">Un titre sur la gauche ramenant également à l'accueil</Link>
        <nav>
          <NavLink end className={({isActive}) => isActive ? "text-blue-600" : ""} to="/shopping-cart">Accueil</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-blue-600" : ""} to="/shopping-cart/boutique">Boutique</NavLink>
          <NavLink className={({isActive}) => isActive ? "text-blue-600" : ""} to="/shopping-cart/panier">Panier</NavLink>
        </nav>
      </header>

      <Outlet context={{chargement, erreur, produits}} />
    </div>
  );
}

export { LayoutPage };
