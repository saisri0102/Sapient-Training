import { render, screen } from "@testing-library/react";

import AuditForm from "./AuditForm";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

test("Form to be defined -Audit", () => {
  const wrapper = render(<AuditForm />);
  expect(wrapper).toBeDefined();
});
test("Form to be defined -login", () => {
  const wrapper = render(<LoginForm />);
  expect(wrapper).toBeDefined();
});
test("Form to be defined -register", () => {
  const wrapper = render(<SignUpForm />);
  expect(wrapper).toBeDefined();
});

test("Placeholder testing of input tag -Audit", () => {
  render(<AuditForm />);
  const element = screen.getByPlaceholderText("Enter reviewer id *");
  expect(element).toBeDefined();
});

test("Input type testing -Audit", () => {
  render(<AuditForm />);
  const element = screen.getByPlaceholderText("Enter reviewer id *");
  expect(element.type).toBe("text");
});
test("Submit Button type testing -Audit", () => {
  render(<AuditForm />);
  const element = screen.getByText("START NEW AUDIT");
  expect(element.type).toBe("submit");
});
