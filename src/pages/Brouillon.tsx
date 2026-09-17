export default function Brouillon() {
  return <div>Brouillon</div>;
}

/* Exercice 2 : écris l'interface Verre et la signature de decrireVerre (le corps est fourni).
traitement est facultatif et ne peut valoir que "antireflet", "lumiere-bleue" ou "photochromique",
avec "antireflet" par défaut. */

interface Verre {
  indice: number;
  traitement?: "antireflet" | "lumière-bleue" | "photochromique";
}

  function decrireVerre({indice, traitement = "antireflet"}: Verre) {
return `Indice ${indice}, traitement ${traitement}`;
}

decrireVerre({ indice: 1.6, traitement: "photochromique" });
decrireVerre({ indice: 1.5 });
