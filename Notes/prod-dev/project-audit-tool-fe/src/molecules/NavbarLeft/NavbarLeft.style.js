import { css } from "styled-components";
 
export const NavbarLeftStyle = css`
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
  font-family: inherit;
  padding: 0.5%;
  width: 100%;
  .padder {
    all: inherit;
    padding: 0% 1% 0% 1%;
  .logotext{
    color:white;
  }
  @media screen and (max-width: 600px) {
    .navleftbutton{
      position:relative;
      width:7vw;
      font-size:1.25rem;
      right:6vw;
    }
  }
`;