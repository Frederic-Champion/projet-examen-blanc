import { useState } from "react";

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

  return (
    <div className="m-auto w-fit rounded-lg border-2">
      <div>
        <p className="text-gray-500">{historique || `${saisie}`}</p>
        <p className="font-semibold">{affichage}</p>
      </div>

      <div className="grid grid-cols-4 gap-2 p-4">
        <button
          onClick={() => tapeChiffre("7")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          7
        </button>
        <button
          onClick={() => tapeChiffre("8")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          8
        </button>
        <button
          onClick={() => tapeChiffre("9")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          9
        </button>
        <button
          onClick={() => tapeOperateur("/")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          /
        </button>

        <button
          onClick={() => tapeChiffre("4")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          4
        </button>
        <button
          onClick={() => tapeChiffre("5")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          5
        </button>
        <button
          onClick={() => tapeChiffre("6")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          6
        </button>
        <button
          onClick={() => tapeOperateur("*")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          *
        </button>

        <button
          onClick={() => tapeChiffre("1")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          1
        </button>
        <button
          onClick={() => tapeChiffre("2")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          2
        </button>
        <button
          onClick={() => tapeChiffre("3")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          3
        </button>
        <button
          onClick={() => tapeOperateur("-")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          -
        </button>

        <button onClick={efface} type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
          C
        </button>
        <button
          onClick={() => tapeChiffre("0")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          0
        </button>
        <button onClick={calcul} type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
          =
        </button>
        <button
          onClick={() => tapeOperateur("+")}
          type="button"
          className="size-16 rounded-md border p-1 hover:bg-blue-400"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Calculatrice;
