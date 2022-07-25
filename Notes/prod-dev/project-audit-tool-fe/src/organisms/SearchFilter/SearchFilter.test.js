import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchFilterNotStyled } from "./SearchFilter";

test("Rendering width", () => {
  render(<SearchFilterNotStyled width="500px" filterTypes={ [
    {
    label: "Complete",
    status: false,
    },
    {
    label: "Incomplete",
    status: false,
    },
    {
    label: "Closed",
    status: false,
    },
    {
    label: "Revisit",
    status: false,
    },
]} />);
  const element = screen.getByTestId("filter");
  expect(element.getAttribute("width")).toBe("500px");
});
