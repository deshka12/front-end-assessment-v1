import React from "react";
import { Link } from "react-router-dom";
import { ProductForm } from "../components";

const AddProductPage = () => (
  <>
    <Link to="/">Home</Link>
    <ProductForm
      onSave={(data) => {
        return;
      }}
    />
  </>
);
export default AddProductPage;
