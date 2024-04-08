import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsSlice";

export const useGetProducts = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (status === undefined) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const isUninitialized = status === undefined;
  const isLoading = status === "loading" || status === undefined;
  const isError = status === "failed";
  const isSuccess = status === "succeeded";

  return { products, isUninitialized, isLoading, isError, isSuccess };
};
