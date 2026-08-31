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
  name?: string;
}

function Champ({ onChange, value, placeholder, id, type = "text", description, name }: ChampProps) {
  return (
    <div className="flex flex-col py-2">
      <label className="font-semibold" htmlFor={id}>
        {description}
      </label>
      <input
        name={name}
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

const INFOS_VIDES: Infos = { nom: "", email: "", tel: "", ville: "" };
type SaisieFormation = Omit<Formation, "id">;
const FORMATION_VIDE: SaisieFormation = { diplome: "", ecole: "", ville: "", debut: "", fin: ""};

function InfosGenerales({ onEnvoyerInfos }: InfosGeneralesProps) {
  const [saisie, setSaisie] = useState(INFOS_VIDES);

  function handleEnvoyerInfos() {
    onEnvoyerInfos(saisie);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSaisie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <form
      className="my-8 rounded-md bg-stone-200 p-4 shadow-md"
      onSubmit={(e) => {
        e.preventDefault();
        handleEnvoyerInfos();
      }}
    >
      <h2 className="pb-2 text-xl font-bold">Information Générales</h2>
      <Champ
        name="nom"
        value={saisie.nom}
        onChange={handleChange}
        id="nom"
        placeholder="Taper Votre nom Complet"
        description="Nom Complet"
      />

      <Champ
        name="email"
        value={saisie.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Email"
        description="Adresse Mail"
      />

      <Champ
        name="tel"
        value={saisie.tel}
        onChange={handleChange}
        id="tel"
        type="tel"
        placeholder="Téléphone"
        description="Numéro de téléphone"
      />

      <Champ
        name="ville"
        value={saisie.ville}
        onChange={handleChange}
        id="ville"
        placeholder="Code postal, Ville"
        description="Votre Code postal et Ville"
      />

      <button
        className="mt-2 rounded-lg border bg-stone-50 px-4 py-1 font-semibold transition-colors hover:border-stone-400 hover:bg-stone-200 hover:shadow-md"
        type="submit"
      >
        Enregistrer
      </button>
    </form>
  );
}

function AfficherFormations({ onEnvoyerFormation, onSupprimerFormation, formations }: AfficherFormationsProps) {
  const [saisie, setSaisie] = useState(FORMATION_VIDE);
  const [idEnEdition, setIdEnEdition] = useState<string | null>(null);

  function enregistrerFormation(e: React.SubmitEvent) {
    e.preventDefault();
    const formation = { ...saisie, id: idEnEdition ?? crypto.randomUUID() };
    onEnvoyerFormation(formation);
    setSaisie(FORMATION_VIDE)
    setIdEnEdition(null);
  }

  function modifierFormation(modification: Formation) {
    const {id, ...resteSaisie} = modification
    setSaisie(resteSaisie)
    setIdEnEdition(id);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSaisie((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <>
      <form onSubmit={enregistrerFormation} className="my-8 rounded-md bg-stone-200 p-4 shadow-md">
        <h2 className="pb-2 text-xl font-bold">Formations</h2>
        <Champ
          name="diplome"
          value={saisie.diplome}
          onChange={handleChange}
          id="diplome"
          placeholder="Diplome"
          description="Quel Diplome ?"
        />

        <Champ
          name="ecole"
          value={saisie.ecole}
          onChange={handleChange}
          id="ecole"
          placeholder="École"
          description="Dans quelle Etablissement ?"
        />

        <Champ
          name="ville"
          value={saisie.ville}
          onChange={handleChange}
          id="formation-ville"
          placeholder="Ville"
          description="Dans quelle ville ?"
        />

        <Champ
          name="debut"
          value={saisie.debut}
          onChange={handleChange}
          id="formation-debut"
          type="month"
          description="Date de début"
        />

        <Champ
          name="fin"
          value={saisie.fin}
          onChange={handleChange}
          id="formation-fin"
          type="month"
          description="Date de fin"
        />
        <button
          className="mt-2 rounded-lg border bg-stone-50 px-4 py-1 font-semibold transition-colors hover:border-stone-400 hover:bg-stone-200 hover:shadow-md"
          type="submit"
        >
          {idEnEdition ? "Modifier" : "Ajouter"}
        </button>
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
  const [idSelect, setIdSelect] = useState<string | null>(null);

  function ajouterExperience(e: React.SubmitEvent) {
    e.preventDefault();
    const experience = {
      job,
      entreprise,
      debut,
      fin,
      description,
      id: idSelect ?? crypto.randomUUID(),
    };
    onEnvoyerExperience(experience);
    setJob("");
    setEntreprise("");
    setDebut("");
    setFin("");
    setDescription("");
    setIdSelect(null);
  }

  function modifierExperience(experience: Experience) {
    const { job, entreprise, debut, fin, description, id } = experience;
    setJob(job);
    setEntreprise(entreprise);
    setDebut(debut);
    setFin(fin);
    setDescription(description);
    setIdSelect(id);
  }

  return (
    <>
      <form onSubmit={ajouterExperience} className="my-8 rounded-md bg-stone-200 p-4 shadow-md">
        <h2 className="pb-2 text-xl font-bold">Expériences professionnelles</h2>
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
        <div className="flex flex-col py-2">
          <label className="font-semibold" htmlFor="description">
            Description
          </label>
          <textarea
            className="bg-stone-300"
            id="description"
            rows={4}
            placeholder="Décrivez ce que vous avez fait."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="mt-2 rounded-lg border bg-stone-50 px-4 py-1 font-semibold transition-colors hover:border-stone-400 hover:bg-stone-200 hover:shadow-md"
          type="submit"
        >
          {idSelect !== null ? "Modifier" : "Ajouter"}
        </button>
      </form>
      {experiences.map(({ job, entreprise, debut, fin, description, id }) => (
        <div key={id}>
          <p>
            {job}-{entreprise}-{debut}/{fin}-{description}
          </p>
          <button type="button" onClick={() => modifierExperience({ job, entreprise, debut, fin, description, id })}>
            Modifier
          </button>
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
    <div className="mx-auto my-8 min-h-[297mm] w-[210mm] bg-white p-[15mm] shadow-lg">
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
    </div>
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
    setExperiences((prev) => {
      const experienceExiste = prev.some((e) => e.id === experience.id);
      return experienceExiste ? prev.map((e) => (e.id === experience.id ? experience : e)) : [...prev, experience];
    });
  }
  function handleSupprimerExperience(id: string) {
    setExperiences((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <main className="bg-stone-50">
      <h1 className="pt-16 text-center text-4xl font-bold">CV Application - Odin Project</h1>
      <div className="mt-16 grid grid-cols-2 gap-4">
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
      </div>
    </main>
  );
}

export default CvApplication;
