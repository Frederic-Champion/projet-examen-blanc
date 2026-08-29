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
interface AfficherFormationsProps {
  onEnvoyerFormation: (formation: Formation) => void;
  onSupprimerFormation: (id: string) => void;
  formations: Formation[];
}
interface Experience {
  job: string;
  entreprise: string;
  debut: string;
  fin: string;
  description: string;
  id: string;
}
interface AfficherExperiencesProps {
  onEnvoyerExperience: (experience: Experience) => void;
  experiences: Experience[];
  onSupprimerExperience: (id: string) => void;
}
interface PagePresentationProps {
  infos: Infos | null;
  formations: Formation[];
  experiences: Experience[];
}

interface ChampProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  type?: string;
  id: string;
  description: string;
}

function Champ({ onChange, value, placeholder, id, type = "text", description }: ChampProps) {
  return (
    <div className="flex flex-col py-2">
      <label className="font-semibold" htmlFor={id}>
        {description}
      </label>
      <input
        className="bg-stone-300"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
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
      className="rounded-md bg-stone-200 p-4 shadow my-8"
      onSubmit={(e) => {
        e.preventDefault();
        handleEnvoyerInfos();
      }}
    >
      <Champ
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        id="nom"
        placeholder="Taper Votre nom Complet"
        description="Nom Complet"
      />

      <Champ
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
        placeholder="Email"
        description="Adresse Mail"
      />

      <Champ
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        id="tel"
        type="tel"
        placeholder="Téléphone"
        description="Numéro de téléphone"
      />

      <Champ
        value={ville}
        onChange={(e) => setVille(e.target.value)}
        id="ville"
        placeholder="Code postal, Ville"
        description="Votre Code postal et Ville"
      />

      <button className="rounded-2xl border bg-white px-4 py-1 font-semibold" type="submit">
        Ajouter
      </button>
    </form>
  );
}

function AfficherFormations({ onEnvoyerFormation, onSupprimerFormation, formations }: AfficherFormationsProps) {
  const [diplome, setDiplome] = useState("");
  const [ecole, setEcole] = useState("");
  const [ville, setVille] = useState("");
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [idEnEdition, setIdEnEdition] = useState<string | null>(null);

  function enregistrerFormation(e: React.SubmitEvent) {
    e.preventDefault();
    const formation = { diplome, ecole, ville, debut, fin, id: idEnEdition ?? crypto.randomUUID() };
    onEnvoyerFormation(formation);
    setDiplome("");
    setEcole("");
    setVille("");
    setDebut("");
    setFin("");
    setIdEnEdition(null);
  }

  function modifierFormation(modification: Formation) {
    const { diplome, ecole, ville, debut, fin, id } = modification;
    setDiplome(diplome);
    setEcole(ecole);
    setVille(ville);
    setDebut(debut);
    setFin(fin);
    setIdEnEdition(id);
  }

  return (
    <>
      <form onSubmit={enregistrerFormation} className="rounded-md bg-stone-200 p-4 shadow my-8">
        <Champ
          value={diplome}
          onChange={(e) => setDiplome(e.target.value)}
          id="diplome"
          placeholder="Diplome"
          description="Quel Diplome ?"
        />

        <Champ
          value={ecole}
          onChange={(e) => setEcole(e.target.value)}
          id="ecole"
          placeholder="École"
          description="Dans quelle Etablissement ?"
        />

        <Champ
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          id="ville"
          placeholder="Ville"
          description="Dans quelle ville ?"
        />

        <Champ
          value={debut}
          onChange={(e) => setDebut(e.target.value)}
          id="debut"
          type="month"
          description="Date de début"
        />

        <Champ value={fin} onChange={(e) => setFin(e.target.value)} id="fin" type="month" description="Date de fin" />
        <button type="submit">{idEnEdition ? "Modifier" : "Ajouter"}</button>
      </form>
      <div>
        {formations.map((f) => (
          <div key={f.id}>
            <p>
              {f.diplome}: {f.ecole}-{f.ville}//{f.debut}-{f.fin}
            </p>
            <button type="button" onClick={() => modifierFormation(f)}>
              Modifier
            </button>
            <button type="button" onClick={() => onSupprimerFormation(f.id)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function AfficherExperiences({ onEnvoyerExperience, experiences, onSupprimerExperience }: AfficherExperiencesProps) {
  const [job, setJob] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");
  const [description, setDescription] = useState("");

  function ajouterExperience(e: React.SubmitEvent) {
    e.preventDefault();
    const experience = {
      job,
      entreprise,
      debut,
      fin,
      description,
      id: crypto.randomUUID(),
    };
    onEnvoyerExperience(experience);
    setJob("");
    setEntreprise("");
    setDebut("");
    setFin("");
    setDescription("");
  }

  return (
    <>
      <form onSubmit={ajouterExperience} className="rounded-md bg-stone-200 p-4 shadow my-8">
        <Champ
          description="Nom du travail"
          id="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="Travail"
        />
        <Champ
          description="Dans quelle entreprise"
          id="entreprise"
          value={entreprise}
          onChange={(e) => setEntreprise(e.target.value)}
          placeholder="Entreprise"
        />
        <Champ
          description="Date de début"
          id="debut"
          value={debut}
          onChange={(e) => setDebut(e.target.value)}
          type="month"
        />
        <Champ description="Date de fin" id="fin" value={fin} onChange={(e) => setFin(e.target.value)} type="month" />
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={3}
            placeholder="Décrivez ce que vous avez fait."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
      {experiences.map(({ job, entreprise, debut, fin, description, id }) => (
        <div key={id}>
          <p>
            {job}-{entreprise}-{debut}/{fin}-{description}
          </p>
          <button type="button" onClick={() => onSupprimerExperience(id)}>
            Supprimer
          </button>
        </div>
      ))}
    </>
  );
}

function PagePresentation({ infos, formations, experiences }: PagePresentationProps) {
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
      <div>
        {experiences.map(({ job, entreprise, debut, fin, description, id }) => (
          <div key={id}>
            {job} : {entreprise} - {debut}/{fin}
            {description}{" "}
          </div>
        ))}
      </div>
    </>
  );
}

function CvApplication() {
  const [infos, setInfos] = useState<Infos | null>(null);
  const [formations, setFormations] = useState<Formation[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  function handleRecupInfos(infos: Infos) {
    setInfos(infos);
  }
  function handleEnregistrerFormation(formation: Formation) {
    setFormations((prev) => {
      const formationExiste = prev.some((f) => f.id === formation.id);
      return formationExiste ? prev.map((f) => (f.id === formation.id ? formation : f)) : [...prev, formation];
    });
  }
  function handleSupprimerFormation(id: string) {
    setFormations((prev) => prev.filter((f) => f.id !== id));
  }
  function handleEnregistrerExperience(experience: Experience) {
    setExperiences((prev) => [...prev, experience]);
  }
  function handleSupprimerExperience(id: string) {
    setExperiences((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <main className="mt-16 grid grid-cols-2 gap-4 bg-stone-50">
      <div className="mx-auto min-w-2/3 gap-4">
        <InfosGenerales onEnvoyerInfos={handleRecupInfos} />
        <AfficherFormations
          formations={formations}
          onEnvoyerFormation={handleEnregistrerFormation}
          onSupprimerFormation={handleSupprimerFormation}
        />
        <AfficherExperiences
          experiences={experiences}
          onEnvoyerExperience={handleEnregistrerExperience}
          onSupprimerExperience={handleSupprimerExperience}
        />
      </div>
      <div>
        <PagePresentation infos={infos} formations={formations} experiences={experiences} />
      </div>
    </main>
  );
}

export default CvApplication;
