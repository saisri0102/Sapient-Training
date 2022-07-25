import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { SidebarlinkStyle } from "./Sidebarlink.style";

import Anchor from "../../atoms/Anchor/Anchor";
import Icon from "../../atoms/Icon/icon";

const Sidebarlinks = ({
  type,
  size,
  href,
  text,
  target,
  padder,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className={padder}>
        <Icon iconClassName={type} size={size} />
      </div>
      <div className={padder}>
        <Anchor href={href} target={target}>{text}</Anchor>
      </div>
    </div>
  );
};

Sidebarlinks.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  padder:PropTypes.string,
};

Sidebarlinks.defaultProps = {
  type: "faHome",
  size: "sm",
  href: "#",
  text: "",
  target: "_self",
  padder: "padder",
};

export default withStyles(Sidebarlinks, SidebarlinkStyle);

export { Sidebarlinks as SidebarlinksNotStyled };
