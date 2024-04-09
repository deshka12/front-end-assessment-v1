import { addDays, isAfter } from "date-fns";
export const isNameValid = (value) => {
  return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
  return value.length > 0 && value.length <= 5;
};

export const isExpirationDateValid = (value) => {
  const currentDate = new Date();
  const selectedDate = new Date(value);
  const minExpirationDate = addDays(currentDate, 30);

  if (isAfter(selectedDate, minExpirationDate)) {
    return value;
  } else {
    return (value = minExpirationDate.toISOString().slice(0, 10)); // Format as YYYY-MM-DD
  }
};
