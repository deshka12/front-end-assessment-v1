import React from "react";
import Product from "./Product/Product";
import { Row, Col } from "reactstrap";
import { chunk } from "lodash";
import { useGetProducts } from "../../hooks";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const ProductList = () => {
  const { products, status, error } = useGetProducts();

  if (status === "loading") {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  
  const productsGroups = chunk(products, 3);

  return (
    <>
      {productsGroups.map((productsGroup, index) => (
        <Row key={index} className="mb-5">
          {productsGroup.map((product) => (
            <Col sm="4" key={product.id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default ProductList;
