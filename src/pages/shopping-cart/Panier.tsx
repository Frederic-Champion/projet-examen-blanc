import { Link, useOutletContext } from "react-router";
import type { FetchDataContext } from "./type";
import { formatEuro } from "../../utils/format";
import { useState } from "react";

function PanierPage() {
  const { panier, supprimerPanier, modifierPanier } = useOutletContext<FetchDataContext>();
  const [paiment, setPaiement] = useState(false);

  if (paiment)
    return (
      <div>
        <h2>Il s'agit d'un exercice, vous ne pouvez malheureusement acheter ces articles ;-)</h2>
      </div>
    );
  if (panier.length === 0)
    return (
      <div>
        <p>VOTRE PANIER EST VIDE Les éléments que vous ajoutez seront affichés ici</p>
        <Link to="/shopping-cart/boutique">Retour à la boutique</Link>
      </div>
    );
  return (
    <div>
      <h2>Un panier a habiller</h2>
      <ul>
        {panier.map((a) => (
          <li key={a.produit.id} className="inline-flex">
            <img className="h-48 w-full object-contain" src={a.produit.image} alt={a.produit.title} />
            <p>{a.produit.title}</p>
            <button
              aria-label="soustraire quantité"
              disabled={a.quantite === 1}
              onClick={() => modifierPanier(a.produit.id, -1)}
            >
              [-]
            </button>
            <p>{a.quantite}</p>
            <button aria-label="ajouter quantité" onClick={() => modifierPanier(a.produit.id, 1)}>
              [+]
            </button>
            <p>{formatEuro(a.produit.price * a.quantite)}</p>
            <button aria-label="supprimer du panier" onClick={() => supprimerPanier(a.produit.id)}>
              [X]
            </button>
          </li>
        ))}
      </ul>
      <p>Total : {formatEuro(panier.reduce((acc, a) => acc + a.quantite * a.produit.price, 0))}</p>
      <button onClick={() => setPaiement(true)}>Paiement</button>
    </div>
  );
}

export { PanierPage };
