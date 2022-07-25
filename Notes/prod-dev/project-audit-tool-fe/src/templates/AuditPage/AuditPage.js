import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { AuditPageStyle } from "./AuditPage.style";

import AuditMain from "../../organisms/AuditMain/AuditMain";

const AuditPage = ({
  text,
  sizeMain,
  subtext,
  subsize,
  mainpage,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className={mainpage}>
        <AuditMain
          text={text}
          sizeMain={sizeMain}
          subtext={subtext}
          subsize={subsize}
        />
      </div>
    </div>
  );
};

AuditPage.propTypes = {
  text: PropTypes.string,
  sizeMain: PropTypes.string,
  subsize: PropTypes.string,
  subtext: PropTypes.string,
  mainbody: PropTypes.string,
  mainpage: PropTypes.string,
};

AuditPage.defaultProps = {
  text: "START NEW AUDIT",
  sizeMain: "3.5vw",
  subtext:
    "Start creating an audit to add pace to your business, don't let a messy audit be your fate.",
  subsize: "2vw",
  mainnav: "mainnav",
  mainpage: "mainpage",
};

export default withStyles(AuditPage, AuditPageStyle);

export { AuditPage as AuditPageNotStyled };
