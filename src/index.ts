export function add(input: string): number {
  const newValue = input ? input : "0";
  const valueList = newValue.split(",");
  const valueListNumbers = valueList.map(Number);
  const sumValueList = valueListNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sumValueList;
}
