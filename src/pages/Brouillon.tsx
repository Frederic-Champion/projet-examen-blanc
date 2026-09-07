import { useEffect, useState } from "react";

export default function Brouillon() {
  const [seconde, setSeconde] = useState(() => {
    return new Date().toLocaleTimeString();
  });

  useEffect(() => {
    const s = setInterval(() => {
      setSeconde(new Date().toLocaleTimeString())
    }, 1000);
    return () => clearInterval(s);
  }, [])

  return <div className="pt-16 text-center">
    {seconde}
  </div>;
}