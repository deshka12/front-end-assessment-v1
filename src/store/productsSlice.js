import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../gateways/ProductApi";

const initialState = {
  products: [],
  status: null,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => await productApi.getProducts()
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.products = [];
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
