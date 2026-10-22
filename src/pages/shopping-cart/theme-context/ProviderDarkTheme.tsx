import React, { useEffect, useState } from "react";
import { DarkContext } from "./useTheme";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const t = localStorage.getItem("shoppingTheme");
    if (t === "dark" || t === "light") return t;
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("shoppingTheme", theme);
  }, [theme]);

  function switchTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return <DarkContext value={{ switchTheme, theme }}>{children}</DarkContext>;
}

export { ThemeProvider };
