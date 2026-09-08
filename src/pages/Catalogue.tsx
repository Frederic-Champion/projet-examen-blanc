import { Link, useParams, useNavigate } from "react-router";
import { useEffect } from "react";

interface Monture {
  id: string;
  nom: string;
  marque: string;
  prix: number;
}

const MONTURES: Monture[] = [
  { id: "1", nom: "Aviator", marque: "Ray-Ban", prix: 159 },
  { id: "2", nom: "Wayfarer", marque: "Ray-Ban", prix: 139 },
  { id: "3", nom: "Steve", marque: "Persol", prix: 289 },
  {id: "4",nom: "Clubmaster", marque: "Ray-Ban", prix: 185 }
];

function Catalogue() {
  return (
    <ul className="mt-16">
      {MONTURES.map((m) => (
        <li key={m.id}>
          <Link to={`/catalogue/${m.id}`}>{m.nom}</Link>
        </li>
      ))}
    </ul>
  );
}

function FicheMonture() {
  const { id } = useParams();
  const naviguer = useNavigate();

  const monture = MONTURES.find((m) => m.id === id);
  if (!monture) return <p className="mt-16">Monture introuvable</p>;

  useEffect(() => {
    const t = setTimeout(() => {
      naviguer("/catalogue", {replace: true})
    }, 2000);
    return () => clearTimeout(t)
  }, [])

  return (
    <article className="mt-16">
      <h2>{monture.nom}</h2>
      <p>{monture.marque}</p>
      <p>{monture.prix} €</p>
    </article>
  );
}

export default Catalogue;
export { FicheMonture };