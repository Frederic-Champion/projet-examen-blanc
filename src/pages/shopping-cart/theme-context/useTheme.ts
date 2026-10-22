import { createContext, useContext } from "react";

interface DarkContexte {
  switchTheme: () => void;
  theme: "light" | "dark";
}

export const DarkContext = createContext<DarkContexte | null>(null);

export function useTheme() {
  const context = useContext(DarkContext);
  if (!context) throw new Error("Darkcontext doit être placé dans le provider");
  return context;
}
