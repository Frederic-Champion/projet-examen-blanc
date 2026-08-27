import { useState } from "react";

interface Infos {
  nom: string;
  email: string;
  tel: string;
  ville: string;
}
interface InfosGeneralesProps {
  onEnvoyerInfos: (infos: Infos) => void;
}
interface Formation {
  diplome: string;
  ecole: string;
  ville: string;
  debut: string;
  fin: string;
  id: string;
}

interface FormationsProps {
  onEnvoyerFormation: (formation: Formation) => void;
  onSupprimerDiplome: (id: string) => void;
  formations: Formation[];
}

interface PagePresentationProps {
  infos: Infos | null;
  formations: Formation[];
}

function InfosGenerales({ onEnvoyerInfos }: InfosGeneralesProps) {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [ville, setVille] = useState("");

  function handleEnvoyerInfos() {
    const infos: Infos = { nom, email, tel, ville };
    onEnvoyerInfos(infos);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEnvoyerInfos();
      }}
    >
      <div>
        <label htmlFor="nom">Nom complet</label>
        <input
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          id="nom"
          type="text"
          placeholder="Taper votre nom complet"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Adresse Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label htmlFor="tel">Numéro de téléphone</label>
        <input
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          id="tel"
          type="tel"
          placeholder="Téléphone"
          required
        />
      </div>
      <div>
        <label htmlFor="ville">Votre Code postal et Ville</label>
        <input
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          id="ville"
          type="text"
          placeholder="Code postal, Ville"
          required
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

function AfficherFormations({
  onEnvoyerFormation,
  onSupprimerDiplome: onSupprimerFormation,
  formations,
}: FormationsProps) {
  const [diplome, setDiplome] = useState("");
  const [ecole, setEcole] = useState("");
  const [ville, setVille] = useState("");
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");

  function ajouterDiplome(e: React.SubmitEvent) {
    e.preventDefault();
    const formation = { diplome, ecole, ville, debut, fin, id: crypto.randomUUID() };
    onEnvoyerFormation(formation);
    setDiplome("");
    setEcole("");
    setVille("");
    setDebut("");
    setFin("");
  }

  return (
    <div>
      <form onSubmit={ajouterDiplome}>
        <div>
          <label htmlFor="diplome">Quels sont tes diplomes ?</label>
          <input
            required
            value={diplome}
            onChange={(e) => setDiplome(e.target.value)}
            type="text"
            id="diplome"
            placeholder="Diplome"
          />
        </div>
        <div>
          <label htmlFor="ecole">Dans quel établissement ?</label>
          <input
            required
            value={ecole}
            onChange={(e) => setEcole(e.target.value)}
            type="text"
            id="ecole"
            placeholder="École"
          />
        </div>
        <div>
          <label htmlFor="ville">Dans quelle ville ?</label>
          <input
            required
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            type="text"
            id="ville"
            placeholder="Ville"
          />
        </div>
        <div>
          <label htmlFor="debut">Date de début</label>
          <input required value={debut} onChange={(e) => setDebut(e.target.value)} type="month" id="debut" />
        </div>
        <div>
          <label htmlFor="fin">Date de Fin</label>
          <input required value={fin} onChange={(e) => setFin(e.target.value)} type="month" id="fin" />
        </div>
        <button type="submit">Ajouter</button>
      </form>
      <div>
        {formations.map(({ diplome, ecole, ville, debut, fin, id }) => (
          <div key={id}>
            <p>
              {diplome}: {ecole}-{ville}//{debut}-{fin}
            </p>
            <button type="button" onClick={() => onSupprimerFormation(id)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Experiences() {
  return <form></form>;
}

function PagePresentation({ infos, formations }: PagePresentationProps) {
  return (
    <>
      <p>page blanche de test</p>
      <div>
        {infos !== null && (
          <div>
            {infos.nom}-{infos.email}-{infos.tel}-{infos.ville}
          </div>
        )}
      </div>
      {formations.map(({ diplome, ecole, ville, debut, fin, id }) => (
        <div key={id}>
          {diplome} :{ecole}-{ville}
          {debut}/{fin}
        </div>
      ))}
    </>
  );
}

function CvApplication() {
  const [infos, setInfos] = useState<Infos | null>(null);
  const [formations, setFormations] = useState<Formation[]>([]);

  function handleRecupInfos(infos: Infos) {
    setInfos(infos);
  }
  function handleRecupFormations(formation: Formation) {
    setFormations((prev) => [...prev, formation]);
  }
  function handleSupprimerFormation(id: string) {
    setFormations(formations.filter((f) => f.id !== id));
  }

  return (
    <main className="mt-16 grid grid-cols-2">
      <div>
        <InfosGenerales onEnvoyerInfos={handleRecupInfos} />
        <AfficherFormations
          formations={formations}
          onEnvoyerFormation={handleRecupFormations}
          onSupprimerDiplome={handleSupprimerFormation}
        />
        <Experiences />
      </div>
      <div>
        <PagePresentation infos={infos} formations={formations} />
      </div>
    </main>
  );
}

export default CvApplication;
