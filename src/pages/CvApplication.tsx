import { useState } from "react";

function InfosGenerales() {
  const [valide, setValide] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [ville, setVille] = useState("");

  // interface Info {
  //   nom: string;
  //   email: string;
  //   tel: string;
  //   ville: string;
  // }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setValide(true);
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
      <div>
        {valide && (
          <p>
            {nom}
            {email}
            {tel}
            {ville}
          </p>
        )}
      </div>
    </div>
  );
}

function Formations() {
  return <form></form>;
}

function Experiences() {
  return <form></form>;
}

function CvApplication() {
  return (
    <main className="mt-16 grid grid-cols-2">
      <div>
        <InfosGenerales />
        <Formations />
        <Experiences />
      </div>
      <div>
        <h1>la page blanche</h1>
      </div>
    </main>
  );
}

export default CvApplication;
