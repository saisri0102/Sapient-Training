import React from "react";
import { render, screen } from "@testing-library/react";
import { StatusFilterNotStyled } from "./StatusFilter";

test("Rendering width", () => {
  render(<StatusFilterNotStyled width="500px" />);
  const element = screen.getByTestId("filter-status");
  expect(element.getAttribute("width")).toBe("500px");
});

test("Rendering button text", () => {
  render(<StatusFilterNotStyled width="500px" btnText="Clear" />);
  const btnClassName = screen.getByRole("button");
  expect(btnClassName.innerHTML).toBe("Clear");
});
