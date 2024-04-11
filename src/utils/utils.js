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