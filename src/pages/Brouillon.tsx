export function Brouillon() {
  interface Vente {
    vendeur: string;
    monture: string;
  }

  const ventes: Vente[] = [
    { vendeur: "Alice", monture: "Ray-Ban" },
    { vendeur: "Bruno", monture: "Oakley" },
    { vendeur: "Alice", monture: "Persol" },
  ];

  const liste = ventes.reduce((acc, v) => {
    acc[v.vendeur] = (acc[v.monture] ?? []), v.monture
    return acc;
  }, {});

  console.log(liste);

  return <div>Brouillon</div>;
}
