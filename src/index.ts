export function add(input: string): number {
  const newValue = input ? input : "0";
  const valueList = newValue.split(",");
  const valueListNumbers = valueList.map(Number);
  const sumValueList =
    valueListNumbers[0] + (valueListNumbers[1] ? valueListNumbers[1] : 0);
  return sumValueList;
}
