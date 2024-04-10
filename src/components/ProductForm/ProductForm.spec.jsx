import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductForm from "./ProductForm";

jest.mock("../../hooks", () => ({
  useCategoriesName: jest.fn(),
  usePreselectedCategories: jest.fn(),
}));

describe("ProductForm", () => {
  it("should render form fields with the initial values", () => {
    render(<ProductForm onSave={() => {}} />);

    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Brand")).toHaveValue("");
    expect(screen.getByLabelText("Rating")).toHaveValue("0");
    expect(screen.getByLabelText("Items In Stock")).toHaveValue(0);
    expect(screen.getByLabelText("Expiration date")).toHaveValue("");
    expect(screen.getByLabelText("Receipt date")).toHaveValue("");
    expect(screen.getByLabelText("Featured")).not.toBeChecked();
  });

  it("should update form data on input change", () => {
    render(<ProductForm onSave={() => {}} />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Test Product" },
    });

    expect(screen.getByLabelText("Name")).toHaveValue("Test Product");
  });
});
