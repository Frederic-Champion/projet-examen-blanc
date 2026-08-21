import { Routes, Route, Link } from "react-router";
import { House } from "lucide-react";
import Brouillon from "./pages/Brouillon";
import Accueil from "./pages/Accueil";
import Calculatrice from "./pages/Calculatrice";

function App() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 z-10 p-3">
        <Link to="/" aria-label="Accueil" className="inline-block rounded-full bg-white/60 p-2 hover:bg-blue-200">
          <House size={20} />
        </Link>
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
