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
interface PagePresentationProps {
  infos: Infos | null;
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

function Formations() {
  return <form></form>;
}

function Experiences() {
  return <form></form>;
}

function PagePresentation({ infos }: PagePresentationProps) {
  return (
    <>
      <p>page blanche de test</p>
      {infos !== null && (
        <div>
          {infos.nom}-{infos.email}-{infos.tel}-{infos.ville}
        </div>
      )}
    </>
  );
}

function CvApplication() {
  const [infos, setInfos] = useState<Infos | null>(null);

  function handleRecupInfos(infos: Infos) {
    setInfos(infos);
  }

  return (
    <main className="mt-16 grid grid-cols-2">
      <div>
        <InfosGenerales onEnvoyerInfos={handleRecupInfos} />
        <Formations />
        <Experiences />
      </div>
      <div>
        <PagePresentation infos={infos} />
      </div>
    </main>
  );
}

export default CvApplication;
