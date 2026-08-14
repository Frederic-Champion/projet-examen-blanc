import { useState } from "react";

function Calculatrice() {
  const [affichage, setAffichage] = useState("0");
  const [memoire, setMemoire] = useState("");
  const [operateur, setOperateur] = useState("");

  function tapeChiffre(chiffre: string) {
    // ?
  }

  return (
    <div className="m-auto grid w-fit grid-cols-4 gap-2 rounded-lg border-2 p-4">
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        7
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        8
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        9
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        /
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        4
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        5
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        6
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        *
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        1
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        2
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        3
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        -
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        C
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        0
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        =
      </button>
      <button type="button" className="size-16 rounded-md border p-1 hover:bg-blue-400">
        +
      </button>
    </div>
  );
}

export default Calculatrice;
