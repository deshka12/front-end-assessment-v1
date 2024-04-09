import React from "react";
import { Header, ProductForm } from "../components";

const EditProductPage = () => {
  const onSave = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header name="Edit Product" pathName="/" navigateTo="Home" />
      <ProductForm onSave={onSave} />
    </>
  );
};

export default EditProductPage;
