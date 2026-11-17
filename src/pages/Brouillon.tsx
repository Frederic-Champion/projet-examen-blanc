const clients = [
  { nom: "Martin", mutuelle: "MGEN" },
  { nom: "Durand", mutuelle: "Harmonie" },
  { nom: "Petit", mutuelle: "MGEN" },
];

const parMutuelle = clients.reduce((acc, c) => {
  acc[c.mutuelle] = [...(acc[c.mutuelle]|| []), c.nom]
  return acc;
}, {});

console.log(parMutuelle);
// attendu : { MGEN: ["Martin", "Petit"], Harmonie: ["Durand"] }

export function Brouillon() {
  return <div>Brouillon</div>;
}
