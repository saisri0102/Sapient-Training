import { render, screen } from "@testing-library/react";
import { AuditMainNotStyled } from "./AuditMain";

test("renders h1 tag", () => {
  render(
    <AuditMainNotStyled
      text="GOT AUDIT"
      sizeMain="3.5vw"
      status={false}
      subtext="Start creating an audit to add pace to your business, don't let a messy audit be your fate."
      subsize="2vw"
    />
  );
  const hrefElement = screen.getByText(/GOT AUDIT/i);
  expect(hrefElement.innerHTML).toBe("GOT AUDIT");
});

test("renders subtext", () => {
  render(
    <AuditMainNotStyled
      text="GOT AUDIT"
      sizeMain="3.5vw"
      status={false}
      subtext="Start creating an audit to add pace to your business, don't let a messy audit be your fate."
      subsize="2vw"
    />
  );
  const hrefElement = screen.getByText(/Start creating an audit to add pace to your business, don't let a messy audit be your fate./i);
  expect(hrefElement.innerHTML).toBe("Start creating an audit to add pace to your business, don't let a messy audit be your fate.");
});
