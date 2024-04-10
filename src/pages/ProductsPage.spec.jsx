import React from "react";
import "@testing-library/jest-dom";
import { configure, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductsPage from "./ProductsPage";

configure({ testIdAttribute: "data-auto-id" });

jest.mock("../hooks", () => ({
  useGetProducts: jest.fn().mockReturnValue({
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ],
    status: "success",
    error: null,
  }),
  useDeleteProduct: jest.fn(),
  useGetProductCategories: jest.fn(() => []),
}));

jest.mock("../components/Products/ProductsList", () => ({
  __esModule: true,
  default: () => <div data-auto-id="products-list">{"ProductsList"}</div>,
}));

describe("ProductsPage", () => {
  it("should render page with header and products list", () => {
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Add Product")).toHaveAttribute("href", "/add");
    expect(screen.getByTestId("products-list")).toBeInTheDocument();
  });
});
