export function add(input: string): number {
  const newValue = input ? input : "0";
  const delimiter = /\n|,/;
  const valueList = newValue.split(delimiter);
  const valueListNumbers = valueList.map(Number);
  const sumValueList = sumListItems(valueListNumbers);
  return sumValueList;
}

function sumListItems(valueListNumbers: number[]) {
  return valueListNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
