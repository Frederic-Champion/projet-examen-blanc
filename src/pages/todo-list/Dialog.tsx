interface DialogProps {
  children?: React.ReactNode;
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
      className="w-full max-w-xl m-auto bg-transparent backdrop:bg-black/40 backdrop:backdrop-blur-xs"
      ref={ref}
    >
      <div className="m-4 rounded-xl bg-todo-surface p-4 text-todo-textP">
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            functionReducer(data);
            e.currentTarget.reset();
            ref.current?.close();
          }}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          {children}
          <div className="flex justify-center gap-8">
            <button
              className="cursor-pointer rounded-xl border border-todo-accent/50 px-4 py-2 shadow-todo-carte"
              type="submit"
            >
              {textBtnValid}
            </button>
            <button
              className="cursor-pointer rounded-xl border border-todo-accent/50 px-4 py-2 shadow-todo-carte"
              type="button"
              onClick={() => ref.current?.close()}
            >
              {textBtnClose}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
