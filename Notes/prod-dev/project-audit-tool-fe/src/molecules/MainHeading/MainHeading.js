import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { MainHeadingStyle } from "./MainHeading.style";

const MainHeading = ({
  status,
  primaryeditor,
  answeredno,
  questionsno,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className={status}>
        Answered <span className={primaryeditor}>{answeredno}</span> out of{" "}
        <span className={primaryeditor}>{questionsno}</span> questions
      </div>
    </div>
  );
};

MainHeading.propTypes = {
  sizeSubtext: PropTypes.string,
  status: PropTypes.string,
  primaryeditor: PropTypes.string,
  answeredno: PropTypes.string,
  questionsno: PropTypes.string,
};

MainHeading.defaultProps = {
  sizeSubtext: "1.5vw",
  status: "status",
  primaryeditor: "primaryeditor",
  answeredno: "",
  questionsno: "",
};

export default withStyles(MainHeading, MainHeadingStyle);

export { MainHeading as MainHeadingNotStyled };
