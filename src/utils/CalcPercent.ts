export default function CalcPercent(perc: number | undefined, total: number | undefined) {
  let result;
  if (perc === total) {
    result = 100;
  }

  if (perc !== total) {
    result = Math.floor((perc / total) * 100);
  }

  return result;
}
