import React from "react";
import { render, screen, configure } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Product from "./Product";

configure({ testIdAttribute: "data-auto-id" });

jest.mock("../../../hooks", () => ({
  useDeleteProduct: jest.fn(() => jest.fn()),
  useGetProductCategories: () => [{ name: "category", id: "" }],
}));

jest.mock("./ProductListItem", () => ({
  __esModule: true,
  default: () => (
    <div data-auto-id="product-list-item">{"ProductListItem"}</div>
  ),
}));

const product = {
  id: 1,
  name: "Test Product",
  brand: "This is a test product",
  itemsInStock: 10,
};

describe("Product", () => {
  it("should render Product", () => {
    render(
      <MemoryRouter>
        <Product product={product} />
      </MemoryRouter>
    );

    const link = screen.getByText("Test Product");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/edit/1");
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("product-list-item")).toBeInTheDocument();
  });
});
