import React from "react";
import "@testing-library/jest-dom";
import { configure, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProductPage from "./AddProductPage";

configure({ testIdAttribute: "data-auto-id" });

jest.mock("../hooks", () => ({
  useCategoriesName: jest.fn(),
  usePreselectedCategories: jest.fn(),
  useGetProductCategories: jest.fn(() => []),
}));

describe("AddProductPage", () => {
  it("should render page with header and product form", () => {
    render(
      <MemoryRouter>
        <AddProductPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Add Product")).toBeInTheDocument();
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("product-form")).toBeInTheDocument();
  });
});
