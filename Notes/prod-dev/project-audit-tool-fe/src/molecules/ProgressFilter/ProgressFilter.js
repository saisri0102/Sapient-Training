import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { ProgressFilterStyle } from "./ProgressFilter.style";
import Button from "../../atoms/Button/Button";

import Slider from "../../atoms/Slider/slider-input";

const ProgressFilter = ({
  className,
  onClick,
  width,
  onChange,
  step,
  buttonVarient,
  heading,
  btnText,
  defaultValue,
  title
}) => {


  return (
    <div className={`${className}`} width={width} data-testid="filter-progress">
      <div className="d-flex">
        <span className="status">{heading}(<strong>{title}</strong>)</span>
        <Button
          varient={buttonVarient}
          size="small"
          btnText={btnText}
          onClick={onClick} 
          style={{ padding: "0", width: "2rem" }}
        />
      </div>
      <Slider
        className="slider"
        min={0}
        max={100}
        step={step}
        title={title}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

ProgressFilter.defaultProps = {
  onClick: () => {},
  width: "",
  onChange: () => {},
  step: 1,
  buttonVarient: "",
  heading: "",
  btnText: "",
  defaultValue: 50
};

ProgressFilter.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  onChange: PropTypes.func,
  step: PropTypes.number,
  buttonVarient: PropTypes.string,
  btnText: PropTypes.string,
  defaultValue: PropTypes.number
};

export default withStyles(ProgressFilter, ProgressFilterStyle);
export { ProgressFilter as ProgressFilterNotStyled };
