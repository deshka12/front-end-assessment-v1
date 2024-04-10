import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductListItem from "./ProductListItem";

jest.mock("../../../hooks", () => ({
  useGetProductCategories: jest.fn(() => [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
  ]),
}));

describe("ProductListItem", () => {
  it("should render ProductListItem", () => {
    const product = {
      brand: "Test Brand",
      rating: 4,
      featured: true,
      itemsInStock: 10,
      receiptDate: "2023-01-01",
      expirationDate: "2023-12-31",
      createdAt: "2023-01-01T12:00:00Z",
    };

    const categories = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];

    render(<ProductListItem product={product} />);

    expect(screen.getByText(/Brand: Test Brand/)).toBeInTheDocument();
    expect(screen.getByText(/Rating: 4/)).toBeInTheDocument();
    expect(screen.getByText(/Featured: Yes/)).toBeInTheDocument();
    expect(screen.getByText(/Items In Stock: 10/)).toBeInTheDocument();
    expect(screen.getByText(/Receipt Date: 01\/01\/2023/)).toBeInTheDocument();
    expect(
      screen.getByText(/Expiration Date: 12\/31\/2023/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Created At: 01\/01\/2023 02:00 pm/)
    ).toBeInTheDocument();
    categories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });
});
