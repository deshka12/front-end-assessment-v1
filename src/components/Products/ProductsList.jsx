import React from "react";
import Product from "./Product/Product";
import { Row, Col } from "reactstrap";
import { chunk } from "lodash";
import { useGetProducts } from "../../hooks";

const ProductList = () => {
  const { products } = useGetProducts();
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
