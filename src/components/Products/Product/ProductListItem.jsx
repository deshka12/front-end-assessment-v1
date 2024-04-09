import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useGetProductCategories } from "../../../hooks";
import { formatProductDates } from "../../../utils";

const ProductListItem = ({ product }) => {
  const categories = useGetProductCategories(product);

  const { receiptDate, expirationDate, createdAt } =
    formatProductDates(product);

  return (
    <ListGroup>
      <ListGroupItem>Brand: {product.brand}</ListGroupItem>
      <ListGroupItem>Rating: {product.rating}</ListGroupItem>
      <ListGroupItem>Featured: {product.featured ? "Yes" : "No"}</ListGroupItem>
      <ListGroupItem>Items In Stock: {product.itemsInStock}</ListGroupItem>
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
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductListItem;
