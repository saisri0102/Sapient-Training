import React from "react";
import PropTypes from "prop-types";
import { FormMainStyle } from "./FormMain.style";
import withStyles from "../../withstyle";
import LoginForm from "../../molecules/UniversalForm/LoginForm";
import SignUpForm from "../../molecules/UniversalForm/SignUpForm";

const FormMain = ({ copyrightText, className, formtype }) => {
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
    loginForgotPassword: {
      href: "#",
      text: "Forgot Password?",
      varient: "primary",
    },
    signupText: {
      name: "Don't have an account? ",
    },
    signupAnchor: {
      text: "Sign Up",
      href: "/signup",
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
      href: "/login",
      varient: "primary",
    },
  };
  let type;
  switch (formtype) {
    case "loginform":
      type = <LoginForm loginFormProps={loginFormProps} />;
      break;
    case "signupform":
      type = <SignUpForm signupFormProps={signupFormProps} />;
      break;
    default:
      type = <div>Form Not Found</div>;
      break;
  }
  return (
    <div className={`${className}`}>
      <div className="formPosition">{type}</div>
      <span className="copyrightPosition">{copyrightText}</span>
    </div>
  );
};
FormMain.propTypes = {
  copyrightText: PropTypes.string,
  formtype: PropTypes.string,
};

FormMain.defaultProps = {
  copyrightText: "Copyright @ 2019-2020 Publicis Sapient",
  formtype: "Default form",
};

export default withStyles(FormMain, FormMainStyle);

export { FormMain as FormMainNotStyled };
