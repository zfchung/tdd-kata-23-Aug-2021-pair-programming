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
  it("should return summation of two number", () => {
    expect(add("1,2")).toEqual(3);
    expect(add("11,1")).toEqual(12);
    expect(add("999,11")).toEqual(1010);
  });
});
