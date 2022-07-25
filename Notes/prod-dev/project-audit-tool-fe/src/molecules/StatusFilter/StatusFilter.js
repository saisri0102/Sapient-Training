import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { StatusFilterStyle } from "./StatusFilter.style";
import CheckBox from "../../atoms/Checkbox/CheckBox";
import Button from "../../atoms/Button/Button";

const StatusFilter = ({
  className,
  width,
  onClick,
  filters,
  onChange,
  buttonVarient,
  heading,
  btnText,
}) => {
  return (
    <div className={`${className}`} width={width} data-testid="filter-status">
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
      <ul className="list">
        {filters.map((filter, key) => (
          <li key={key}>
            <CheckBox
              type="checkbox"
              checkBoxLabel={filter.label}
              checked={filter.status}
              id={filter.label}
              onChangeFunction={() => onChange(key)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

StatusFilter.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  filters: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      status: PropTypes.bool,
    })
  ),
  onChange: PropTypes.func,
  buttonVarient: PropTypes.string,
  btnText: PropTypes.string,
};

StatusFilter.defaultProps = {
  width: "",
  filters: [],
  onClick: () => {},
  onChange: () => {},
  buttonVarient: "",
  heading: "",
  btnText: "",
};

export default withStyles(StatusFilter, StatusFilterStyle);
export { StatusFilter as StatusFilterNotStyled };
