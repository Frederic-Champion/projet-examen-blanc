interface EtatMessageProps {
  icone: React.ReactNode;
  titre: string;
  texte?: string;
  children?: React.ReactNode;
}

export function EtatMessage({ icone, titre, texte, children }: EtatMessageProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
      {icone}
      <p className="text-xl font-semibold uppercase">{titre}</p>
      {texte && <p className="text-shop-texte-doux">{texte}</p>}
      {children}
    </div>
  );
}