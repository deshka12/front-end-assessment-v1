import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../store/productsSlice";

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
export const useDeleteProduct = () => {
  const dispatch = useDispatch();
  return (id) => dispatch(deleteProduct(id));
};
