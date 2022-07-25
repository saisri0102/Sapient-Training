import React from "react";
import { render, screen } from "@testing-library/react";
import { ResultNotStyled } from "./Result";

test("should return correct number of Results which got rendered", () => {
  render(<ResultNotStyled />);

  const card = screen.getByTestId("result");
  expect(card.childElementCount).toBe(5);
});

//   test("should return  first Result which got rendered", () => {
//     render(<ResultNotStyled  />);
//     const card = screen.getByTestId("result");
//     console.log(card.firstElementChild.firstElementChild.innerHTML)

//      const firstcard =card.firstElementChild
//      expect(firstcard.getAttribute("heading")).toBe("Bed Bath & Beyond Audit");

//   });
