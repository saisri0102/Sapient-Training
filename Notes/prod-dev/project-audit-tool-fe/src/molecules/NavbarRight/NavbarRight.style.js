import { css } from "styled-components";

export const NavbarRightStyle = css`
  display: flex;
  flex-direction: row;
  background-color:${(props) => {
    try {
      return props.theme.colors.darkPurpleColor;
    } catch {
      return null;
    }
  }};
  color: ${(props) => {
    try {
      return props.theme.colors.whiteColor;
    } catch {
      return null;
    }
  }};
  flex-wrap: nowrap;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  justify-content: flex-end;
  font-family: inherit;
  padding: 0.5%;
  width: 100%;
  .padder {
    padding: 0% 1% 0% 1%;
  }
  @media screen and (max-width: 600px) {
    .startauditbutton, .icon  {
      visibility: hidden;
      clear: both;
      display: none;
    }
  }

`;
