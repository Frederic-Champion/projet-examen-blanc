export function formaterMois(valeur: string) {
  if (!valeur) return "";
  const [annee, mois] = valeur.split("-");
  const date = new Date(Number(annee), Number(mois) - 1);
  return date.toLocaleDateString("fr-FR", { month: "numeric", year: "numeric" });
}

export function formatEuro(valeur: number) {
  return valeur.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}