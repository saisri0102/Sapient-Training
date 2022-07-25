import React from "react";

import Anchor from "../../atoms/Anchor/Anchor";

import withStyles from "../../withstyle";
import { NavFooterStyle } from "./navFooter.style";

const NavFooter = ({ props, className }) => {
  return (
    <div className={`${className}`}>
      {props.map((data, key) => (
        <Anchor
          href={data.href}
          varient={data.varient}
          key={key}
        >{data.text}</Anchor>
      ))}
    </div>
  );
};

export default withStyles(NavFooter, NavFooterStyle);

export { NavFooter as NavFooterNotStyled };
