import React from "react";
import PropTypes from "prop-types";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useDeleteProduct } from "../../../hooks";
import ProductListItem from "./ProductListItem";

const Product = ({ product }) => {
  const handleDelete = useDeleteProduct();

  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          <Link to={`/edit/${product.id}`}>{product.name}</Link>
          <Button close onClick={() => handleDelete(product.id)} />
        </CardTitle>
        <CardText tag="div">
          <ProductListItem product={product} />
        </CardText>
      </CardBody>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
