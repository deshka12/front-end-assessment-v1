import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../store/productsSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const useGetProducts = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    if (!status) {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  return { products, status };
};

export const useGetProductById = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    const productData = products.find(
      (product) => product.id === parseInt(productId)
    );
    if (productData) {
      setProduct(productData);
    }
  }, [productId, products]);

  return product;
};

export const useDeleteProduct = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(deleteProduct(id));
};
