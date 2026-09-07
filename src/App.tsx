import { Routes, Route, Link, useNavigate, useLocation } from "react-router";
import { House, Undo2 } from "lucide-react";
import Brouillon from "./pages/Brouillon";
import Accueil, { PageIntrouvable } from "./pages/Accueil";
import { CalculatriceAccueil, NavigationCalculatrice } from "./pages/Calculatrice-Accueil";
import Calculatrice from "./pages/Calculatrice";
import CalculatricePageBlanche from "./pages/Calculatrice-pageBlanche";
import CvApplication from "./pages/CvApplication";
import Catalogue, { FicheMonture } from "./pages/Catalogue";

function App() {
  const naviguer = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 z-10 flex items-center gap-2 p-3">
        <Link to="/" aria-label="Accueil" className="rounded-full bg-white/60 p-2 hover:bg-blue-200">
          <House size={20} />
        </Link>
        {location.pathname !== "/" && (
          <button
            onClick={() => naviguer(-1)}
            aria-label="Précédent"
            className="rounded-full bg-white/60 p-2 hover:bg-blue-200"
          >
            <Undo2 size={20} />
          </button>
        )}
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/brouillon" element={<Brouillon />} />
          <Route path="/page-calculatrice" element={<NavigationCalculatrice />}>
            <Route index element={<CalculatriceAccueil />} />
            <Route path="1" element={<Calculatrice />} />
            <Route path="2" element={<CalculatricePageBlanche />} />
          </Route>
          <Route path="/cv-application" element={<CvApplication />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/catalogue/:id" element={<FicheMonture />} />
          <Route path="*" element={<PageIntrouvable />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
