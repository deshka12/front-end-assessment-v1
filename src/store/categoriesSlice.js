//file is left under store but in bigger application where there is separation with features will be moved there
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryApi } from "../gateways/CategoryApi";
const initialState = {
  data: [],
  status: null,
  error: null,
};

//assume its real api call
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
const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
