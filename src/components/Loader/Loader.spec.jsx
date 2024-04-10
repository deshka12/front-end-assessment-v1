import React from "react";
import "@testing-library/jest-dom";
import { configure, render, screen } from "@testing-library/react";
import Loader from "./Loader";

configure({ testIdAttribute: "data-auto-id" });

describe("Loader", () => {
  it("should render Loader", () => {
    render(<Loader />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
