import Input from "../../atoms/inputs/input";
import Icon from "../../atoms/Icon/icon";
import React from "react";
import Button from "../../atoms/Button/Button";
import * as constant from "../../styles";
import Anchor from "../../atoms/Anchor/Anchor";
import withStyles from "../../withstyle";
import { UniversalFormStyle } from "./universalForm.style";
import TermsCheckBox from "../TermsCheckBox/TermsCheckBox";
import { useFormik } from "formik";
import { signupValidate, addUser } from "./Formik";
import { useHistory } from 'react-router-dom';
const SignUpForm = ({ signupFormProps, className }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/login')
  }
  const signupValidate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length < 3) {
      errors.userName = "Username too short";
    }
    if (!values.emailAdd) {
      errors.emailAdd = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAdd)
    ) {
      errors.emailAdd = "Invalid email address";
    }

    if (!values.pass) {
      errors.pass = "Required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
        values.pass
      )
    ) {
      errors.pass = "Invalid Format";
    }
    if (!values.cnfPass) {
      errors.cnfPass = "Required";
    } else if (values.cnfPass !== values.pass) {
      errors.cnfPass = "Confirm password doesn't match";
    }
    if (Object.keys(errors).length === 0) {
      console.log('hello');
      setTimeout(() => handleClick(), 5000)
    }
    return errors;
  };


  const formik = useFormik({
    initialValues: {
      userName: "",
      emailAdd: "",
      pass: "",
      cnfPass: "",
    },
    validate: signupValidate,
    onSubmit: addUser,
  });


  return (
    <div className={`${className}`}>
      <form className="OuterFormWrapper" onSubmit={formik.handleSubmit}>
        <h2>{signupFormProps.formHeading.name}</h2>
        <div className="FormWrapper">
          <Input
            name={signupFormProps.signupUsername.name}
            className=""
            ariaLabel={signupFormProps.signupUsername.ariaLabel}
            title={signupFormProps.signupUsername.name}
            type={signupFormProps.signupUsername.type}
            placeholder={signupFormProps.signupUsername.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          ></Input>
          <Icon
            iconClassName={signupFormProps.signupUsername.icon.iconClassName}
            size={signupFormProps.signupUsername.icon.size}
            style={{ color: `${constant.lightPurpleColor}` }}
          />
        </div>
        <p aria-label={formik.errors.userName &&
          formik.touched.userName &&
          formik.errors.userName} title={formik.errors.userName &&
            formik.touched.userName &&
            formik.errors.userName}>
          {formik.errors.userName &&
            formik.touched.userName &&
            formik.errors.userName}
        </p>
        <div className="FormWrapper">
          <Input
            name={signupFormProps.signupEmail.name}
            className=""
            ariaLabel={signupFormProps.signupEmail.ariaLabel}
            title={signupFormProps.signupEmail.name}
            type={signupFormProps.signupEmail.type}
            placeholder={signupFormProps.signupEmail.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailAdd}
          ></Input>
          <Icon
            iconClassName={signupFormProps.signupEmail.icon.iconClassName}
            size={signupFormProps.signupEmail.icon.size}
            style={{ color: `${constant.lightPurpleColor}` }}
          />
        </div>
        <p aria-label={formik.errors.emailAdd &&
          formik.touched.emailAdd &&
          formik.errors.emailAdd} title={formik.errors.emailAdd &&
            formik.touched.emailAdd &&
            formik.errors.emailAdd}>
          {formik.errors.emailAdd &&
            formik.touched.emailAdd &&
            formik.errors.emailAdd}
        </p>
        <div className="FormWrapper">
          <Input
            name={signupFormProps.signupPassword.name}
            className=""
            type={signupFormProps.signupPassword.type}
            ariaLabel={signupFormProps.signupPassword.ariaLabel}
            title={signupFormProps.signupPassword.name}
            placeholder={signupFormProps.signupPassword.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pass}
          ></Input>
          <Icon
            iconClassName={signupFormProps.signupPassword.icon.iconClassName}
            size={signupFormProps.signupPassword.icon.size}
            style={{ color: `${constant.lightPurpleColor}` }}
          />
        </div>
        <p aria-label={formik.errors.pass && formik.touched.pass && formik.errors.pass} title={formik.errors.pass && formik.touched.pass && formik.errors.pass}>{formik.errors.pass && formik.touched.pass && formik.errors.pass}</p>
        <div className="FormWrapper">
          <Input
            name={signupFormProps.signupConfirmPassword.name}
            className=""
            type={signupFormProps.signupConfirmPassword.type}
            ariaLabel={signupFormProps.signupConfirmPassword.ariaLabel}
            title={signupFormProps.signupConfirmPassword.name}
            placeholder={signupFormProps.signupConfirmPassword.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cnfPass}
          ></Input>
          <Icon
            iconClassName={
              signupFormProps.signupConfirmPassword.icon.iconClassName
            }
            size={signupFormProps.signupConfirmPassword.icon.size}
            style={{ color: `${constant.lightPurpleColor}` }}
          />
        </div>
        <p aria-label={formik.errors.cnfPass &&
          formik.touched.cnfPass &&
          formik.errors.cnfPass} title={formik.errors.cnfPass &&
            formik.touched.cnfPass &&
            formik.errors.cnfPass}>
          {formik.errors.cnfPass &&
            formik.touched.cnfPass &&
            formik.errors.cnfPass}
        </p>
        <div className="FormItemWrapper">
          <TermsCheckBox
            checkBoxLabel={signupFormProps.signupTerms.label}
            text={signupFormProps.signupTerms.text}
            href={signupFormProps.signupTerms.href}
            required={true}
          />
        </div>
        <div className="ButtonWrapper">
          <Button
            disabled={formik.isSubmitting}
            varient={signupFormProps.signupButton.varient}
            btnText={signupFormProps.signupButton.btnText}
            onSubmit={() => {
              console.log("hello");
            }}
          ></Button>
          <Anchor
            href={signupFormProps.loginAnchor.href}
            varient={signupFormProps.loginAnchor.varient}
          >
            {signupFormProps.loginAnchor.text}
          </Anchor>
        </div>
      </form>
    </div>
  );
};

export default withStyles(SignUpForm, UniversalFormStyle);

export { SignUpForm as AuditFormNotStyled };
