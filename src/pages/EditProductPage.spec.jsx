import React from "react";
import "@testing-library/jest-dom";
import { configure, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EditProductPage from "./EditProductPage";
import { useGetProductById } from "../hooks";

configure({ testIdAttribute: "data-auto-id" });

jest.mock("../hooks", () => ({
  useGetProductById: jest.fn(),
  useCategoriesName: jest.fn(),
  usePreselectedCategories: jest.fn(),
}));

describe("EditProductPage", () => {
  it("should render page with header and product form with prefilled product data", () => {
    const product = {
      id: 1,
      name: "Test Product",
      brand: "Test Brand",
      rating: 4,
      itemsInStock: 10,
      receiptDate: "2023-01-01",
      expirationDate: "2023-12-31",
      featured: false,
    };

    useGetProductById.mockReturnValue(product);

    render(
      <MemoryRouter>
        <EditProductPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Edit Product")).toBeInTheDocument();
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("product-form")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Product")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Brand")).toBeInTheDocument();
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
    expect(screen.getByDisplayValue("10")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2023-01-01")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2023-12-31")).toBeInTheDocument();
    expect(screen.getByLabelText("Featured")).not.toBeChecked();
  });

  it("should not render when product is not found", () => {
    useGetProductById.mockReturnValue([]);

    const { container } = render(
      <MemoryRouter>
        <EditProductPage />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeNull();
  });
});
