import React from "react";
import { storiesOf } from "@storybook/react";
import AuditForm from "./AuditForm";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

var auditProps = {
  auditName: {
    name: "auditName",
    type: "text",
    placeholder: "Enter an audit name *",
    ariaLabel: "audit Name",
    icon: {
      iconClassName: "far faUser",
      size: "sm",
    },
  },
  projectName: {
    name: "projectName",
    type: "text",
    placeholder: "Enter the project name *",
    ariaLabel: "Project Name",
    icon: {
      iconClassName: "far faEnvelopeOpen",
      size: "sm",
    },
  },
  dropDown: {
    className: "category-form",
    name: "category",
    options: [
      {
        label: "Select a category",
        value: "",
      },
      {
        label: "A",
        value: "A",
      },
      {
        label: "B",
        value: "B",
      },
      {
        label: "C",
        value: "C",
      },
    ],
  },
  reviewerId: {
    name: "reviewerId",
    type: "text",
    placeholder: "Enter reviewer id *",
    ariaLabel: "Reviewer Id",
  },
  button: {
    varient: "primary",
    size: "small",
    btnText: "START NEW AUDIT",
  },
};

var loginFormProps = {
  formHeading: {
    name: "Login to your account",
  },
  loginEmail: {
    name: "email",
    type: "email",
    placeholder: "Enter your email address*",
    ariaLabel: "Email",
  },
  loginPassword: {
    name: "password",
    type: "password",
    placeholder: "Enter your password*",
    ariaLabel: "Password",
  },
  loginButton: {
    varient: "primary",
    size: "small",
    btnText: "LOGIN",
  },
  loginForgotPassword:{
    href:"#",
    text:"Forgot Password?",
    varient:"primary",
  },
  signupText: {
    name: "Don't have an account? ",
  },
  signupAnchor: {
    text: "Sign Up",
    href: "#",
    varient: "primary",
  },
};

var signupFormProps = {
  formHeading: {
    name: "Sign up for an account",
  },
  signupUsername: {
    name: "userName",
    type: "text",
    placeholder: "Enter your Username*",
    ariaLabel: "Username",
    icon: {
      iconClassName: "far faUser",
      size: "sm",
    },
  },
  signupEmail: {
    name: "emailAdd",
    type: "email",
    placeholder: "Enter your email address*",
    ariaLabel: "Email",
    icon: {
      iconClassName: "far faEnvelopeOpen",
      size: "sm",
    },
  },
  signupPassword: {
    name: "pass",
    type: "password",
    placeholder: "Enter your password*",
    ariaLabel: "Password",
    icon: {
      iconClassName: "fas faCamera",
      size: "sm",
    },
  },
  signupConfirmPassword: {
    name: "cnfPass",
    type: "password",
    placeholder: "Enter your password again*",
    ariaLabel: "Confirm Password",
    icon: {
      iconClassName: "fas faCamera",
      size: "sm",
    },
  },
  signupTerms: {
    label: "By signing up you agree",
    text: "Terms and Conditions",
    href: "#",
  },
  signupButton: {
    varient: "primary",
    btnText: "SIGN UP",
  },
  loginAnchor: {
    text: "I already have an account",
    href: "#",
    varient: "primary",
  },
};
storiesOf("Universal form", module)
  .add("Audit", () => <AuditForm auditProps={auditProps} />)
  .add("Login", () => <LoginForm loginFormProps={loginFormProps} />)
  .add("SignUp", () => <SignUpForm signupFormProps={signupFormProps} />);
