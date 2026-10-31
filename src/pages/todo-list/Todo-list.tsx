export function TodoList() {
  return <div className="pt-16">
    <h1>Todo-list en titre</h1>
    <select><option>Les listes qui s'ajoute avec un menu déroulant</option></select>
    <button>Ajouter une liste</button>

    <div>Affichage des différentes listes, au clic : affichage des taches en fonction de la liste</div>

    <button>Ajouter une tache dans la liste de son choix (toutes par default)</button>

    <button className="border">Afficher Calendrier</button>
    <button className="border">Paramètre des couleurs</button>
    <button className="border">Switch liste et taches</button>
  </div>
}