import { useEffect, useState } from "react";

interface ToucheProps {
  label: string;
  onClick: () => void;
  className?: string;
}

function Touche({ onClick, label, className }: ToucheProps) {
  return (
    <button
      className={`rounded-md border p-1 hover:bg-blue-300 ${className} text-white`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

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

function Calculatrice() {
  const [affichage, setAffichage] = useState("0");
  const [memoire, setMemoire] = useState("");
  const [operateur, setOperateur] = useState("");
  const [nouveauNombre, setNouveauNombre] = useState(false);
  const [historique, setHistorique] = useState("");

  function tapeChiffre(chiffre: string) {
    if (!nouveauNombre) {
      setAffichage(affichage === "0" ? chiffre : affichage + chiffre);
    } else {
      setAffichage(chiffre);
      setNouveauNombre(false);
      setHistorique("");
    }
  }

  function tapeDecimal(dot: string) {
    if (affichage.includes(".")) return;
    if (nouveauNombre) {
      setAffichage("0" + dot);
      setNouveauNombre(false);
      return;
    }
    setAffichage(affichage + dot);
  }

  function tapeOperateur(op: string) {
    if (operateur !== "") {
      const resultat = operation(Number(memoire), Number(affichage), operateur);
      setAffichage(formateResultat(resultat));
      setMemoire(formateResultat(resultat));
    } else {
      setMemoire(affichage);
      setHistorique("");
    }
    setOperateur(op);
    setNouveauNombre(true);
  }

  function calcul() {
    if (!operateur) return;
    const a = Number(memoire);
    const b = Number(affichage);

    setHistorique(`${memoire} ${operateur} ${affichage}`);
    setAffichage(formateResultat(operation(a, b, operateur)));
    setMemoire("");
    setOperateur("");
    setNouveauNombre(true);
  }

  function efface() {
    setAffichage("0");
    setMemoire("");
    setOperateur("");
    setNouveauNombre(false);
    setHistorique("");
  }

  const saisie = `${memoire} ${operateur} ${nouveauNombre ? "" : affichage}`;

  const touches: ToucheProps[] = [
    { label: "C", className: "col-span-2", onClick: efface },
    { label: "/", onClick: () => tapeOperateur("/") },
    { label: "*", onClick: () => tapeOperateur("*") },
    { label: "7", onClick: () => tapeChiffre("7") },
    { label: "8", onClick: () => tapeChiffre("8") },
    { label: "9", onClick: () => tapeChiffre("9") },
    { label: "-", onClick: () => tapeOperateur("-") },
    { label: "4", onClick: () => tapeChiffre("4") },
    { label: "5", onClick: () => tapeChiffre("5") },
    { label: "6", onClick: () => tapeChiffre("6") },
    { label: "+", className: "row-span-2", onClick: () => tapeOperateur("+") },
    { label: "1", onClick: () => tapeChiffre("1") },
    { label: "2", onClick: () => tapeChiffre("2") },
    { label: "3", onClick: () => tapeChiffre("3") },
    { label: "0", onClick: () => tapeChiffre("0") },
    { label: ".", onClick: () => tapeDecimal(".") },
    { label: "=", className: "col-span-2", onClick: calcul },
  ];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const touche = touches.find((t) => t.label === e.key);
      if (touche) {
        touche.onClick();
      }
      if (e.key === ",") tapeDecimal(".");
      if (e.key === "Enter") calcul();
      if (e.key === "Escape" || e.key === "c") efface();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [affichage, memoire, operateur, nouveauNombre]);

  // useCallback et useMemo pas encore étudié à ce moment précis donc normal.

  return (
    <div className="m-auto w-72 rounded-lg border-2">
      <h1 className="px-4 py-1 text-xl font-semibold">💻 Calculatrice</h1>
      <div className="bg-gray-300 px-4 py-1 text-end">
        <p className="text-gray-600">{historique || saisie}</p>
        <p className="text-4xl font-semibold">{affichage}</p>
      </div>

      <div className="grid auto-rows-16 grid-cols-4 gap-2 bg-gray-500 p-4">
        {touches.map((t) => (
          <Touche key={t.label} {...t} />
        ))}
      </div>
    </div>
  );
}

export default Calculatrice;
