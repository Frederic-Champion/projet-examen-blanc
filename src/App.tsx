import { Routes, Route, Link } from "react-router";
import Brouillon from "./components/Brouillon";
import Accueil from "./components/Accueil";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/brouillon">Brouillon</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/brouillon" element={<Brouillon />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
