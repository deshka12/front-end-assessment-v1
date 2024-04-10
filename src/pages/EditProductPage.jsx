import React from "react";
import { Header, ProductForm } from "../components";
import { useGetProductById } from "../hooks";

const EditProductPage = () => {
  const product = useGetProductById();

  if (product.length < 1) {
    return null;
  }

  const onSave = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header name="Edit Product" pathName="/" navigateTo="Home" />
      <ProductForm onSave={onSave} product={product} />
    </>
  );
};

export default EditProductPage;
