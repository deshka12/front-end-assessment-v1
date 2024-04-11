import React from "react";
import { Header, ProductForm } from "../components";
import { useGetProductById, usePreselectedCategories } from "../hooks";

const EditProductPage = () => {
  const product = useGetProductById();
  const preselectedCategories = usePreselectedCategories(product);
  if (product.length < 1) {
    return null;
  }

  const onSave = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header name="Edit Product" pathName="/" navigateTo="Home" />
      <ProductForm
        onSave={onSave}
        product={product}
        categories={preselectedCategories}
      />
    </>
  );
};

export default EditProductPage;
