import { Link, NavLink, Outlet } from "react-router";

function NavigationCalculatrice() {
  const lienStyle =
    "mt-2 cursor-pointer rounded-lg border bg-stone-50 px-4 py-1 font-semibold transition-colors hover:border-stone-400 hover:bg-stone-200 hover:shadow-md";
    const lienClasse = ({isActive}: {isActive: boolean}) => isActive ? `${lienStyle} text-blue-500` : lienStyle
    return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-stone-100 pt-16 text-center">
      <h2 className="text-4xl font-semibold">Exercice Calculatrice</h2>
      <div className="flex w-fit gap-2">
        <NavLink
          className={lienClasse}
          to={"/page-calculatrice"}
          end
        >
          Retour Accueil
        </NavLink>
        <NavLink className={lienClasse} to={"1"}>
          Calculatrice
        </NavLink>
        <NavLink className={lienClasse} to={"2"}>
          Calculatrice page Blanche
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

const CALCULATRICES = [
  {
    path: "1",
    titre: "Calculatrice",
    description: "Machine à états, cas limites, parsing d'entrée.",
  },
  {
    path: "2",
    titre: "Calculatrice Page Blanche",
    description: "Exercice calculatrice refait seul",
  },
];

function CalculatriceAccueil() {
  return (
    <ul className="flex flex-col gap-4">
      {CALCULATRICES.map(({ path, titre, description }) => (
        <li className="w-96" key={path}>
          <Link to={path} className="block rounded-lg bg-stone-300 p-3 shadow-lg hover:bg-stone-200">
            <h2 className="text-2xl font-semibold after:mx-auto after:block after:h-[px]">{titre}</h2>
            <p>{description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { NavigationCalculatrice, CalculatriceAccueil };
