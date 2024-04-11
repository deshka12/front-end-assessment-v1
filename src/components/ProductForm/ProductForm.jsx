import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "reactstrap";
import {
  getMultiSelected,
  isCategoriesValid,
  isChecked,
  isExpirationDateValid,
  isNameValid,
  repeat,
} from "../../utils";
import CustomInput from "../CustomInput/CustomInput";
import { useCategoriesName } from "../../hooks";

const ProductForm = ({ onSave, product = {}, categories = [] }) => {
  const categoriesName = useCategoriesName();
  const [formData, setFormData] = useState({
    name: product.name || "",
    brand: product.brand || "",
    rating: product.rating || 0,
    categories: categories || [],
    itemsInStock: product.itemsInStock || 0,
    receiptDate: product.receiptDate || "",
    expirationDate: product.expirationDate || "",
    featured: product.featured || false,
  });

  const { isNameCorrect, invalidNameError } = isNameValid(formData.name);
  const { isCategoriesCorrect, invalidCategoriesError } = isCategoriesValid(
    formData.categories
  );
  const { isValidDate, invalidDateError } = isExpirationDateValid(
    formData.expirationDate
  );
  const isSubmitDisabled =
    !isNameCorrect || !isCategoriesCorrect || !isValidDate;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "categories") {
      newValue = getMultiSelected(e.target);
    }

    if (name === "rating") {
      setFormData((prevData) => ({
        ...prevData,
        rating: newValue,
        featured: isChecked(newValue),
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Form data-auto-id="product-form" onSubmit={onSubmit}>
      <CustomInput
        name="name"
        label="Name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        invalid={!isNameCorrect}
        errorMessage={invalidNameError}
      />
      <CustomInput
        name="brand"
        label="Brand"
        type="text"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleChange}
      />
      <CustomInput
        name="rating"
        label="Rating"
        type="select"
        value={formData.rating}
        onChange={handleChange}
        options={repeat(11)}
      />
      <CustomInput
        name="categories"
        label="Categories"
        type="select"
        value={formData.categories}
        onChange={handleChange}
        options={categoriesName}
        multiple
        invalid={!isCategoriesCorrect}
        errorMessage={invalidCategoriesError}
      />
      <CustomInput
        name="itemsInStock"
        label="Items In Stock"
        type="number"
        value={formData.itemsInStock}
        onChange={handleChange}
      />
      <CustomInput
        name="expirationDate"
        label="Expiration date"
        type="date"
        value={formData.expirationDate}
        onChange={handleChange}
        invalid={!isValidDate}
        errorMessage={invalidDateError}
      />
      <CustomInput
        name="receiptDate"
        label="Receipt date"
        type="date"
        value={formData.receiptDate}
        onChange={handleChange}
      />
      <CustomInput
        name="Featured"
        label="Featured"
        type="checkbox"
        checked={formData.featured}
        onChange={handleChange}
        disabled
      />
      <hr />
      <Button disabled={isSubmitDisabled}>Submit</Button>
    </Form>
  );
};

ProductForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ProductForm;
