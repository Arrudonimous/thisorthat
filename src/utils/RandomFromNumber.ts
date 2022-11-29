export default function RandomFromNumber(max: number) {
  const min = 0;

  return Math.floor(Math.random() * (max - min + 1) + min);
}
