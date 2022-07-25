import { render, screen } from "@testing-library/react";
import { SidenavNotStyled } from "./Sidenav";

test("renders heading correctly", () => {
  render(
      <SidenavNotStyled
        heading="More"
      />
  );
  const SidenavHeadingEl = screen.getByTestId("heading");
  expect(SidenavHeadingEl.innerHTML).toBe("More");
});

