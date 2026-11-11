import { format, isBefore, parseISO, startOfToday } from "date-fns";
import type { Priorite, Tache } from "./types";
import { fr } from "date-fns/locale";

export function lireChampsTache(data: FormData):Omit<Tache, "id" | "idProjet" | "fait" > {
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

export function formaterEcheance(echeance: string): string {
  if (echeance.trim() === "") return "Sans échéance"
  const date = parseISO(echeance);
  const dateLocale = format(date, "dd-MM-yyyy", { locale: fr });
  return dateLocale;
}

export function estEnRetard(echeance: string, fait: boolean): boolean {
  if (fait || echeance.trim() === "") return false
  const retard = isBefore(parseISO(echeance), startOfToday())
  return retard;
}