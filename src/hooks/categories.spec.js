import { renderHook } from "@testing-library/react-hooks";
import { useDispatch, useSelector } from "react-redux";
import { useCategories, useGetProductCategories } from "./categories";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("useCategories", () => {
  beforeEach(() => {
    useDispatch.mockReset();
    useSelector.mockReset();
  });

  it("should dispatch getCategories action if status is falsy", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValueOnce(null);

    renderHook(() => useCategories());

    expect(dispatch).toHaveBeenCalled();
  });

  it("should return categories and status from state", () => {
    const mockCategories = ["Category1", "Category2"];
    const mockStatus = "success";

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValueOnce(mockStatus);
    useSelector.mockReturnValueOnce(mockCategories);

    const { result } = renderHook(() => useCategories());

    expect(result.current.categories).toEqual(mockCategories);
    expect(result.current.status).toEqual(mockStatus);
  });
});

describe("useGetProductCategories", () => {
  beforeEach(() => {
    useSelector.mockReset();
  });

  it('should return null when status is not "succeeded"', () => {
    useSelector.mockReturnValueOnce("loading");
    const { result } = renderHook(() =>
      useGetProductCategories({ categories: [1] })
    );

    expect(result.current).toBeNull();
  });

  it("should return null when product has no categories", () => {
    useSelector.mockReturnValueOnce([
      { id: 1, name: "Category1" },
      { id: 2, name: "Category2" },
    ]);
    useSelector.mockReturnValueOnce("succeeded");
    const { result } = renderHook(() => useGetProductCategories({}));

    expect(result.current).toBeNull();
  });

  it("should return an array of category objects for a product with categories", () => {
    useSelector.mockReturnValueOnce("succeeded");
    useSelector.mockReturnValueOnce([
      { id: 1, name: "Category1" },
      { id: 2, name: "Category2" },
    ]);

    const { result } = renderHook(() =>
      useGetProductCategories({ categories: [1] })
    );

    expect(result.current).toEqual([{ id: 1, name: "Category1" }]);
  });
});
