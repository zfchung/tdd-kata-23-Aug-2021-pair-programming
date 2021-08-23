export function add(input: string): number {
  const newValue = input ? input : "0";
  const valueList = newValue.split(",");
  const valueListNumbers = valueList.map(Number);
  const sumValueList = sumListItems(valueListNumbers);
  return sumValueList;
}

function sumListItems(valueListNumbers: number[]) {
  return valueListNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
