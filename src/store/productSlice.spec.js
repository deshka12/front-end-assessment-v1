import productsReducer, { getProducts, deleteProduct } from "./productsSlice";

describe("products reducer async actions", () => {
  const initialState = {
    data: [],
    product: [],
    status: null,
    error: null,
  };

  it('should set status to "loading" for getProducts', async () => {
    const action = { type: getProducts.pending.type };
    const state = productsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      status: "loading",
    });
  });

  it('should set status to "succeeded" for getProducts', async () => {
    const action = {
      type: getProducts.fulfilled.type,
      payload: [
        {
          id: 1,
          name: "Product 1",
        },
      ],
    };
    const state = productsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      status: "succeeded",
      data: [
        {
          id: 1,
          name: "Product 1",
        },
      ],
    });
  });

  it('should set status to "failed" for getProducts', async () => {
    const action = {
      type: getProducts.rejected.type,
      error: "loading error",
    };
    const state = productsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      error: "loading error",
      status: "failed",
    });
  });

  it('should set status to "loading" for deleteProduct', async () => {
    const action = { type: deleteProduct.pending.type };
    const state = productsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      status: "loading",
    });
  });

  it('should set status to "succeeded" for deleteProduct', async () => {
    const initialStateWithData = {
      ...initialState,
      data: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
      ],
    };
    const action = {
      type: deleteProduct.fulfilled.type,
      meta: { arg: 1 },
    };
    const state = productsReducer(initialStateWithData, action);

    expect(state).toEqual({
      ...initialState,
      status: "succeeded",
      data: [{ id: 2, name: "Product 2" }],
    });
  });

  it('should set status to "failed" for deleteProduct', async () => {
    const action = {
      type: deleteProduct.rejected.type,
      error: "deletion error",
    };
    const state = productsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      error: "deletion error",
      status: "failed",
    });
  });
});
