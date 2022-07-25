import Input from "../../atoms/inputs/input";
import Icon from "../../atoms/Icon/icon";
import React from "react";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import Button from "../../atoms/Button/Button";
import * as constant from "../../styles";
import withStyles from "../../withstyle";
import { useFormik } from "formik";
import { UniversalFormStyle } from "./universalForm.style";
import { requiredValidate, onSubmit } from "./Formik";
import {useHistory} from 'react-router-dom';
const AuditForm = ({ auditProps, className }) => {
  const history = useHistory();
  const handleClick = () =>{
    history.push('/questionnaries')
  }
  const formik = useFormik({
    initialValues: {
      projectName: "",
      category: "",
      reviewerId: "",
      auditName: "",
    },
    validate: requiredValidate,
    onSubmit: handleClick
  });

  return (
    <div className={`${className}`}>
      <form className="FormAudit" onSubmit={formik.handleSubmit}>
        <div className="FormWrapper">
          <Input
            name={auditProps.auditName.name}
            className=""
            type={auditProps.auditName.text}
            placeholder={auditProps.auditName.placeholder}
            ariaLabel={auditProps.auditName.ariaLabel}
            title={auditProps.auditName.ariaLabel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.auditName}
          ></Input>
          <Icon
            iconClassName={auditProps.auditName.icon.iconClassName}
            size={auditProps.auditName.icon.size}
            style={{ color: `${constant.lightPurpleColor}` }}
          />
        </div>

        <p>
          {formik.errors.auditName &&
            formik.touched.auditName &&
            formik.errors.auditName}
        </p>

        <div className="FormWrapper">
          <Input
            name={auditProps.projectName.name}
            className=""
            type={auditProps.projectName.text}
            ariaLabel={auditProps.projectName.ariaLabel}
            title={auditProps.projectName.ariaLabel}
            placeholder={auditProps.projectName.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectName}
          ></Input>
          <Icon
            iconClassName={auditProps.projectName.icon.iconClassName}
            size={auditProps.projectName.icon.size}
            style={{ color: `${constant.lightPurpleColor}` }}
          />
        </div>
        <p>
          {formik.errors.projectName &&
            formik.touched.projectName &&
            formik.errors.projectName}
        </p>
        <div className="FormWrapper">
          <Dropdown
            className={auditProps.dropDown.className}
            labelclassName=""
            labelname=""
            value={formik.values.category}
            onChange={formik.handleChange}
            name={auditProps.dropDown.name}
            options={auditProps.dropDown.options}
          ></Dropdown>
        </div>

        <div className="FormWrapper">
          <Input
            name={auditProps.reviewerId.name}
            className=""
            ariaLabel={auditProps.reviewerId.ariaLabel}
            title={auditProps.reviewerId.ariaLabel}
            type={auditProps.reviewerId.type}
            placeholder={auditProps.reviewerId.placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.reviewerId}
          ></Input>
        </div>

        <p>
          {formik.errors.reviewerId &&
            formik.touched.reviewerId &&
            formik.errors.reviewerId}
        </p>

        <Button
          disabled={formik.isSubmitting}
          varient={auditProps.button.varient}
          size={auditProps.button.size}
          btnText={auditProps.button.btnText}
        ></Button>
      </form>
    </div>
  );
};

export default withStyles(AuditForm, UniversalFormStyle);

export { AuditForm as AuditFormNotStyled };
