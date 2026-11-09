export function Brouillon() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const dataForm = new FormData(e.currentTarget);
    console.log([...dataForm])
    const data: Record<string, FormDataEntryValue> = {}
    for (const v of [...dataForm]) {
      data[v[0]] = v[1];
    }
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="titre" />
        <select name="priorite">
          <option value="basse">Basse</option>
          <option value="haute">Haute</option>
        </select>
        <button>Ajouter</button>
      </form>
    </div>
  );
}


class Minuteur {
  constructor() {
    this.secondes = 0;
  }
  tic() {
    this.secondes++;
    console.log(this.secondes);
  }
}

function executer(action) {
  action();
}

const m = new Minuteur();
executer(m.tic.bind(m));