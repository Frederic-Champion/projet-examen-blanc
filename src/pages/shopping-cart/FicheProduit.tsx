import { Link, useOutletContext, useParams } from "react-router";
import type { FetchDataContext } from "./type";
import { useState } from "react";
import { Bouton } from "./Bouton";
import { formatEuro } from "../../utils/format";
import { Loader2, SearchX, WifiOff } from "lucide-react";
import { EtatMessage } from "./EtatMessage";
import { SelecteurQuantite } from "./SelecteurQuantite";

function FicheProduitPage() {
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
        <Link to="/shopping-cart/boutique" className="border">
          Retour
        </Link>
        <img src={produit.image} alt={produit.title} />
      </div>
      <div>
        <h2>{produit.title}</h2>
        <p className="text-shop-prix">{formatEuro(produit.price)}</p>
        <p>{produit.category}</p>
        <p>{produit.description}</p>
        <SelecteurQuantite
          className="gap-4 p-2"
          quantite={quantite}
          onChangerQuantite={(nouvelle) => {
            if (nouvelle < 1) return;
            setQuantite(nouvelle);
          }}
        />
        <Bouton onClick={() => ajouterPanier(produit, quantite)} desactive={quantite < 1}>
          Ajouter au panier
        </Bouton>
      </div>
    </div>
  );
}

export { FicheProduitPage };
