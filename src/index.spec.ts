import { add } from "./index";

describe("Test add function", () => {
  it("should return 0 with empty string", () => {
    expect(add("")).toEqual(0);
  });
});
