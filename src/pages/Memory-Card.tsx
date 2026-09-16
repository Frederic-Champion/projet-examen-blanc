import { useState } from "react";

function MemoryCard() {
  const [montreH, setMontreH] = useState([])
  const [montreF, setMontreF] = useState([]);

  // API montres femmes : "https://dummyjson.com/products/category/womens-watches"
  // API montres hommes : "https://dummyjson.com/products/category/mens-watches"

  return <div className="pt-16">
    <p>Score total :</p>
    <p>Meilleur score :</p>
  </div>;
}

export { MemoryCard };
