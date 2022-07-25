import React from "react";
import { render, screen } from "@testing-library/react";
import { ProgressFilterNotStyled } from "./progressFilter";

test("Rendering width", () => {
  render(<ProgressFilterNotStyled width="500px" />);
  const element = screen.getByTestId("filter-progress");
  console.log(element);
  expect(element.getAttribute("width")).toBe("500px");
});

test("Rendering button text", () => {
  render(<ProgressFilterNotStyled width="500px" />);
  const btnClassName = screen.getByRole("button");
  expect(btnClassName.innerHTML).toBe("Clear");
});
