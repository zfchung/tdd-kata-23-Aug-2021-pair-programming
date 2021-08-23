export function add(input: string): number {
  const newValue = input ? input : "0";
  const hasCustomDelimiter: boolean = newValue.startsWith("//");
  const delimiter = hasCustomDelimiter ? newValue.charAt(2) : "\n";
  const cleanValue = hasCustomDelimiter ? newValue.split("\n")[1] : newValue;
  const commonDelimiterValue = cleanValue.replaceAll(delimiter, ",");
  const valueList = commonDelimiterValue.split(",");
  const valueListNumbers = valueList.map(Number);
  const hasNegative = valueListNumbers.some((value) => value < 0);
  if (hasNegative) {
    const negativeValues = valueListNumbers
      .filter((value) => value < 0)
      .join(",");
    throw "negatives are not allowed: " + negativeValues;
  }
  const sumValueList = sumListItems(valueListNumbers);
  return sumValueList;
}

export function add2(input: string): number {
  const newValue = input ? input : "0";
  if (newValue.substring(0, 2) == "//") {
    const delimiter = newValue.charAt(2);
    const newCommonDelimiterValue = newValue.split("\n")[1];
    const valueList = newCommonDelimiterValue.split(delimiter);
    const valueListNumbers = valueList.map(Number);
    const sumValueList = sumListItems(valueListNumbers);
    return sumValueList;
  } else {
    const commonDelimiterValue = newValue.replaceAll("\n", ",");
    const valueList = commonDelimiterValue.split(",");
    const valueListNumbers = valueList.map(Number);
    const sumValueList = sumListItems(valueListNumbers);
    return sumValueList;
  }
}

function sumListItems(valueListNumbers: number[]) {
  return valueListNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
