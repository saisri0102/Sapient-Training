import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonNotStyled } from "./Button";

test("should return buttonText when rendered", () => {
  render(
    <ButtonNotStyled
      onClick={() => console.log("You clicked on the reply button")}
      btnText="Reply"
      varient="secondary"
    />
  );
  const btnClassName = screen.getByRole("button");
  expect(btnClassName.innerHTML).toBe("Reply");
});

test("Button calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(
    <ButtonNotStyled
      onClick={handleClick}
      btnText="Like"
      varient="primary"
    ></ButtonNotStyled>
  );
  fireEvent.click(screen.getByText(/Like/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
