import { css } from "styled-components";

export const LinkStyle = css`
color: ${(props) => {
  switch (props.varient) {
    case "secondary":
      return props.theme.colors.lightPurpleColor;
    case "primary":
      return props.theme.colors.darkPurpleColor;
    case "tertiary":
      return props.theme.colors.blackColor;
    default:
      return "inherit";
  }
}};
  font-weight: bold;
  text-decoration: none;
&:hover{
  color: inherit
}
&:active{
  color:inherit
}
`;
