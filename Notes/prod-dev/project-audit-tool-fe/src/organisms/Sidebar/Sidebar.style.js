import { css } from "styled-components";

export const SidebarStyle = css`
  background-color: ${props => props.theme.colors.blackColor};
  height:100%;
  padding-top: 3%; 
  .active{
    color: ${(props) => {
      try {
        return props.theme.colors.whiteColor;
      } catch {
        return null;
      }
    }};
    background-color: ${props => props.theme.colors.selectedBackground} !important;
  }
`;

