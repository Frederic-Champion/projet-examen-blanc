import { Link, useParams, useNavigate, Navigate, useLocation } from "react-router";
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
  { id: "4", nom: "Clubmaster", marque: "Ray-Ban", prix: 185 },
];

function Catalogue() {
  const location = useLocation();

  return (
    <div>
      <ul className="mt-16">
        {MONTURES.map((m) => (
          <li key={m.id}>
            <Link to={`/catalogue/${m.id}`}>{m.nom}</Link>
          </li>
        ))}
      </ul>
      {location.state?.message && <p className="font-semibold rounded bg-green-100 p-2">{`"Vous venez de consulter : ${location.state.message}"`}</p>}
    </div>
  );
}

function FicheMonture() {
  const { id } = useParams();
  const naviguer = useNavigate();

  const monture = MONTURES.find((m) => m.id === id);

  useEffect(() => {
    if (monture) return;

    const timer = setTimeout(() => {
      naviguer("/catalogue", { replace: true });
    }, 2000);
    return () => clearTimeout(timer);
  }, [monture, naviguer]);

  // if (!monture) return <Navigate to={"/catalogue"} replace />
  //Quand la redirection doit être précédée d'un message, useNavigate + effet reste nécessaire.

  if (!monture) {
    return <p className="mt-16">Monture introuvable</p>;
  }
  return (
    <article className="mt-16">
      <h2>{monture.nom}</h2>
      <p>{monture.marque}</p>
      <p>{monture.prix} €</p>
      <button
        onClick={() => naviguer("/catalogue", { state: { message: monture.nom } })}
        type="button"
        className="cursor-pointer rounded-lg border p-1"
      >
        Retour
      </button>
    </article>
  );
}

export default Catalogue;
export { FicheMonture };
