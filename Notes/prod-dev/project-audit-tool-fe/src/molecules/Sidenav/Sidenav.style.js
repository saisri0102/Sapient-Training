import { css } from "styled-components";

export const SidenavStyle = css`
  background-color: ${props => props.theme.colors.blackColor};
   .nav-heading {
    display: inline;
    padding: 10px;
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};
  }
  .nav-list {
    padding-inline-start: 0px;
  }
  .nav-list li {
    list-style-type: none;
    margin: 0.5rem 0rem;
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};
  }
  .selected{
    color: ${(props) => props.theme.colors.whiteColor} !important;
    background-color: ${props => props.theme.colors.selectedBackground};
  }
`;
