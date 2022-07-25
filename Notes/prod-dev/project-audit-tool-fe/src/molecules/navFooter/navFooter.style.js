import { css } from "styled-components";

export const NavFooterStyle = css`
  background-color: ${(props) => {
    try {
      return props.theme.colors.darkPurpleColor;
    } catch {
      return null;
    }
  }};

  display: flex;
  justify-content: space-between;
  align-content: center;

  a {
    font-weight: 400;
    font-size: 1.2vw;
  }
  a:hover {
    color: ${(props) => {
      try {
        return props.theme.colors.whiteColor;
      } catch {
        return null;
      }
    }};
  }
`;
