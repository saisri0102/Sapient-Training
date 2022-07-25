import { render, screen } from "@testing-library/react";
import { MainHeadingNotStyled } from "./MainHeading";

test("renders h1 tag", () => {
  render(
    <MainHeadingNotStyled
      text="GOT AUDIT"
      status={true}
      answeredno="4"
      questionsno="13"
    />
  );
  const hrefElement = screen.getByText(/GOT AUDIT/i);
  expect(hrefElement.innerHTML).toBe("GOT AUDIT");
});

test("renders answeredno", () => {
  render(
    <MainHeadingNotStyled
      text="GOT AUDIT"
      status={true}
      answeredno="4"
      questionsno="13"
    />
  );
  const hrefElement = screen.getByText(/4/i);
  expect(hrefElement.innerHTML).toBe("4");
});

test("renders questionsno", () => {
  render(
    <MainHeadingNotStyled
      text="GOT AUDIT"
      status={true}
      answeredno="4"
      questionsno="13"
    />
  );
  const hrefElement = screen.getByText(/13/i);
  expect(hrefElement.innerHTML).toBe("13");
});
