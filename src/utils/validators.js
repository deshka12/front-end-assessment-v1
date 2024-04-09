import { addDays, isAfter } from "date-fns";
export const isNameValid = (value) => {
  const isNameCorrect = value.trim().length > 0 && value.trim().length <= 200;
  const invalidNameError =
    "Name is required, the length must not be greater than 200";

  return { isNameCorrect, invalidNameError };
};

export const isCategoriesValid = (value) => {
  const isCategoriesCorrect = value.length > 0 && value.length <= 5;
  const invalidCategoriesError = "A product must have from 1 to 5 categories";

  return { isCategoriesCorrect, invalidCategoriesError };
};

export const isExpirationDateValid = (value) => {
  const currentDate = new Date();
  const selectedDate = new Date(value);
  const minExpirationDate = addDays(currentDate, 30);
  const isValidDate = isAfter(selectedDate, minExpirationDate);
  const invalidDateError =
    "Expiration date it must expire not less than 30 days since now";

  return { isValidDate, invalidDateError };
};
