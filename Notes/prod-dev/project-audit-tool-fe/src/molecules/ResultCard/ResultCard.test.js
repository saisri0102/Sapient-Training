import React from "react";
import { render, screen } from "@testing-library/react";
import { ResultCardNotStyled } from "./ResultCard";

const image = process.env.PUBLIC_URL + "/resultcard.png";
test("should return result card image when rendered", () => {
  render(
    <ResultCardNotStyled
      heading="Bed Bath & Beyond Audit"
      subHeading="Bed Bath & Beyond"
      status="Incomplete"
      img={image}
      progress="0"
      reviewers={["testmail"]}
    />
  );
  const element = screen.getByTestId("image1");
  expect(element.getAttribute("alt")).toBe("imagecard");
});
test("should return result card heading when rendered", () => {
  render(
    <ResultCardNotStyled
      heading="Bed Bath & Beyond Audit"
      subHeading="Bed Bath & Beyond"
      status="Incomplete"
      progress="0"
      reviewers={["testmail"]}
    />
  );

  const card = screen.getByTestId("rc2");
  expect(card.getAttribute("content")).toBe("Bed Bath & Beyond Audit");
});
