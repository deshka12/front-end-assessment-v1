import React from "react";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import { chunk } from "lodash";
import { useGetProducts } from "../../hooks";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../actions/products";

const ProductList = () => {
  const { products } = useGetProducts();
  const dispatch = useDispatch();
  console.log("PRODUCTS", products);
  const productsGroups = chunk(products, 3);

  return (
    <Container>
      {productsGroups.map((productsGroup, index) => (
        <Row key={index} className="mb-5">
          {productsGroup.map((product) => (
            <Col sm="4" key={product.id}>
              <Product
                product={product}
                onDelete={(id) => dispatch(deleteProduct(id))}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ProductList;
