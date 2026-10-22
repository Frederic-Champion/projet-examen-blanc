import { memo, useMemo, useState } from "react";

const VERRES = ["Unifocal", "Progressif", "Mi-distance"];

const ListeVerres = memo(function ListeVerres({ verres }: { verres: string[] }) {
  console.log("🔵 rendu de ListeVerres");
  return (
    <ul>
      {verres.map((v) => (
        <li key={v}>{v}</li>
      ))}
    </ul>
  );
});

export function Brouillon() {
  const [note, setNote] = useState("");
  

  // ÉTAPE 1
  const verres = useMemo(() => {
    return [...VERRES];
  }, []);

  return (
    <div className="p-4">
      <input value={note} onChange={(e) => setNote(e.target.value)} className="border" />
      <ListeVerres verres={verres} />
    </div>
  );
}
