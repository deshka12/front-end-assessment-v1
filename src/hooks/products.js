import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../store/productsSlice";
import { useParams } from "react-router-dom";

export const useGetProducts = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const products = useSelector((state) => state.products.data);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (!status) {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  return { products, status, error };
};

export const useGetProductById = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const { products, status } = useGetProducts();

  useEffect(() => {
    if (status === "succeeded") {
      const productData = products.find(
        (product) => product.id === parseInt(productId)
      );
      productData && setProduct(productData);
    }
  }, [productId, products]);

  return product;
};

export const useDeleteProduct = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(deleteProduct(id));
};
