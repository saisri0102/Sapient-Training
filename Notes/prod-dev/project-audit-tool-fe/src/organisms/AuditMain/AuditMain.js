import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { AuditMainStyle } from "./AuditMain.style";

import AuditForm from "../../molecules/UniversalForm/AuditForm";

const AuditMain = ({ text, subtext, body, subtextcss, card, className }) => {
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
          label: "Complete",
          status: true,
        },
        {
          label: "Incomplete",
          status: false,
        },
        {
          label: "Closed",
          status: false,
        },
        {
          label: "Revisit",
          status: false,
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
  return (
    <div className={`${className}`}>
      <h1>{text}</h1>
      <div className={body}>
        {subtext ? <div className={subtextcss}>{subtext}</div> : null}
        <div className={card}>
          <AuditForm auditProps={auditProps} />
        </div>
      </div>
    </div>
  );
};

AuditMain.propTypes = {
  text: PropTypes.string,
  sizeMain: PropTypes.string,
  sizeSubtext: PropTypes.string,
  status: PropTypes.bool,
  body: PropTypes.string,
  subtextcss: PropTypes.string,
  card: PropTypes.string,
  answeredno: PropTypes.string,
  questionsno: PropTypes.string,
  subtext: PropTypes.string,
  subsize: PropTypes.string,
};

AuditMain.defaultProps = {
  text: "",
  sizeMain: "3.5vw",
  status: "false",
  body: "body",
  subtextcss: "subtextcss",
  card: "card",
  subtext: "Subtext",
  subsize: "1.5vw",
  answeredno: "",
  questionsno: "",
};

export default withStyles(AuditMain, AuditMainStyle);

export { AuditMain as AuditMainNotStyled };
