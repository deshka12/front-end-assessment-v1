import React from "react";
import { Header, ProductForm } from "../components";

const AddProductPage = () => {
  const onSave = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header name="Add Product" pathName="/" navigateTo="Home" />
      <ProductForm onSave={onSave} />
    </>
  );
};
export default AddProductPage;
