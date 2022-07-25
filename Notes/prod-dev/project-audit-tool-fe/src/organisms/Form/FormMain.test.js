import { render, screen } from "@testing-library/react";
import { FormMainNotStyled } from "./FormMain";

test("renders login copyright tag", () => {
  render(
    <FormMainNotStyled
      copyrightText="Copyright @ 2019-2020 Publicis Sapient"
      formtype="loginform"
    />
  );
  const hrefElement = screen.getByText(/Copyright @ 2019-2020 Publicis Sapient/i);
  expect(hrefElement.innerHTML).toBe("Copyright @ 2019-2020 Publicis Sapient");
});

test("renders signup copyright tag", () => {
    render(
      <FormMainNotStyled
        copyrightText="Copyright @ 2019-2020 Publicis Sapient"
        formtype="signupform"
      />
    );
    const hrefElement = screen.getByText(/Copyright @ 2019-2020 Publicis Sapient/i);
    expect(hrefElement.innerHTML).toBe("Copyright @ 2019-2020 Publicis Sapient");
  });

  test("renders default copyright tag", () => {
    render(
      <FormMainNotStyled
        copyrightText=""
        formtype=""
      />
    );
    const hrefElement = screen.getByText(/ © copyrights/i);
    expect(hrefElement.innerHTML).toBe(" © copyrights");
  });