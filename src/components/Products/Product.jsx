import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

import { useDeleteProduct, useGetProductCategories } from "../../hooks";
import { formatProductDates } from "../../utils/utils";

const Product = ({ product }) => {
  const categories = useGetProductCategories(product);
  const handleDelete = useDeleteProduct();

  const { receiptDate, expirationDate, createdAt } =
    formatProductDates(product);

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <Link to={`/edit/${product.id}`}>{product.name}</Link>
          <Button close onClick={() => handleDelete(product.id)} />
        </CardTitle>
        <CardText tag="div">
          <ListGroup>
            <ListGroupItem>Brand: {product.brand}</ListGroupItem>
            <ListGroupItem>Rating: {product.rating}</ListGroupItem>
            <ListGroupItem>
              Featured: {product.featured ? "Yes" : "No"}
            </ListGroupItem>
            <ListGroupItem>
              Items In Stock: {product.itemsInStock}
            </ListGroupItem>
            {categories && (
              <ListGroupItem>
                Categories:
                <ul>
                  {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                  ))}
                </ul>
              </ListGroupItem>
            )}
            <ListGroupItem>Receipt Date: {receiptDate}</ListGroupItem>
            <ListGroupItem>Expiration Date: {expirationDate}</ListGroupItem>
            <ListGroupItem>Created At: {createdAt}</ListGroupItem>
          </ListGroup>
        </CardText>
      </CardBody>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
