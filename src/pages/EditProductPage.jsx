import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductForm } from "../components";

const EditProductPage = ({ categories, product }) => {
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

EditProductPage.propTypes = {
  product: PropTypes.object,
  categories: PropTypes.array,
  history: PropTypes.object,
};

const mapStateToProps = (state, { productId }) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(EditProductPage);
