import React from "react";
import withStyles from "../../withstyle";
import { SidenavStyle } from "./Sidenav.style";
import { useLocation } from "react-router-dom";


const Sidenav = ({ children, heading, className }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation[1])
  return (
    <nav className={`${className}`}>
      <div className="nav-heading" tabIndex="0">
        <span data-testid="heading">{heading}</span>
      </div>
      <div>
        {
          <ul className="nav-list">
            {
              React.Children.map(children, (child) => {
                const textValue = child.props.text;
              return (
                <li key={child.props.text} className={splitLocation[1] === textValue ? "selected" : "" } >{child}</li>
              )
            }
            )
            }
          </ul>
        }
      </div>
    </nav>
  );
};

export default withStyles(Sidenav, SidenavStyle);
export { Sidenav as SidenavNotStyled };
