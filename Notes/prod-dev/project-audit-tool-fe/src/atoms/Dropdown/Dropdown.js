import React from "react";
import PropTypes from "prop-types";
import { DropdownStyle } from "./Dropdown.style";
import withStyles from "../../withstyle";

const Dropdown = (props) => {
  const {
    name,
    varient,
    options,
    onChange,
    className,
    labelname,
    labelclassName,
    defaultValue,
    ...otherProps
  } = props;

  return (
    <span varient={varient} className={`${className}`}>
      <label htmlFor={name} className="dropdown-label">
        {labelname}
      </label>
      <select
        className="dropdown-select"
        onChange={onChange}
        value={defaultValue}
        name={name}
        {...otherProps}
      >
        {options.map((option) => (
          <option value={option.value} selected={option.status}>
            {option.label}
          </option>
        ))}
      </select>
    </span>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  labelname: PropTypes.string,
  labelclassName: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  options: [
    {
      label: "Select a Category",
      value: "Select a Category",
    },
  ],
  onChange: () => console.log("Please enter the onChange info"),

  className: "",
  labelname: "",
  labelclassName: "",
};

export default withStyles(Dropdown, DropdownStyle);
export { Dropdown as DropdownNotStyled };
