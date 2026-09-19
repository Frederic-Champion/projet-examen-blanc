import { NavLink } from "react-router";

export default function Brouillon() {
  return <Exercice/>;
}

function Exercice() {
  return (
    <div className="pt-16">
      <NavLink end className={ ({isActive}) => isActive ? "border p-2 text-blue-600" : "border p-2"} to='/mon-compte'>1</NavLink>
      <NavLink end className={ ({isActive}) => isActive ? "border p-2 text-blue-600" : "border p-2"} to='/mon-compte/commande'>2</NavLink>
      <NavLink className={ ({isActive}) => isActive ? "border p-2 text-blue-600" : "border p-2"} to='/mon-compte/commande/:id'>3</NavLink>
      <NavLink className={ ({isActive}) => isActive ? "border p-2 text-blue-600" : "border p-2"} to='/mon-compte/ordonnance'>4</NavLink>
    </div>
  )
}