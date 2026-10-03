import { Link, useOutletContext } from "react-router";
import type { FetchDataContext } from "./type";
import { formatEuro } from "../../utils/format";
import { Bouton } from "./Bouton";
import { Loader2, WifiOff } from "lucide-react";
import { EtatMessage } from "./EtatMessage";

function BoutiquePage() {
  const { chargement, erreur, produits, ajouterPanier } = useOutletContext<FetchDataContext>();

  if (chargement)
    return (
      <EtatMessage
        icone={<Loader2 className="size-10 animate-spin text-shop-primaire" />}
        titre="Chargement des produits…"
      />
    );

  if (erreur) {
    console.error(erreur);
    return (
      <EtatMessage
        icone={<WifiOff className="size-10 text-shop-texte-doux" />}
        titre="Impossible de charger les produits"
        texte="Vérifiez votre connexion ou réessayez dans quelques instants."
      >
        <Bouton onClick={() => window.location.reload()}>Réessayer</Bouton>
      </EtatMessage>
    );
  }
  return (
    <div className="mx-auto max-w-7xl p-4">
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
