import { Routes, Route, Link } from "react-router";
import Brouillon from "./pages/Brouillon";
import Accueil from "./pages/Accueil";
import Calculatrice from "./pages/Calculatrice";

function App() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <nav className="flex gap-4">
        <Link to="/">Accueil</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/brouillon" element={<Brouillon />} />
          <Route path="/calculatrice" element={<Calculatrice />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
