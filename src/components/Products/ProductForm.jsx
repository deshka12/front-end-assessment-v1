import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Col,
} from "reactstrap";
import {
  isChecked,
  isExpirationDateValid,
  isNameValid,
  repeat,
} from "../../utils";

const ProductForm = ({ onSave, product = {} }) => {
  const [formData, setFormData] = useState({
    name: product.name || "",
    brand: product.brand || "",
    rating: product.rating || 0,
    categories: product.categories || [],
    itemsInStock: product.itemsInStock || 0,
    receiptDate: product.receiptDate || "",
    expirationDate: product.expirationDate || "",
    featured: product.featured || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;

    if (name === "expirationDate") {
      newValue = isExpirationDateValid(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : newValue,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="name" sm={2}>
          Name
        </Label>
        <Col sm={5}>
          <Input
            invalid={!isNameValid(formData.name)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormFeedback>
            Name is required, the length must not be greater than 200
          </FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="brand">Brand</Label>
        <Input
          type="text"
          name="brand"
          id="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="rating">Rating</Label>
        <Input
          type="select"
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          {repeat(11).map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </Input>
      </FormGroup>
      {/* <FormGroup>
        <Label for="categories">Categories</Label>
        <Input
          invalid={!isCategoriesValid(formData.categories)}
          type="select"
          name="categories"
          id="categories"
          multiple
          value={formData.categories}
          onChange={handleChange}
        >
          {formData.categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Input>
        <FormFeedback>A product must have from 1 to 5 categories</FormFeedback>
      </FormGroup> */}
      <FormGroup>
        <Label for="itemsInStock">Items In Stock</Label>
        <Input
          type="number"
          name="itemsInStock"
          id="itemsInStock"
          value={formData.itemsInStock}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="expirationDate">Expiration date</Label>
        <Input
          type="date"
          name="expirationDate"
          id="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
        />
        <FormFeedback>
          If a product has an expiration date it must expire not less than 30
          days since now
        </FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="receiptDate">Receipt date</Label>
        <Input
          type="date"
          name="receiptDate"
          id="receiptDate"
          value={formData.receiptDate}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            disabled={true}
            type="checkbox"
            checked={isChecked(formData.rating)}
            onChange={handleChange}
            name="featured"
          />{" "}
          Featured
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

ProductForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ProductForm;
