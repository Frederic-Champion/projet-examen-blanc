interface DialogProps {
  children: React.ReactNode;
  title: string;
  ref: React.RefObject<HTMLDialogElement | null>;
  textBtnClose: string;
  textBtnValid: string;
  functionReducer: (data: FormData) => void;
}

export function Dialog({ title, ref, textBtnClose, textBtnValid, children, functionReducer }: DialogProps) {
  return (
    <dialog
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      className="m-auto backdrop:bg-transparent"
      ref={ref}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          functionReducer(data);
          e.currentTarget.reset();
          ref.current?.close();
        }}
      >
        <h3>{title}</h3>
        {children}
        <button type="submit">{textBtnValid}</button>
        <button type="button" onClick={() => ref.current?.close()}>
          {textBtnClose}
        </button>
      </form>
    </dialog>
  );
}
