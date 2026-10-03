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
        titre="Ceci n'est pas un vrai site d'achat en ligne vous ne pouvez malheureusment pas acheter."
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

  return (
    <div className="mx-auto min-w-300 p-4">
      <h2 className="font-shop-titre text-3xl">Votre Panier</h2>
      <div className="grid grid-cols-3 place-items-center">
        <section className="col-span-2 w-full">
          <ul className="flex flex-col">
            {panier.map((a) => (
              <li key={a.produit.id} className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="size-24">
                    <img className="h-48 w-full shrink-0 object-contain" src={a.produit.image} alt={a.produit.title} />
                  </div>
                  <p>{a.produit.title}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex w-fit items-center gap-4 rounded-lg border border-gray-300 p-2 text-center">
                    <button
                      className="flex size-6 cursor-pointer items-center justify-center rounded-full pb-1 text-xl hover:bg-shop-primaire-survol"
                      aria-label="soustraire quantité"
                      disabled={a.quantite === 1}
                      onClick={() => modifierPanier(a.produit.id, -1)}
                    >
                      -
                    </button>
                    <p>{a.quantite}</p>
                    <button
                      className="flex size-6 cursor-pointer items-center justify-center rounded-full pb-1 text-xl hover:bg-shop-primaire-survol"
                      aria-label="ajouter quantité"
                      onClick={() => modifierPanier(a.produit.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-2xl font-semibold text-[#1D2633]">{formatEuro(a.produit.price * a.quantite)}</p>
                  <button
                    className="flex cursor-pointer items-center justify-center rounded-full p-2 text-xl hover:bg-shop-primaire-survol"
                    aria-label="supprimer du panier"
                    onClick={() => supprimerPanier(a.produit.id)}
                  >
                    <Trash className="size-6" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p>Recap à droite</p>
          <p>Total : {formatEuro(panier.reduce((acc, a) => acc + a.quantite * a.produit.price, 0))}</p>
          <Bouton onClick={() => setPaiement(true)}>Paiement</Bouton>
        </section>
      </div>
    </div>
  );
}

export { PanierPage };
