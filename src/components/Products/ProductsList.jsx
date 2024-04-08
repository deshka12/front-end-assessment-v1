import React from "react";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import { chunk } from "lodash";
import { useGetProducts } from "../../hooks";

const ProductList = () => {
  const { products } = useGetProducts();
  const productsGroups = chunk(products, 3);

  return (
    <Container>
      {productsGroups.map((productsGroup, index) => (
        <Row key={index} className="mb-5">
          {productsGroup.map((product) => (
            <Col sm="4" key={product.id}>
              <Product key={product.id} product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ProductList;
