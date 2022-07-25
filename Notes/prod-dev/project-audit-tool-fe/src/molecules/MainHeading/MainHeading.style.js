import { css } from "styled-components";

export const MainHeadingStyle = css`

  .padder {
    display: inline;
    border-bottom: none;
    padding: 1% 0% 1% 1%;
  }

  .status {
    font-weight: 600;
    letter-spacing: 0px;
    display: inline;
    border-bottom: none;
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};
    font-size: ${(props) => {
      try {
        return props.sizeSubtext;
      } catch {
        return null;
      }
    }};
    padding: 1% 1% 1% 1%;
  }

  .primaryeditor {
    display: inline;
    color: ${(props) => {
      try {
        return props.theme.colors.darkPurpleColor;
      } catch {
        return null;
      }
    }};
    padding: 0%;
  }
`;
