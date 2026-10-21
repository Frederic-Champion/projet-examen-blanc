import { memo, useEffect, useMemo, useReducer } from "react";

interface ToucheProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Touche = memo(function Touche({ onClick, label, className = "" }: ToucheProps) {
  console.log("rendu", label);
  return (
    <button
      className={`rounded-md border p-1 hover:bg-blue-300 ${className}`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
})

function operation(a: number, b: number, op: string) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Erreur ça marche pas en divisant avec 0 !" : a / b;
    default:
      return 0;
  }
}

function formateResultat(resultat: number | string) {
  if (typeof resultat === "string") return resultat;
  return String(Number(resultat.toFixed(10)));
}

interface Etat {
  affichage: string;
  memoire: string;
  operateur: string;
  nouveauNombre: boolean;
  historique: string;
}

type Action =
  | { type: "chiffre"; chiffre: string }
  | { type: "decimal" }
  | { type: "operateur"; operateur: string }
  | { type: "calculer" }
  | { type: "effacer" }
  | { type: "supprimer" };

const ETAT_INITIAL: Etat = { affichage: "0", memoire: "", operateur: "", nouveauNombre: false, historique: "" };

function reducer(etat: Etat, action: Action): Etat {
  switch (action.type) {
    case "chiffre":
      if (!etat.nouveauNombre) {
        return { ...etat, affichage: etat.affichage === "0" ? action.chiffre : etat.affichage + action.chiffre };
      } else {
        return { ...etat, affichage: action.chiffre, nouveauNombre: false, historique: "" };
      }
    case "decimal":
      if (etat.affichage.includes(".")) return etat;
      if (etat.nouveauNombre) return { ...etat, affichage: "0" + ".", nouveauNombre: false };
      return { ...etat, affichage: etat.affichage + "." };

    case "operateur":
      if (etat.operateur !== "" && !etat.nouveauNombre) {
        const resultat = operation(Number(etat.memoire), Number(etat.affichage), etat.operateur);
        return {
          ...etat,
          affichage: formateResultat(resultat),
          memoire: formateResultat(resultat),
          operateur: action.operateur,
          nouveauNombre: true,
        };
      } else
        return { ...etat, memoire: etat.affichage, historique: "", operateur: action.operateur, nouveauNombre: true };

    case "calculer": {
      if (!etat.operateur) return etat;
      const a = Number(etat.memoire);
      const b = Number(etat.affichage);

      return {
        historique: `${etat.memoire} ${etat.operateur} ${etat.affichage}`,
        affichage: formateResultat(operation(a, b, etat.operateur)),
        memoire: "",
        operateur: "",
        nouveauNombre: true,
      };
    }
    case "effacer":
      return ETAT_INITIAL;
    case "supprimer":
      if (etat.memoire && etat.nouveauNombre) return etat;
      return { ...etat, affichage: etat.affichage.length === 1 ? "0" : etat.affichage.slice(0, -1) };
  }
}

function Calculatrice() {
  const [etat, dispatch] = useReducer(reducer, ETAT_INITIAL);
  const { affichage, memoire, operateur, nouveauNombre, historique } = etat;

  const saisie = `${memoire} ${operateur} ${nouveauNombre ? "" : affichage}`;

  const touches: ToucheProps[] =  useMemo(() => [
    { label: "C", onClick: () => dispatch({type: "effacer"}) },
    { label: "⌫", onClick: () => dispatch({type: "supprimer"}) },
    { label: "/", onClick: () => dispatch({type: "operateur", operateur: "/"}) },
    { label: "*", onClick: () => dispatch({type: "operateur", operateur: "*"}) },
    { label: "7", onClick: () => dispatch({type: "chiffre", chiffre : "7"})},
    { label: "8", onClick: () => dispatch({type: "chiffre", chiffre : "8"})},
    { label: "9", onClick: () => dispatch({type: "chiffre", chiffre : "9"})},
    { label: "-", onClick: () => dispatch({type: "operateur", operateur: "-"}) },
    { label: "4", onClick: () => dispatch({type: "chiffre", chiffre : "4"})},
    { label: "5", onClick: () => dispatch({type: "chiffre", chiffre : "5"})},
    { label: "6", onClick: () => dispatch({type: "chiffre", chiffre : "6"})},
    { label: "+", className: "row-span-2", onClick: () => dispatch({type: "operateur", operateur: "+"}) },
    { label: "1", onClick: () => dispatch({type: "chiffre", chiffre : "1"})},
    { label: "2", onClick: () => dispatch({type: "chiffre", chiffre : "2"})},
    { label: "3", onClick: () => dispatch({type: "chiffre", chiffre : "3"})},
    { label: "0", onClick: () => dispatch({type: "chiffre", chiffre : "0"})},
    { label: ".", onClick: () => dispatch({type: "decimal"}) },
    { label: "=", className: "col-span-2", onClick: () => dispatch({type: "calculer"}) },
  ], [dispatch]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const touche = touches.find((t) => t.label === e.key);
      if (touche) {
        touche.onClick();
      }
      if (e.key === ",") dispatch({type: "decimal"});
      if (e.key === "Backspace") dispatch({type: "supprimer"});
      if (e.key === "Enter") dispatch({type: "calculer"});
      if (e.key === "Escape" || e.key === "c") dispatch({type: "effacer"});
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [touches]);

  return (
    <div className="m-auto mt-16 w-72 border rounded-2xl ">
      <div>
        <h1 className="px-4 py-1 text-xl font-semibold">💻 Calculatrice en useReducer</h1>
        <div className="flex flex-col items-end p-4">
          <p className="text-gray-500 min-h-4">{historique || saisie}</p>
          <p className="text-xl font-semibold">{affichage}</p>
        </div>

        <div className="grid grid-cols-4 auto-rows-16 gap-2 p-4">
          {touches.map((t) => (
            <Touche key={t.label} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculatrice;
