import React from "react";
import PropTypes from "prop-types";
import { NavbarLeftStyle } from "./NavbarLeft.style";
import Button from "../../atoms/Button/Button";
import withStyles from  "../../withstyle"
import Logo from "../../atoms/Logo/Logo"
 
const NavbarLeftItems = ({
  onClickeventArrow,
  changeArrow,
  arrow,
  sizeButton,
  type,
  btnText,
  size,
  className,
  content,
  src,
  alt,
  varient,
  style,
  ...dataprops
}) => {
  console.log(typeof onClickeventArrow);
  console.log(btnText.btnText);
  return (
    <div className={`${className}`}>
      <span className="logotext">
      <Logo dataprops = {dataprops}
      src="logo.png"
      alt= "Header Logo of the Project Audit Tool"
      varient= "primary"
      style={{padding: "0",height: "60%", width:"60%"}}
      className="logo"
      />
      </span>
      <span className="padder">
        <Button dataprops = {dataprops}
          onClick= {onClickeventArrow}
          varient="tertiary"
          type="Login"
          size={sizeButton}
          btnText={btnText.btnText}
          aria-label={btnText}
          className="navleftbutton"
        />
      </span>
    </div>
  );
};
 
NavbarLeftItems.propTypes = {
  onClickeventArrow: PropTypes.func,
  sizeButton: PropTypes.string,
  btnText: PropTypes.string,
  size: PropTypes.string,
  varient: PropTypes.string,
};
 
NavbarLeftItems.defaultProps = {
  content: "logo",
  sizeButton: "small",
  btnText: "<",
  size: "sm",
  src: "logo.png",
  alt: "Header Logo of the Project Audit Tool"
};
 
export default withStyles(NavbarLeftItems, NavbarLeftStyle);
 
export { NavbarLeftItems as NavbarLeftItemsNotStyled }
