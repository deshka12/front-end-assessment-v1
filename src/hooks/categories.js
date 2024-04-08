import { useSelector } from "react-redux";

export const useCategories = () => useSelector((state) => state.categories);
