import { Link, useOutletContext } from "react-router";
import type { FetchDataContext } from "./type";
import { formatEuro } from "../../utils/format";
import { useState } from "react";
import { EtatMessage } from "./EtatMessage";
import { FaceSlightlySmiling, ShoppingCart, Trash } from "lucide-react";
import { Bouton } from "./Bouton";

function PanierPage() {
  const { panier, supprimerPanier, modifierPanier } = useOutletContext<FetchDataContext>();
  const [paiment, setPaiement] = useState(false);

  if (paiment)
    return (
      <EtatMessage
        titre="Ceci n'est pas un vrai site d'achat en ligne vous ne pouvez malheureusement pas acheter."
        icone={<FaceSlightlySmiling className="size-10 text-shop-texte-doux" />}
      >
        <Link to="/shopping-cart/boutique" className="font-semibold text-shop-primaire hover:underline">
          Retour à la boutique
        </Link>
      </EtatMessage>
    );
  if (panier.length === 0)
    return (
      <EtatMessage
        texte="Les articles que vous ajoutez apparaîtront ici."
        icone={<ShoppingCart className="size-10 text-shop-texte-doux" />}
        titre="Votre panier est vide."
      >
        <Link to="/shopping-cart/boutique" className="font-semibold text-shop-primaire hover:underline">
          Retour à la boutique
        </Link>
      </EtatMessage>
    );

  const total = panier.reduce((acc, a) => acc + a.quantite * a.produit.price, 0);
  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <h2 className="py-8 font-shop-titre text-3xl">Votre Panier</h2>
      <div className="grid grid-cols-3 gap-6 items-start">
        <section className="col-span-2 rounded-lg bg-white p-6 shadow-shop-flottant">
          <ul className="flex flex-col">
            {panier.map((a) => (
              <li key={a.produit.id} className="flex items-center gap-4 border-b border-gray-200 py-4">
                <img className="size-16 shrink-0 object-contain" src={a.produit.image} alt={a.produit.title} />
                <div className="flex w-full items-center justify-between">
                  <Link
                    to={`/shopping-cart/boutique/${a.produit.id}`}
                    title={a.produit.title}
                    className="min-w-0 flex-1 truncate text-lg hover:text-shop-primaire-survol"
                  >
                    {a.produit.title}
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="flex w-fit items-center gap-4 rounded-lg border border-gray-300 p-2 text-center">
                      <button
                        className="flex size-6 cursor-pointer items-center justify-center rounded-full pb-1 text-xl hover:bg-shop-primaire-survol"
                        aria-label="soustraire quantité"
                        onClick={() =>
                          a.quantite === 1 ? supprimerPanier(a.produit.id) : modifierPanier(a.produit.id, -1)
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        aria-label="Quantité"
                        value={a.quantite}
                        onChange={(e) => {
                          const nouvelleQuantite = Number(e.target.value);
                          if (nouvelleQuantite < 1) return;
                          modifierPanier(a.produit.id, nouvelleQuantite - a.quantite);
                        }}
                        className="w-8 text-center tabular-nums"
                      />
                      <button
                        className="flex size-6 cursor-pointer items-center justify-center rounded-full pb-1 text-xl hover:bg-shop-primaire-survol"
                        aria-label="ajouter quantité"
                        onClick={() => modifierPanier(a.produit.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="w-32 shrink-0 text-center text-2xl font-semibold whitespace-nowrap text-[#1D2633] tabular-nums">
                      {formatEuro(a.produit.price * a.quantite)}
                    </p>
                    <button
                      className="flex cursor-pointer items-center justify-center rounded-full p-2 text-xl hover:bg-shop-primaire-survol"
                      aria-label="supprimer du panier"
                      onClick={() => supprimerPanier(a.produit.id)}
                    >
                      <Trash className="size-6" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col">
          <div className="flex flex-col gap-2 rounded-lg bg-white p-6 shadow-shop-flottant">
            <div className="flex justify-between">
              <p>Total panier :</p>
              <p>{formatEuro(total)}</p>
            </div>
            <div className="flex justify-between">
              <p>Livraison :</p>
              <p>Offerte</p>
            </div>
            <div className="mt-2 flex justify-between border-t border-gray-200 pt-4 text-xl">
              <p>Total :</p>
              <p className="text-shop-prix tabular-nums">{formatEuro(total)}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <Bouton className="mt-4 text-xl" onClick={() => setPaiement(true)}>
              Paiement
            </Bouton>
            <Link
              className="mt-4 rounded-lg border bg-white px-4 py-2 text-center text-shop-texte-doux hover:bg-black hover:text-white"
              to={"/shopping-cart/boutique"}
            >
              ... ou continuer mes achats
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export { PanierPage };
