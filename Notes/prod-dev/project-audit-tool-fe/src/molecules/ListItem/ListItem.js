import React from "react";
import withStyles from "../../withstyle";
import { ListItemStyle } from "./ListItem.style";
import Button from "../../atoms/Button/Button";
const ListItem = ({
  className,
  text,
  status,
  btnText,
  children,
  varient = "tertiary",
}) => {
  const [state, setState] = React.useState(false);
  return (
    <div className={`${className}`}>
      <span
        className="checkpoint"
        data-testid="text"
        text={text}
        aria-label={status}
      >
        {text}
      </span>
      <span >
        <Button
          className={state ? "checkpoint-text-active" : "checkpoint-text"}
          btnText={btnText}
          onClick={() => setState(!state)}
          varient={varient}
          aria-controls= {btnText} 
          aria-expanded = {state}
        />
      </span>
        {state && (
          <div className="sub-links" id={btnText}>
            {
              (status!=="notstarted") ? 
                    <ul >
                      {
                        React.Children.map(children, (child) => <li key={child.props.text} >{child}</li>)
                      }
                    </ul>
                  : null
              }
          </div>
        )}
    </div>
  );
};

export default withStyles(ListItem, ListItemStyle);
export { ListItem as ListItemNotStyled };
