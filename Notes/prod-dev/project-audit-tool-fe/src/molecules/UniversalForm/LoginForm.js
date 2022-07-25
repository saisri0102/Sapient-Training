import Input from "../../atoms/inputs/input";
import Anchor from "../../atoms/Anchor/Anchor";
import React from "react";
import Button from "../../atoms/Button/Button";
import withStyles from "../../withstyle";
import { UniversalFormStyle } from "./universalForm.style";
import { requiredValidate, logInCheck } from "./Formik";
import { useFormik } from "formik";
import { useHistory } from 'react-router-dom';
const LoginForm = ({ loginFormProps, className }) => {

  const history = useHistory();
  const handleClick = () => {
    history.push('/audit')
  }

  const logInCheck = async (values, { setSubmitting }) => {
    let valid = false;
    await fetch("http://localhost:5000/users")
      .then((resp) => resp.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          if (
            values.email === data[i].emailAdd &&
            values.password === data[i].pass
          ) {
            valid = true;
            break;
          }
        }
      });

    if (valid) {
      handleClick();
    }
    else alert("invalid credentials");
  }

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: requiredValidate,
    onSubmit: logInCheck,
  });

  return (
    <div className={`${className}`}>
      <form className="OuterFormWrapper" onSubmit={formik.handleSubmit}>
        <h2>{loginFormProps.formHeading.name}</h2>
        <div className="FormWrapper">
          <Input
            name={loginFormProps.loginEmail.name}
            className=""
            ariaLabel={loginFormProps.loginEmail.ariaLabel}
            title={loginFormProps.loginEmail.name}
            type={loginFormProps.loginEmail.type}
            placeholder={loginFormProps.loginEmail.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></Input>
        </div>

        <p aria-label={formik.errors.email && formik.touched.email && formik.errors.email} title={formik.errors.email && formik.touched.email && formik.errors.email}>
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </p>

        <div className="FormWrapper">
          <Input
            name={loginFormProps.loginPassword.name}
            className=""
            ariaLabel={loginFormProps.loginPassword.ariaLabel}
            title={loginFormProps.loginPassword.name}
            type={loginFormProps.loginPassword.type}
            placeholder={loginFormProps.loginPassword.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          ></Input>
        </div>
        <p aria-label={formik.errors.password &&
          formik.touched.password &&
          formik.errors.password} title={formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}>
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
        </p>
        <div className="FormItemWrapper">
          <Button
            disabled={formik.isSubmitting}
            varient={loginFormProps.loginButton.varient}
            size={loginFormProps.loginButton.size}
            btnText={loginFormProps.loginButton.btnText}
          ></Button>
          <Anchor href={loginFormProps.loginForgotPassword.href} varient={loginFormProps.loginForgotPassword.varient} >{loginFormProps.loginForgotPassword.text}</Anchor>
        </div>
        <div>
          <span className="font2">{loginFormProps.signupText.name}</span>
          <Anchor
            href={loginFormProps.signupAnchor.href}
            varient={loginFormProps.signupAnchor.varient}
          >
            {loginFormProps.signupAnchor.text}
          </Anchor>
        </div>
      </form>
    </div>
  );
};

export default withStyles(LoginForm, UniversalFormStyle);

export { LoginForm as LoginFormNotStyled };
