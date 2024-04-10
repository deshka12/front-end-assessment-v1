//file is left under store but in bigger application where there is separation with features will be moved there
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../gateways/ProductApi";

const initialState = {
  data: [],
  product: [],
  status: null,
  error: null,
};

//assume its real api call
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => await productApi.getProducts()
);

//assume its real api call
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    return await productApi.deleteProduct(id);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.data = [];
        state.error = action.error;
      })
      //delete
      .addCase(deleteProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const id = action.meta.arg;
        if (id) {
          state.status = "succeeded";
          state.data = state.data.filter((product) => product.id !== id);
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.data = [];
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
