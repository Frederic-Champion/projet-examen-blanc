import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ProviderDarkTheme";

export function BoutonTheme() {
  const { theme, switchTheme } = useTheme();

  return (
    <button className="cursor-pointer" type="button" aria-label="Changer de thème" onClick={switchTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
