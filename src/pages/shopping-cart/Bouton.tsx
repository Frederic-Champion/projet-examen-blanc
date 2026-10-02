import { cn } from "../../utils/cn";

interface BoutonProps {
  onClick: () => void;
  desactive?: boolean;
  className?: string;
  label?: string;
  children: React.ReactNode;
}

export function Bouton({ onClick, desactive, children, className, label }: BoutonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        "cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 font-medium text-white hover:bg-shop-primaire disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-950 disabled:opacity-50",
        className,
      )}
      disabled={desactive}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
