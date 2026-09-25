import { useNavigate, useOutletContext, useParams, Link } from "react-router";
import type { FetchDataContext } from "./type";
import { useState } from "react";

function FicheProduitPage() {
  const naviguer = useNavigate();
  const { id } = useParams();
  const { chargement, erreur, produits, ajouterPanier } = useOutletContext<FetchDataContext>();
  const [quantite, setQuantite] = useState(1);

  const produit = produits.find((p) => String(p.id) === id);
  if (chargement) return <p>Chargement à habiller proprement</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;
  if (!produit)
    return (
      <div>
        <p>Monture absente à définir proprement</p>
        <Link to="/shopping-cart/boutique">Retour à la boutique</Link>
      </div>
    );
  return (
    <div className="grid grid-cols-2">
      <div>
        <button onClick={() => naviguer(-1)} className="border">
          Retour
        </button>
        <img src={produit.image} alt={produit.title} />
      </div>
      <div>
        <h2>{produit.title}</h2>
        <p>{produit.price}</p>
        <p>{produit.category}</p>
        <p>{produit.description}</p>
        <label htmlFor="quantite">Quantité</label>
        <input
          min={1}
          value={quantite}
          onChange={(e) => setQuantite(Number(e.target.value))}
          id="quantite"
          type="number"
          className="border"
        />
        <button onClick={() => ajouterPanier(produit, quantite)} disabled={quantite < 1} className="border disabled:opacity-50">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export { FicheProduitPage };
