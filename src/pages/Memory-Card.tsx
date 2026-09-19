import { useEffect, useRef, useState } from "react";

interface Montre {
  id: number;
  title: string;
  thumbnail: string;
}
interface Reponse {
  products: Montre[];
}

function melanger(tableau: Montre[]): Montre[] {
  const copie = [...tableau];
  for (let i = copie.length - 1; i > 0; i--) {
    const aleatoire = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[aleatoire]] = [copie[aleatoire], copie[i]];
  }
  return copie;
}

function MemoryCard() {
  const [dataMontre, setDataMontre] = useState<Montre[]>([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const ref = useRef<number[]>([]);

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
        setDataMontre(melanger([...dataH["products"], ...dataF["products"]]));
      } catch (e) {
        setErreur(e instanceof Error ? e.message : "erreur inconnue");
      } finally {
        setChargement(false);
      }
    }
    charger();
  }, []);

  function onAjouter(id: number) {
    setDataMontre((prev) => melanger(prev));
    const egal = ref.current.some((m) => m === id);
    if (egal) {
      setScore(0);
      ref.current = [];
    } else {
      const points = score + 1;
      setBest(Math.max(points, best));
      setScore(points);
      ref.current = [...ref.current, id];
    }
  }

  if (chargement) return <p>Chargement</p>;
  if (erreur) return <p>Il y a une erreur : {erreur}</p>;

  return (
    <div className="bg-linear-to-t to-blue-300 pt-16">
      <h1 className="text-center text-3xl font-bold">Memory Card</h1>
      <p className="font-semibold">Score total : {score}</p>
      <p className="font-semibold">Meilleur score : {best}</p>
      {score !== dataMontre.length ? (
        <div className="m-4 grid grid-cols-5 gap-2">
          {dataMontre.map((m) => (
            <button
              onClick={() => onAjouter(m.id)}
              className="cursor-pointer border shadow-xl hover:bg-pink-100"
              key={m.id}
            >
              <p className="font-semibold">{m.title}</p>
              <img src={m.thumbnail} alt={m.title} />
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-center font-bold">VICTOIRE</h2>
          <button
            onClick={() => {
              setScore(0);
              ref.current = [];
              setDataMontre((prev) => melanger(prev));
            }}
            className="cursor-pointer rounded-lg border p-2"
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
}

export { MemoryCard };
