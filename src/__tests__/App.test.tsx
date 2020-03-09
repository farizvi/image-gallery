import React from "react";
import { render } from "@testing-library/react";
import App from "../app/layout/App";

test("renders navbar title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Images Gallery/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Popular Around You", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Popular Around You/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Featured", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Featured/i);
  expect(linkElement).toBeInTheDocument();
});
