import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomInput from "./CustomInput";

describe("CustomInput", () => {
  it("should render CustomInput with text field", () => {
    render(
      <CustomInput
        name="testInput"
        label="Test Input"
        type="text"
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Test Input")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render CustomInput with checkbox option", () => {
    render(
      <CustomInput
        name="testCheckbox"
        label="Test Checkbox"
        type="checkbox"
        checked={true}
        onChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Test Checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should render CustomInput with select options", () => {
    render(
      <CustomInput
        name="testSelect"
        label="Test Select"
        type="select"
        value=""
        options={["Option 1", "Option 2", "Option 3"]}
        onChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Test Select")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("should render error message when invalid", () => {
    render(
      <CustomInput
        name="testInput"
        label="Test Input"
        type="text"
        value=""
        invalid={true}
        errorMessage="Invalid input"
        onChange={() => {}}
      />
    );

    expect(screen.getByText("Invalid input")).toBeInTheDocument();
  });
});
