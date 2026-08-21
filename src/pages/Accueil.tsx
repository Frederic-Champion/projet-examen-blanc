import { Link } from "react-router";
import { EXERCICES } from "../data/exercices";

function Accueil() {
  return (
    <ul className="flex min-h-screen flex-col items-center gap-4 bg-stone-100 pt-16 text-center">
      {EXERCICES.map(({ path, titre, description }) => (
        <li className="w-96" key={path}>
          <Link to={path} className="block rounded-lg bg-stone-300 p-3 shadow-lg hover:bg-stone-200">
            <h2 className="text-2xl font-semibold after:content-[''] after:mx-auto after:block after:h-[px] after:w-16 after:bg-black">
              {titre}
            </h2>
            <p>{description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Accueil;
