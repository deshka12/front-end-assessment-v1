import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryApi } from "../gateways/CategoryApi";
const initialState = {
  data: [],
  status: null,
  error: null,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => await categoryApi.getCategories()
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.data = [];
        state.error = action.error;
      });
  },
});

export default categoriesSlice.reducer;
