import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { CategoryFilterStyle } from "./CategoryFilter.style";
import DropDown from "../../atoms/Dropdown/Dropdown";
import Button from "../../atoms/Button/Button";

const CategoryFilter = ({
  className,
  width,
  onClick,
  onChange,
  categoryTypes,
  buttonVarient,
  heading,
  btnText,
}) => {
  return (
    <div className={`${className}`} data-testid="filter-category" width={width}>
      <div className="d-flex">
        <span className="status">{heading}</span>
        <Button
          varient={buttonVarient}
          size="small"
          btnText={btnText}
          onClick={onClick}
          style={{ padding: "0", width: "2rem" }}
        />
      </div>
      <DropDown
        className="category-form"
        onChange={onChange}
        options={categoryTypes}
      />
    </div>
  );
};

CategoryFilter.propTypes = {
  width: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  categoryTypes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  buttonVarient: PropTypes.string,
  btnText: PropTypes.string,
};

CategoryFilter.defaultProps = {
  width: "",
  buttonVarient: "",
  heading: "",
  onClick: () => {},
  onChange: () => {},
  categoryTypes: [],
  btnText: "",
};

export default withStyles(CategoryFilter, CategoryFilterStyle);
export { CategoryFilter as CategoryFilterNotStyled };
