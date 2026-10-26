export function Brouillon() {
  return <div>Brouillon</div>;
}

function verifierCorrection(sphere: number): number {
  if (sphere < -20 || sphere > 20) {
    throw new Error(`Correction hors limites : ${sphere}`);
  }
  return sphere;
}

try {
  verifierCorrection(25);
} catch (e) {
  if (e instanceof Error) console.log(e.message);
}