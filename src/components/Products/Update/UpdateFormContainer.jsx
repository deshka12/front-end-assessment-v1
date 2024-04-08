import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";
import { Link } from "react-router-dom";

const UpdateFormContainer = ({ categories, product }) => {
  if (!product) {
    return null;
  }

  return (
    <>
      <Link to="/">Home</Link>
      <ProductForm
        onSave={(data) => {
          return;
        }}
        product={product}
        categories={categories}
      />
    </>
  );
};

UpdateFormContainer.propTypes = {
  product: PropTypes.object,
  categories: PropTypes.array,
  history: PropTypes.object,
};

const mapStateToProps = (state, { productId }) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(UpdateFormContainer);
