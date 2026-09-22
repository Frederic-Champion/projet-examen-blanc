import { Outlet } from "react-router";

function LayoutPage() {
  return (
    <div className="pt-16">
      <h1>Titre, barre de navigation et Panier</h1>
      <Outlet />
    </div>
  );
}

export { LayoutPage };
