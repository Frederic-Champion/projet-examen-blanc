import { useOutletContext } from "react-router";
import type { FetchDataContext } from "./type";

function PanierPage() {
  const { panier } = useOutletContext<FetchDataContext>();

  return (
    <div>
      <h2>Un panier a habiller</h2>
      <ul>
        {panier.map((a) => (
          <li key={a.produit.id} className="inline-flex">
            <img className="h-48 w-full object-contain" src={a.produit.image} alt={a.produit.title} />
            <p>{a.produit.title}</p>
            <button>[-]</button>
            <p>{a.quantite}</p>
            <button>[+]</button>
            <p>{a.produit.price}</p>
            <button>[X]</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { PanierPage };
