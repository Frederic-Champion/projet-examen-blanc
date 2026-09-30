import { useState, useEffect } from "react";

export default function Brouillon() {

  const [historique, setHistorique] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem("historique") ?? "[]")
  })

  useEffect(() => {
    localStorage.setItem("historique", JSON.stringify(historique))
  }, [historique])

  return <div>broruillon</div>;
}

