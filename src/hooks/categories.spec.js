import { renderHook } from "@testing-library/react-hooks";
import { useDispatch, useSelector } from "react-redux";
import { useCategories } from "./categories";

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
