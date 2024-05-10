import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Converter from "../src/components/Converter";

test("renders Converter component", () => {
  render(<Converter />);

  // Check if the component renders without crashing
  const converterElement = screen.getByTestId("converter-1");
  expect(converterElement).toBeTruthy();
});

test("displays default values correctly", () => {
  render(<Converter />);
  expect(screen.getByText("Bitcoin")).toBeInTheDocument();
  expect(screen.getByText("Ether")).toBeInTheDocument();
  expect(
    screen.getByTestId("converter-1").querySelector('input[type="text"]')
  ).toBeEmptyDOMElement();
});
