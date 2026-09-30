import { useRef, useState, useEffect } from "react";
import type { Produit } from "./type";
import { Link, useNavigate } from "react-router";
import { formatEuro } from "../../utils/format";
import { Search } from "lucide-react";

interface BarreRechercheProps {
  produits: Produit[];
}

function BarreRecherche({ produits }: BarreRechercheProps) {
  const [recherche, setRecherche] = useState("");
  const [deplier, setDeplier] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const naviguer = useNavigate();

  const equivalent = produits.filter((p) => p.title.toLowerCase().includes(recherche.trim().toLowerCase()));
  const visible = deplier ? equivalent.slice() : equivalent.slice(0, 5);

  function nettoyageRecherche() {
    setRecherche("");
    setDeplier(false);
  }

  function onSearch(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (recherche.trim() === "" || equivalent.length === 0) return;
    naviguer(`/shopping-cart/boutique/${equivalent[0].id}`);
    nettoyageRecherche();
  }

  useEffect(() => {
    function gererClick(e: PointerEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOuvert(false);
      }
    }
    document.addEventListener("click", gererClick);
    return () => document.removeEventListener("click", gererClick);
  }, []);

  return (
    <div ref={ref}>
      <form
        className="flex min-w-96 overflow-hidden rounded-lg bg-stone-200 focus-within:ring-2 focus-within:ring-blue-600"
        onSubmit={onSearch}
      >
        <input
          className="flex-1 p-2 outline-none"
          onFocus={() => setOuvert(true)}
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder="Recherchez un article, un produit ..."
        />
        <button className="p-2 hover:bg-blue-400" aria-label="Recherche">
          <Search />
        </button>
      </form>
      {equivalent.length > 0 && recherche.trim() !== "" && ouvert && (
        <ul>
          {visible.map((p) => (
            <li key={p.id}>
              <Link onClick={nettoyageRecherche} className="flex" to={`/shopping-cart/boutique/${p.id}`}>
                <img className="h-12 w-full object-contain" src={p.image} alt={p.title} />
                <p>{p.title}</p>
                <p>{formatEuro(p.price)}</p>
              </Link>
            </li>
          ))}
          {equivalent.length > 5 && (
            <li>
              <button onClick={() => setDeplier((prev) => !prev)} className="border">
                {deplier ? "Afficher moins" : "Afficher plus"}
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export { BarreRecherche };
