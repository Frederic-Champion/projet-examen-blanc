import { useEffect, useState } from "react";

interface ToucheProps {
  label: string;
  onClick: () => void;
}

function Touche({ onClick, label }: ToucheProps) {
  return (
    <button className="size-16 rounded-md border p-1 hover:bg-blue-400" type="button" onClick={onClick}>
      {label}
    </button>
  );
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

  function tapeOperateur(op: string) {
    setOperateur(op);
    setMemoire(affichage);
    setNouveauNombre(true);
  }

  function calcul() {
    const a = Number(memoire);
    const b = Number(affichage);

    setHistorique(`${memoire} ${operateur} ${affichage}`);

    switch (operateur) {
      case "+":
        setAffichage(String(a + b));
        break;
      case "-":
        setAffichage(String(a - b));
        break;
      case "*":
        setAffichage(String(a * b));
        break;
      case "/":
        setAffichage(String(a / b));
        break;
    }

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
    { label: "7", onClick: () => tapeChiffre("7") },
    { label: "8", onClick: () => tapeChiffre("8") },
    { label: "9", onClick: () => tapeChiffre("9") },
    { label: "/", onClick: () => tapeOperateur("/") },
    { label: "4", onClick: () => tapeChiffre("4") },
    { label: "5", onClick: () => tapeChiffre("5") },
    { label: "6", onClick: () => tapeChiffre("6") },
    { label: "*", onClick: () => tapeOperateur("*") },
    { label: "1", onClick: () => tapeChiffre("1") },
    { label: "2", onClick: () => tapeChiffre("2") },
    { label: "3", onClick: () => tapeChiffre("3") },
    { label: "-", onClick: () => tapeOperateur("-") },
    { label: "C", onClick: efface },
    { label: "0", onClick: () => tapeChiffre("0") },
    { label: "=", onClick: calcul },
    { label: "+", onClick: () => tapeOperateur("+") },
  ];

  useEffect(() => {
    const chiffres = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operateurs = ["-", "+", "*", "/"];
    const onKeyDown = (e: KeyboardEvent) => {
      if (chiffres.includes(e.key)) {
        tapeChiffre(e.key);
      }
      if (operateurs.includes(e.key)) {
        tapeOperateur(e.key);
      }
      if (e.key === "Enter" || e.key === "=") calcul();
      if (e.key === "Escape" || e.key === "c") efface();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [affichage, memoire, operateur, nouveauNombre]);

  return (
    <div className="m-auto w-fit rounded-lg border-2">
      <div>
        <p className="text-gray-500">{historique || saisie}</p>
        <p className="font-semibold">{affichage}</p>
      </div>

      <div className="grid grid-cols-4 gap-2 p-4">
        {touches.map((t) => (
          <Touche key={t.label} {...t} />
        ))}
      </div>
    </div>
  );
}

export default Calculatrice;
