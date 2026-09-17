import { useEffect, useState } from "react";

interface Montre {
  id: number;
  title: string;
  thumbnail: string;
}
interface Reponse {
  products: Montre[];
}

function MemoryCard() {
  const [dataMontre, setDataMontre] = useState<Montre[]>([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  // API montres femmes : "https://dummyjson.com/products/category/womens-watches"
  // API montres hommes : "https://dummyjson.com/products/category/mens-watches"

  useEffect(() => {
    async function charger() {
      try {
        const requete = [
          fetch("https://dummyjson.com/products/category/mens-watches?limit=5"),
          fetch("https://dummyjson.com/products/category/womens-watches?limit=5"),
        ];
        const [resH, resF] = await Promise.all(requete);
        if (!resH.ok || !resF.ok) {
          throw new Error("impossible de charger le catalogue");
        }
        const [dataH, dataF]: Reponse[] = await Promise.all([resH.json(), resF.json()]);
        setDataMontre([...dataH["products"], ...dataF["products"]]);
      } catch (e) {
        setErreur(e instanceof Error ? e.message : "erreur inconnue");
      } finally {
        setChargement(false);
      }
    }
    charger();
  }, []);

  if (chargement) return <p>Chargement</p>;
  if (erreur) return <p>Il y a une erreur : {erreur}</p>;

  return (
    <div className="pt-16">
      <p>Score total :</p>
      <p>Meilleur score :</p>

      <div className="grid grid-cols-5">
        {dataMontre.map((m) => (
          <article key={m.id}>
            <p>{m.title}</p>
            <img src={m.thumbnail} alt={m.title} />
          </article>
        ))}
      </div>
    </div>
  );
}

export { MemoryCard };
