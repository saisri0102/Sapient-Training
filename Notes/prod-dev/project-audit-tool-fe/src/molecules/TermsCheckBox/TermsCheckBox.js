import React from "react";
import PropTypes from "prop-types";
import CheckBox from "../../atoms/Checkbox/CheckBox";
import Anchor from "../../atoms/Anchor/Anchor";
import { Styledbox } from "./TermsCheckBox.style.js";

const TermsCheckBox = ({ checkBoxLabel, href, text, required }) => {
  return (
    <Styledbox>
      <CheckBox
        type="checkbox"
        id="term"
        checkBoxLabel={checkBoxLabel}
        varient="primary"
        required={required}
      />
      <Anchor href={href}  target="_self" varient="primary" >{text}</Anchor>
    </Styledbox>
  );
};

TermsCheckBox.propTypes = {
  checkBoxLabel: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
};
TermsCheckBox.defaultProps = {
  checkBoxLabel: "",
  href: "",
  text: "",
};

export default TermsCheckBox;
