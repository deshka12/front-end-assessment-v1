import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("should render Header", () => {
    render(
      <MemoryRouter>
        <Header
          name="Example Header"
          pathName="/example"
          navigateTo="Example Link"
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Example Header")).toBeInTheDocument();
    expect(screen.getByText("Example Link")).toHaveAttribute(
      "href",
      "/example"
    );
  });
});
