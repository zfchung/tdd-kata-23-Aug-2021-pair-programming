export function add(input: string): number {
  const newValue = input
    ? input
        .split(",")
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
    : 0;
  return newValue;
}
