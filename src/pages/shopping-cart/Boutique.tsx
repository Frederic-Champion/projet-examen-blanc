import { Link, useOutletContext } from "react-router";
import type { FetchDataContext } from "./type";
import { formatEuro } from "../../utils/format";
import { Bouton } from "./Bouton";

function BoutiquePage() {
  const { chargement, erreur, produits, ajouterPanier } = useOutletContext<FetchDataContext>();

  if (chargement) return <p>Chargement à habiller</p>;
  if (erreur) return <p>erreur : {erreur}</p>;
  return (
    <div className="mx-auto max-w-7xl p-4">
      <h2>La boutique</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {produits.map((produit) => (
          <article
            key={produit.id}
            className="flex flex-col overflow-hidden rounded-lg bg-shop-surface shadow-shop-flottant"
          >
            <Link to={`/shopping-cart/boutique/${produit.id}`} className="block p-6">
              <img className="h-48 w-full object-contain" src={produit.image} alt={produit.title} />
            </Link>

            <div className="flex flex-1 flex-col gap-4 bg-stone-50 p-4">
              <h3 className="line-clamp-2 h-14 text-lg font-semibold">{produit.title}</h3>

              <div className="mt-auto flex items-center justify-between">
                <p className="text-xl font-bold text-shop-prix">{formatEuro(produit.price)}</p>
                <Bouton
                  label="Ajouter"
                  className="flex size-11 items-center justify-center rounded-full text-3xl"
                  onClick={() => ajouterPanier(produit, 1)}
                >
                  +
                </Bouton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export { BoutiquePage };
