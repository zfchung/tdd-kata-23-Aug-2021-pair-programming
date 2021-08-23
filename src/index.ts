export function add(input: string): number {
  const newValue = input ? input : "0";
  return parseInt(newValue);
}
