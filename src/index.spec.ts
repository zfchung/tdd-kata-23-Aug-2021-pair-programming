import { add } from "./index";

describe("Test add function", () => {
  it("should return 0 with empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("should return summation of one number", () => {
    expect(add("1")).toEqual(1);
    expect(add("11")).toEqual(11);
    expect(add("999")).toEqual(999);
  });
  it("should return summation of two numbers", () => {
    expect(add("1,2")).toEqual(3);
    expect(add("11,1")).toEqual(12);
    expect(add("999,11")).toEqual(1010);
  });
  it("should return summation of unknown amount of numbers", () => {
    expect(add("1,2,1,1,1,1,1,1,1")).toEqual(10);
    expect(add("11,1,999")).toEqual(1011);
  });
  it("should recognize numbers separated by commas and new line '\n'", () => {
    expect(add("1\n2,3")).toEqual(6);
    expect(add("1\n2,1,1,1,1,1,1,1")).toEqual(10);
    expect(add("11\n1\n999")).toEqual(1011);
  });
  it("should recognize custom delimiters", () => {
    expect(add("//;\n1;2;3")).toEqual(6);
  });
});
