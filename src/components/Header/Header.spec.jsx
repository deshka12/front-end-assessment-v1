import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header", () => {
  it("should renders Header", () => {
    render(
      <Router>
        <Header
          name="Example Header"
          pathName="/example"
          navigateTo="Example Link"
        />
      </Router>
    );

    expect(screen.getByText("Example Header")).toBeInTheDocument();
    expect(screen.getByText("Example Link")).toHaveAttribute(
      "href",
      "/example"
    );
  });

  it("should navigate to clicked link", () => {
    render(
      <Router>
        <Header
          name="Example Header"
          pathName="/example"
          navigateTo="Example Link"
        />
      </Router>
    );

    const link = screen.getByText("Example Link");
    expect(link).toBeInTheDocument();

    userEvent.click(link);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/example");
  });
});
