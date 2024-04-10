import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("Error", () => {
  it("should render Error", () => {
    render(<Error />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
