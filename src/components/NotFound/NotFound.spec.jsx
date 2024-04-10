import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("should render NotFound", () => {
    render(<NotFound />);

    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });
});
