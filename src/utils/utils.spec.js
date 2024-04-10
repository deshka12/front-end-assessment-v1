import { isChecked } from "./utils";

describe("isChecked", () => {
  it("should return true when rating is greater than 8", () => {
    const result = isChecked(9);

    expect(result).toBe(true);
  });

  it("should return false when rating is not greater than 8", () => {
    const result = isChecked(8);

    expect(result).toBe(false);
  });
});
