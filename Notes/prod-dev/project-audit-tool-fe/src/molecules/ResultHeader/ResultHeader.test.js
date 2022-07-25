import React from "react";
import { render, screen } from "@testing-library/react";
import { ResultHeaderNotStyled } from "./ResultHeader";

test("should return results when rendered", () => {
  render(<ResultHeaderNotStyled />);

  const card = screen.getByTestId("rc2");
  expect(card.innerHTML).toBe("Results");
});
