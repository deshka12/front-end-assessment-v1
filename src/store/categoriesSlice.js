import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../gateways/ProductApi";

const initialState = {
  categories: [],
  error: null,
};

const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => categoryApi.getCategories()
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.categories = [];
        state.error = action.error;
      });
  },
});

export default categoriesSlice.reducer;
