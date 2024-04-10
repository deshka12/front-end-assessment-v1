import { renderHook } from "@testing-library/react-hooks";
import { useDispatch, useSelector } from "react-redux";
import { useGetProducts } from "./products";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

describe("useGetProducts", () => {
  beforeEach(() => {
    useDispatch.mockReset();
    useSelector.mockReset();
  });

  it("should dispatch getProducts action if status is falsy", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValueOnce(null);

    renderHook(() => useGetProducts());

    expect(dispatch).toHaveBeenCalled();
  });

  it("should return products, status, and error from state", () => {
    const mockProducts = [{ id: 1, name: "Product 1" }];
    const mockStatus = "success";
    const mockError = null;

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValueOnce(mockStatus);
    useSelector.mockReturnValueOnce(mockProducts);
    useSelector.mockReturnValueOnce(mockError);

    const { result } = renderHook(() => useGetProducts());

    expect(result.current.products).toEqual(mockProducts);
    expect(result.current.status).toEqual(mockStatus);
    expect(result.current.error).toEqual(mockError);
  });
});
