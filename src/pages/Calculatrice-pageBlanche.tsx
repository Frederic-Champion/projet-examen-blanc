import { useEffect, useState } from "react";

interface ToucheProps {
  label: string;
  fonction: () => void;
  className?: string;
}

function Bouton({ label, fonction, className = "" }: ToucheProps) {
  return (
    <button className={`rounded-xl border ${className}`} onClick={fonction}>
      {label}
    </button>
  );
}

export default function CalculatricePageBlanche() {
  const [historique, setHistorique] = useState("");
  const [affichage, setAffichage] = useState("0");
  const [memoire, setMemoire] = useState("");
  const [operateur, setOperateur] = useState("");
  const [nouveau, setNouveau] = useState(false);

  const liste: ToucheProps[] = [
    { label: "C", fonction: efface },
    { label: "⌫", fonction: supprime },
    { label: "/", fonction: () => operation("/") },
    { label: "*", fonction: () => operation("*") },
    { label: "7", fonction: () => afficher("7") },
    { label: "8", fonction: () => afficher("8") },
    { label: "9", fonction: () => afficher("9") },
    { label: "-", fonction: () => operation("-") },
    { label: "4", fonction: () => afficher("4") },
    { label: "5", fonction: () => afficher("5") },
    { label: "6", fonction: () => afficher("6") },
    { label: "+", className: "row-span-2", fonction: () => operation("+") },
    { label: "3", fonction: () => afficher("3") },
    { label: "2", fonction: () => afficher("2") },
    { label: "1", fonction: () => afficher("1") },
    { label: "0", fonction: () => afficher("0") },
    { label: ",", fonction: () => decimal(".") },
    { label: "=", className: "col-span-2", fonction: egal },
  ];

  function afficher(chiffre: string) {
    if (nouveau) {
      setAffichage(chiffre);
      setNouveau(false);
    } else {
      if (affichage === "0") setAffichage(chiffre);
      else setAffichage(affichage + chiffre);
    }
  }

  function operation(ope: string) {
    if (!operateur) {
      setOperateur(ope);
      setMemoire(affichage);
      setNouveau(true);
      setHistorique(affichage + " " + ope);
    } else {
      const resultat = calcul(Number(memoire), Number(affichage), operateur);
      setOperateur(ope);
      setAffichage(String(arrondir(resultat)));
      setHistorique(String(arrondir(resultat)) + " " + ope);
      setMemoire(String(arrondir(resultat)));
      setNouveau(true);
    }
  }

  function calcul(a: number, b: number, ope: string) {
    switch (ope) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? "Erreur" : a / b;
      default:
        return 0;
    }
  }

  function arrondir(arrondi: number | string) {
    if (typeof arrondi === "string") return arrondi;
    return String(Number(arrondi.toFixed(10)));
  }

  function decimal(dot: string) {
    if (affichage.includes(".")) return;
    setAffichage(affichage + dot);
  }

  function egal() {
    const a = Number(memoire);
    const b = Number(affichage);

    const resultat = calcul(a, b, operateur);
    setAffichage(String(arrondir(resultat)));
    setMemoire(String(arrondir(resultat)));
    setOperateur("");
    setNouveau(true);
    setHistorique(historique + " " + String(b) + " " + "=");
  }

  function efface() {
    setAffichage("0");
    setOperateur("");
    setMemoire("");
    setNouveau(false);
    setHistorique("");
  }

  function supprime() {
    if (affichage.length === 1) {
      setAffichage("0");
      return;
    }
    if (memoire === affichage) return;
    setAffichage(affichage.slice(0, -1));
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const toucheTape = liste.find((t) => t.label === e.key);
      if (toucheTape) toucheTape.fonction();
      if (e.key === "Backspace") supprime();
      if (e.key === "Enter") egal();
      if (e.key === "c" || e.key === "C" || e.key === "Escape") efface();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [affichage, memoire, operateur, nouveau]);

  return (
    <div className="m-auto mt-16 w-72 border rounded-2xl ">
      <div className="flex flex-col items-end p-4">
        <div className="text-gray-500 min-h-4">{historique}</div>
        <div className="text-2xl font-semibold">{affichage}</div>
      </div>
      <div className="grid grid-cols-4 auto-rows-16 gap-2 p-4">
        {liste.map((l) => (
          <Bouton key={l.label} {...l} />
        ))}
      </div>
    </div>
  );
}
