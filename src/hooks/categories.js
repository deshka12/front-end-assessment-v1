import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categoriesSlice";
import { useEffect } from "react";

export const useCategories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  const categories = useSelector((state) => state.categories.data);

  useEffect(() => {
    if (!status) {
      dispatch(getCategories());
    }
  }, [status, dispatch]);

  return { categories, status };
};
export const useCategoriesName = () => {
  const { categories } = useCategories();
  return categories.map((el) => el.name);
};

export const useGetProductCategories = (product) => {
  const { categories, status } = useCategories();
  if (status === "succeeded") {
    return product.categories.map((categoryId) =>
      categories.find((category) => category.id === categoryId)
    );
  }
  return null;
};
