import { Link } from "react-router";
import { EXERCICES } from "../data/exercices";

function Accueil() {
  return (
    <ul className="flex flex-col gap-4">
      {EXERCICES.map(({ path, titre, description }) => (
        <li className="bg-blue-500" key={path}>
          <Link to={path}>
            <h2>{titre}</h2>
            <p>{description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Accueil;
