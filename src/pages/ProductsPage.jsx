import React from "react";
import { Header, ProductsList } from "../components";

const ProductsPage = () => (
  <>
    <Header name="Products" pathName="/add" navigateTo="Add Product" />
    <ProductsList />
  </>
);

export default ProductsPage;
