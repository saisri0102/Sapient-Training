import { render, screen } from "@testing-library/react";
import NavbarLeftItems from "./NavbarLeft";

test("renders logo text correctly", () => {
  render(
    <NavbarLeftItems
      content="logo"
      size="sm"
    />
  );
  const textElement = screen.getByText(/logo/i);
  expect(textElement.innerHTML).toBe("logo");
});

test("renders button function correctly", () => {
    render(
      <NavbarLeftItems
        onClickEventArrow={() => console.log("Test Arrow")}
        sizeButton="small"
        text="<"
        size="sm"
        themeProfile={{
          varient: "small-radius",
        }}
      />
    );
    const buttonElement = screen.getByText(/</i);
    fireEvent.click(buttonElement);
    expect(console._buffer[0].message).toBe("Test Arrow");
  });