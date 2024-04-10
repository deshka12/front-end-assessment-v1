import dayjs from "dayjs";

export const repeat = (n) => Array.from(Array(n).keys());

export const getMultiSelected = (target) => {
  return Array.from(target.options).reduce((acc, { selected, value }) => {
    if (selected) {
      acc.push(value);
    }
    return acc;
  }, []);
};

export const timestampToDays = (ms) => {
  const SEC = 1000;
  const MIN = 60 * SEC;
  const HOUR = 60 * MIN;
  const DAY = 24 * HOUR;
  return ms / DAY;
};

export const generateId = () => {
  return Date.now().toString(10);
};

export const formatProductDates = (product) => {
  const shortDateFormat = "MM/DD/YYYY";
  const longDateFormat = "MM/DD/YYYY hh:mm a";

  const receiptDate = product.receiptDate
    ? dayjs(product.receiptDate).format(shortDateFormat)
    : "-";
  const expirationDate = product.expirationDate
    ? dayjs(product.expirationDate).format(shortDateFormat)
    : "-";
  const createdAt = product.createdAt
    ? dayjs(product.createdAt).format(longDateFormat)
    : "-";

  return { receiptDate, expirationDate, createdAt };
};

export const isChecked = (rating) => rating > 8;
