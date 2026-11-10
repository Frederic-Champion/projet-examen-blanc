import type { Priorite, Tache } from "./types";

export function lireChampsTache(data: FormData) {
  return {
    titre: String(data.get("Tache")),
    priorite: String(data.get("priorite")) as Priorite,
    description: String(data.get("description")),
    echeance: String(data.get("date")),
  };
}

export function creerTodo(data: FormData, idProjet: string): Tache {
  return {
    titre: String(data.get("Tache")),
    priorite: String(data.get("priorite")) as Priorite,
    description: String(data.get("description")),
    echeance: String(data.get("date")),
    id: crypto.randomUUID(),
    idProjet: idProjet,
    fait: false,
  };
}
