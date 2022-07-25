import { render, screen } from "@testing-library/react";
import NavFooterNotStyled from "./navFooter";

test("About us link is present", () => {
  render(<NavFooterNotStyled />);
  const hrefElement = screen.getByText(/About us/i);
  expect(hrefElement.href).toBe("http://localhost/about");
});
test("Help link is present", () => {
  render(<NavFooterNotStyled />);
  const hrefElement = screen.getByText(/Help Center/i);
  expect(hrefElement.href).toBe("http://localhost/help");
});
test("Contact us link is present", () => {
  render(<NavFooterNotStyled />);
  const hrefElement = screen.getByText(/Contact us/i);
  expect(hrefElement.href).toBe("http://localhost/contact");
});
test("Terms link is present", () => {
  render(<NavFooterNotStyled />);
  const hrefElement = screen.getByText(/Terms/i);
  expect(hrefElement.href).toBe("http://localhost/terms");
});
test("Privacy Policy link is present", () => {
  render(<NavFooterNotStyled />);
  const hrefElement = screen.getByText(/Privacy Policy/i);
  expect(hrefElement.href).toBe("http://localhost/policy");
});
test("Cookies link is present", () => {
  render(<NavFooterNotStyled />);
  const hrefElement = screen.getByText(/Cookies/i);
  expect(hrefElement.href).toBe("http://localhost/cookies");
});
