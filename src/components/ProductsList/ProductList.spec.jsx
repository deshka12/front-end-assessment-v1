import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { configure, render, screen } from "@testing-library/react";
import { useGetProducts } from "../../hooks";
import ProductList from "./ProductsList";

configure({ testIdAttribute: "data-auto-id" });

jest.mock("../../hooks", () => ({
  useGetProducts: jest.fn(),
}));

jest.mock("./Product/Product", () => ({
  __esModule: true,
  default: () => <div data-auto-id="product">{"ProductItem"}</div>,
}));

describe("ProductList", () => {
  it("should render Loader when is loading", () => {
    useGetProducts.mockReturnValue({
      products: [],
      status: "loading",
      error: null,
    });

    render(<ProductList />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render Error when error occurs", () => {
    useGetProducts.mockReturnValue({
      products: [],
      status: "error",
      error: "Failed to fetch products",
    });

    render(<ProductList />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("should render products when loaded successfully", () => {
    useGetProducts.mockReturnValue({
      products: [{ name: "product", id: "1" }],
      status: "succeeded",
      error: null,
    });

    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    expect(screen.getByTestId("product")).toBeInTheDocument();
  });
});
