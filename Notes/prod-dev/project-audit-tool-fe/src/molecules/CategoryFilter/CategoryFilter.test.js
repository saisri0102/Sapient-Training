import React from "react";
import { render, screen } from "@testing-library/react";
import { CategoryFilterNotStyled } from "./categoryFilter";

test("Rendering width", () => {
  render(<CategoryFilterNotStyled width="500px" />);
  const element = screen.getByTestId("filter-category");
  console.log(element);
  expect(element.getAttribute("width")).toBe("500px");
});

test("Rendering button", () => {
  render(<CategoryFilterNotStyled width="500px" />);
  const btnClassName = screen.getByRole("button");
  expect(btnClassName.innerHTML).toBe("Clear");
});
