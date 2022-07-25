import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle"
import { LinkStyle } from "./Anchor.style";
import {Link} from 'react-router-dom';
/*
  LoginLinks - primary
  Nav Footer Links - secondary
  SideNav Links - tertiary 
*/

const Anchor = ({ href, target, varient, className , children, ...props }) => {
  return (
        <Link to={href} target={target} varient={varient} className={`${className}`} {...props}>
          {children} 
        </Link> 
  );
};

Anchor.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  varient: PropTypes.string,
  className: PropTypes.string,
};

Anchor.defaultProps = {
  href: "#",
  text: "",
  target: "_self",
  varient: "",
};

export default withStyles(Anchor, LinkStyle);

export { Anchor as AnchorNotStyled }
