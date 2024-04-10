import {
  isCategoriesValid,
  isExpirationDateValid,
  isNameValid,
} from "./validators";

describe("isNameValid", () => {
  it("should return isNameCorrect true for valid name and always return validation message", () => {
    const { isNameCorrect, invalidNameError } = isNameValid("Product Name");

    expect(isNameCorrect).toBe(true);
    expect(invalidNameError).toBe(
      "Name is required, the length must not be greater than 200"
    );
  });

  it("should return isNameCorrect true for name within the maximum length", () => {
    const maxValidName = "a".repeat(200);
    const { isNameCorrect } = isNameValid(maxValidName);

    expect(isNameCorrect).toBe(true);
  });

  it("should return isNameCorrect false for empty name", () => {
    const { isNameCorrect } = isNameValid("");

    expect(isNameCorrect).toBe(false);
  });

  it("should return isNameCorrect false for name exceeding the maximum length", () => {
    const longName = "a".repeat(201);
    const { isNameCorrect } = isNameValid(longName);

    expect(isNameCorrect).toBe(false);
  });
});

describe("isCategoriesValid", () => {
  it("should return isCategoriesCorrect true for valid number of categories and always return validation message", () => {
    const { isCategoriesCorrect, invalidCategoriesError } = isCategoriesValid([
      "Category1",
      "Category2",
    ]);

    expect(isCategoriesCorrect).toBe(true);
    expect(invalidCategoriesError).toEqual(
      "A product must have from 1 to 5 categories"
    );
  });

  it("should return isCategoriesCorrect true for categories array within the maximum length", () => {
    const maxValidCategories = [
      "Category1",
      "Category2",
      "Category3",
      "Category4",
      "Category5",
    ];
    const { isCategoriesCorrect } = isCategoriesValid(maxValidCategories);

    expect(isCategoriesCorrect).toBe(true);
  });

  it("should return isCategoriesCorrect true for empty categories array", () => {
    const { isCategoriesCorrect } = isCategoriesValid([]);

    expect(isCategoriesCorrect).toBe(false);
  });

  it("should return false for categories array exceeding maximum length", () => {
    const longCategories = [
      "Category1",
      "Category2",
      "Category3",
      "Category4",
      "Category5",
      "Category6",
    ];

    const { isCategoriesCorrect, invalidCategoriesError } =
      isCategoriesValid(longCategories);

    expect(isCategoriesCorrect).toBe(false);
  });
});

describe("isExpirationDateValid", () => {
  it("should return true and no error for valid expiration date and always return validation message", () => {
    const currentDate = new Date("2024-04-10");
    const selectedDate = new Date("2024-06-11");
    const { isValidDate, invalidDateError } =
      isExpirationDateValid(selectedDate);

    expect(isValidDate).toBe(true);
    expect(invalidDateError).toEqual(
      "Expiration date it must expire not less than 30 days since now"
    );
  });

  it("should return false for expiration date less than 30 days from now", () => {
    const currentDate = new Date("2024-04-10");
    const selectedDate = new Date("2024-05-05");
    const { isValidDate } = isExpirationDateValid(selectedDate);

    expect(isValidDate).toBe(false);
  });
});
