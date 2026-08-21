import { useState } from "react";

interface ToucheProps {
  label: string;
  fonction: () => void;
}

function Bouton({ label, fonction }: ToucheProps) {
  return (
    <button className="size-16 rounded-xl border" onClick={fonction}>
      {label}
    </button>
  );
}

export default function Brouillon() {
  const [historique, setHistorique] = useState("");
  const [affichage, setAffichage] = useState("0");
  const [memoire, setMemoire] = useState("");
  const [operateur, setOperateur] = useState("");
  const [nouveau, setNouveau] = useState("false");

  const liste: ToucheProps[] = [
    { label: "7", fonction: () => afficher("7") },
    { label: "8", fonction: () => afficher("8") },
    { label: "9", fonction: () => afficher("9") },
    { label: "/", fonction: () => operation("/") },
    { label: "4", fonction: () => afficher("4") },
    { label: "5", fonction: () => afficher("5") },
    { label: "6", fonction: () => afficher("6") },
    { label: "-", fonction: () => operation("-") },
    { label: "3", fonction: () => afficher("3") },
    { label: "2", fonction: () => afficher("2") },
    { label: "1", fonction: () => afficher("1") },
    { label: "+", fonction: () => operation("+") },
    { label: ",", fonction: () => operation(",") },
    { label: "0", fonction: () => afficher("0") },
    { label: "=", fonction: egal },
    { label: "*", fonction: () => operation("*") },
  ];

  function afficher(chiffre: string) {
    if (affichage === "0") setAffichage(chiffre);
    else setAffichage(affichage + chiffre);
  }

  function operation(ope: string) {
    setOperateur(ope);
    setMemoire(affichage);
    setNouveau(true);
    setHistorique(affichage);
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
        return a / b;
    }
  }

  function egal() {
    const a = Number(memoire);
    const b = Number(affichage);

    setAffichage(String(calcul(a, b, operateur)));
  }

  return (
    <div className="m-auto mt-16 w-96">
      <div className="flex flex-col items-end p-4">
        <div className="text-gray-500">{historique}</div>
        <div className="text-2xl font-semibold">{affichage}</div>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {liste.map((l) => (
          <Bouton label={l.label} fonction={l.fonction} />
        ))}
      </div>
    </div>
  );
}
