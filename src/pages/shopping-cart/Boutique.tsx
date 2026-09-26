import { Link, useOutletContext } from "react-router";
import type { FetchDataContext } from "./type";
import { formatEuro } from "../../utils/format";

function BoutiquePage() {
  const { chargement, erreur, produits, ajouterPanier } = useOutletContext<FetchDataContext>();

  if (chargement) return <p>Chargement à habiller</p>;
  if (erreur) return <p>erreur : {erreur}</p>;
  return (
    <div className="mx-auto max-w-6xl p-4">
      <h2>La boutique</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {produits.map((produit) => (
          <article key={produit.id}>
            <Link to={`/shopping-cart/boutique/${produit.id}`} >
              <img className="h-48 w-full object-contain" src={produit.image} alt={produit.title} />
              <h3>{produit.title}</h3>
            </Link>
              <p>{formatEuro(produit.price)}</p>
              <button onClick={() => ajouterPanier(produit, 1)} className="cursor-pointer">[ajouter au panier]</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export { BoutiquePage };
