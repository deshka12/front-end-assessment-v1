import categoriesReducer, { getCategories } from "./categoriesSlice";

describe("categories reducer async actions", () => {
  const initialState = {
    data: [],
    status: null,
    error: null,
  };

  it('should set status to "loading', async () => {
    const action = { type: getCategories.pending.type };
    const state = categoriesReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      status: "loading",
    });
  });

  it('should set status to "succeeded"', async () => {
    const action = {
      type: getCategories.fulfilled.type,
      payload: [
        {
          id: 1,
          name: "TV & Home Cinema",
        },
      ],
    };
    const state = categoriesReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      status: "succeeded",
      data: [
        {
          id: 1,
          name: "TV & Home Cinema",
        },
      ],
    });
  });

  it('should set status to "failed"', async () => {
    const action = {
      type: getCategories.rejected.type,
      error: "loading error",
    };
    const state = categoriesReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      error: "loading error",
      status: "failed",
    });
  });
});
