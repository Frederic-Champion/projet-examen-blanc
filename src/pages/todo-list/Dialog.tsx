

interface DialogProps {
  children: React.ReactNode;
  title: string;
  ref: React.RefObject<HTMLDialogElement | null>;
  textBtnClose: string;
  textBtnValid: string;
  functionReducer: () => void;
}

export function Dialog({ title, ref, textBtnClose, textBtnValid, children, functionReducer }: DialogProps) {

  return (
    <dialog
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      className="m-auto backdrop:bg-transparent"
      ref={ref}
    >
      <div>
        <h3>{title}</h3>
        {children}
        <button
          onClick={() => {
            functionReducer();
            ref.current?.close();
          }}
        >
          {textBtnValid}
        </button>
        <button onClick={() => ref.current?.close()}>{textBtnClose}</button>
      </div>
    </dialog>
  );
}

{
  /* <dialog
  onClick={(e) => e.target === e.currentTarget && refProjet.current?.close()}
  className="m-auto backdrop:bg-transparent"
  ref={refProjet}
>
  <div className="bg-stone-100">
    <h3>Ajouter un projet :</h3>
    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nom du projet" />
    <button
      onClick={() => {
        dispatch({ type: "ajouterProjet", projet: { id: crypto.randomUUID(), nom: input } });
        refProjet.current?.close();
      }}
    >
      valide
    </button>
    <button onClick={() => refProjet.current?.close()}>Retour</button>
  </div>
</dialog>; */
}
