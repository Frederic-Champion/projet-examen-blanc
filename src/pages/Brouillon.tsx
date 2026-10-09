export default function Brouillon() {
  return <div>brouillon</div>;
}
function BadgeRemise({ taux }: { taux: number }) {
  const [valeur, setValeur] = useState(taux);
  return <p>Remise mutuelle : {valeur} %</p>;
}

// Dans le parent :

// <BadgeRemise taux={tauxMutuelle} />


// tauxMutuelle vaut 10 au montage,
// puis l'utilisateur change de mutuelle → setTauxMutuelle(25)