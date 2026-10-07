import { useRef, useState, useEffect } from "react";
import type { Produit } from "./type";
import { Link, useNavigate } from "react-router";
import { formatEuro } from "../../utils/format";
import { Search } from "lucide-react";
import { Bouton } from "./Bouton";

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
    <div className="hidden xl:block relative" ref={ref}>
      <form
        className="flex flex-1 min-w-0 overflow-hidden rounded-shop bg-shop-surface focus-within:ring-2 focus-within:ring-shop-primaire"
        onSubmit={onSearch}
      >
        <input
          className="flex-1 p-2 outline-none"
          onFocus={() => setOuvert(true)}
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder="Recherchez un article, un produit  ..."
        />
        <button className="p-2 hover:bg-shop-primaire-survol" aria-label="Rechercher">
          <Search />
        </button>
      </form>
      {equivalent.length > 0 && recherche.trim() !== "" && ouvert && (
        <ul className="absolute top-full left-0 z-10 mt-1 flex w-full flex-col rounded-shop bg-white shadow-shop-flottant">
          {visible.map((p) => (
            <li className="p-2" key={p.id}>
              <Link
                onClick={nettoyageRecherche}
                className="flex items-center gap-2"
                to={`/shopping-cart/boutique/${p.id}`}
              >
                <div className="flex h-11 w-11 shrink-0 rounded-shop bg-white p-1.25 shadow-shop-flottant">
                  <img className="max-h-8.5 w-full max-w-8.5 object-contain" src={p.image} alt={p.title} />
                </div>
                <div className="min-w-0 text-left">
                  <p title={p.title} className="truncate font-semibold">
                    {p.title}
                  </p>
                  <p className="font-semibold text-shop-prix">{formatEuro(p.price)}</p>
                </div>
              </Link>
            </li>
          ))}
          {equivalent.length > 5 && (
            <li>
              <Bouton onClick={() => setDeplier((prev) => !prev)} className="px-2 py-1 mb-1">
                {deplier ? "Afficher moins" : "Afficher plus"}
              </Bouton>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export { BarreRecherche };
