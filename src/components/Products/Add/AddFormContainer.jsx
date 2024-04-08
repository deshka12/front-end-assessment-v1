import React from "react";
import { Link } from "react-router-dom";
import { ProductForm } from "../Update/ProductForm";

const AddFormContainer = () => (
  <>
    <Link to="/">Home</Link>
    <ProductForm
      onSave={(data) => {
        return;
      }}
    />
  </>
);
export default AddFormContainer;
