import { cn } from "../../utils/cn";

interface SelecteurQuantiteProps {
  quantite: number;
  onChangerQuantite: (nouvelleQuantite: number) => void;
  className?: string;
}

export function SelecteurQuantite({ quantite, onChangerQuantite, className }: SelecteurQuantiteProps) {
  return (
    <div className={cn("flex w-fit items-center rounded-lg border border-gray-300 text-center", className)}>
      <button
        className="flex size-6 cursor-pointer items-center justify-center rounded-full pb-1 text-xl hover:bg-shop-primaire-survol"
        aria-label="soustraire quantité"
        onClick={() => onChangerQuantite(quantite - 1)}
      >
        -
      </button>
      <input
        type="number"
        aria-label="Quantité"
        value={quantite}
        onChange={(e) => {
          const nouvelleQuantite = Number(e.target.value);
          if (nouvelleQuantite < 1) return;
          onChangerQuantite(nouvelleQuantite);
        }}
        className="w-8 text-center tabular-nums"
      />
      <button
        className="flex size-6 cursor-pointer items-center justify-center rounded-full pb-1 text-xl hover:bg-shop-primaire-survol"
        aria-label="ajouter quantité"
        onClick={() => onChangerQuantite(quantite + 1)}
      >
        +
      </button>
    </div>
  );
}