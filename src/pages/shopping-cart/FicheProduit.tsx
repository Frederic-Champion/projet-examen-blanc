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
  const { chargement, erreur, produits, ajouterPanier} = useOutletContext<FetchDataContext>();
  const produit = produits.find((p) => String(p.id) === id);
  const [quantite, setQuantite] = useState(1);

  function quantiteArticle() {
    if (!produit) return;
    ajouterPanier(produit, quantite);
  }

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
    <div className="mx-auto w-full max-w-6xl p-4">
      <Link
        to="/shopping-cart/boutique"
        className="rounded-lg border bg-white px-4 py-2 text-center text-shop-texte-doux hover:bg-black hover:text-white"
      >
        Retour
      </Link>
      <div className="mt-8 md:mt-16 flex flex-col md:grid md:grid-cols-2 gap-12">
        <div className="flex h-64 md:h-96 items-center justify-center rounded-lg bg-white p-6 shadow">
          <img className="h-full w-full object-contain" src={produit.image} alt={produit.title} />
        </div>
        <div>
          <h2 className="font-shop-titre text-3xl">{produit.title}</h2>
          <p className="text-2xl font-bold text-shop-prix">{formatEuro(produit.price)}</p>
          <p className="text-lg">{produit.category}</p>
          <p className="my-8 rounded-lg bg-shop-surface p-3">{produit.description}</p>
          <div className="flex gap-3">
            <SelecteurQuantite
              className="gap-4 p-2"
              quantite={quantite}
              onChangerQuantite={(nouvelle) => {
                if (nouvelle < 1) return;
                setQuantite(nouvelle);
              }}
            />
            <Bouton className="flex-1 md:flex-none" onClick={quantiteArticle} desactive={quantite < 1}>
              Ajouter au panier
            </Bouton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FicheProduitPage };
