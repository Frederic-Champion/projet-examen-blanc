import { Link, useNavigate, useOutletContext, useParams } from "react-router";
import type { FetchDataContext } from "./type";
import { useState } from "react";
import { Bouton } from "./Bouton";
import { formatEuro } from "../../utils/format";
import { Loader2, SearchX, WifiOff } from "lucide-react";
import { EtatMessage } from "./EtatMessage";

function FicheProduitPage() {
  const naviguer = useNavigate();
  const { id } = useParams();
  const { chargement, erreur, produits, ajouterPanier } = useOutletContext<FetchDataContext>();
  const [quantite, setQuantite] = useState(1);

  const produit = produits.find((p) => String(p.id) === id);
  if (chargement)
    return (
      <EtatMessage
        icone={<Loader2 className="size-10 animate-spin text-shop-primaire" />}
        titre="Chargement du produit…"
      />
    );

  if (erreur) {
    console.error(erreur);
    return (
      <EtatMessage
        icone={<WifiOff className="size-10 text-shop-texte-doux" />}
        titre="Impossible de charger le produit"
        texte="Vérifiez votre connexion ou réessayez dans quelques instants."
      >
        <Bouton onClick={() => window.location.reload()}>Réessayer</Bouton>
      </EtatMessage>
    );
  }

  if (!produit)
    return (
      <EtatMessage
        icone={<SearchX className="size-10 text-shop-texte-doux" />}
        titre="Produit introuvable"
        texte="Ce produit n'existe pas ou a été retiré du catalogue."
      >
        <Link to="/shopping-cart/boutique" className="font-semibold text-shop-primaire hover:underline">
          Retour à la boutique
        </Link>
      </EtatMessage>
    );
  return (
    <div className="grid grid-cols-2">
      <div>
        <button onClick={() => naviguer("/shopping-cart/boutiqueshopping-cart/boutique")} className="border">
          Retour
        </button>
        <img src={produit.image} alt={produit.title} />
      </div>
      <div>
        <h2>{produit.title}</h2>
        <p className="text-shop-prix">{formatEuro(produit.price)}</p>
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
        <Bouton onClick={() => ajouterPanier(produit, quantite)} desactive={quantite < 1}>
          Ajouter au panier
        </Bouton>
      </div>
    </div>
  );
}

export { FicheProduitPage };
