import { render, screen } from "@testing-library/react";
import { ListItemNotStyled } from "./ListItem";

test("checking renders list item text correctly", () => {
  render(
    <ListItemNotStyled
      btnText="requirement viewpoint"
      text="1"
      status="complete"
      varient="secondary"
    />
  );
  const listElement = screen.getByTestId("text");
  console.log('testing' , listElement)
  expect(listElement.innerHTML).toBe("1");
});


test("renders list item btnText correctly", () => {
  render(
    <ListItemNotStyled
        btnText="requirement viewpoint"
        text="1"
        status="complete"
        varient="secondary"
    />
  );
  const btnClassName = screen.getByRole("button");
  expect(btnClassName.innerHTML).toBe("requirement viewpoint");
});

