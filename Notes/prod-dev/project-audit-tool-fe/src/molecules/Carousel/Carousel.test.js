import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { CarouselNotStyled } from "./Carousel";

afterEach(cleanup);

test("Rendering width", () => {
  render(
    <CarouselNotStyled
      width="500px"
      slides={[
        {
          src: "",
          alt: "Pass an image url to display",
          heading: "Don't let a messy audit be your fate",
        },
        {
          src: "",
          alt: "Pass an image url to display",
          heading: "Don't let a messy audit be your fate",
        },
      ]}
      interval={2000}
      showArrows={false}
      size=""
    />
  );
  const element = screen.getByTestId("carousel");
  expect(element.getAttribute("width")).toBe("500px");
});

test("Rendering Image", () => {
  render(
    <CarouselNotStyled
      width="500px"
      slides={[
        {
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThuHBbIfxYL_GD8mOtbUb4RRBSUHycuLOMUw&usqp=CAU",
          alt: "Pass an image url to display",
        },
        {
          src: "",
          alt: "temp txt",
        },
      ]}
      interval={2000}
      showArrows={false}
      size=""
    />
  );
  const element = screen.getAllByTestId("image1");
  expect(element[1].getAttribute("alt")).toBe("Pass an image url to display");
});
