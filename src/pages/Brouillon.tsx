

export function Brouillon() {
const nom = "Ray-Ban";
const stock = 0;

return (
  <div>
    <p>`Monture ${nom}`</p>
    <p>Monture {nom}</p>
    <p>{`Stock : ${stock}`}</p>
    <p>{stock && "En stock"}</p>
  </div>
);
}