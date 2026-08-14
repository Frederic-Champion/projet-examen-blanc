import { Link } from "react-router";
import { EXERCICES } from "../data/exercices";

function Accueil() {
  return (
    <nav className="flex flex-col gap-4">
      {EXERCICES.map(({ path, titre, description }) => (
        <Link key={path} to={path}>
          <h2>{titre}</h2>
          <p>{description}</p>
        </Link>
      ))}
    </nav>
  );
}

export default Accueil;
