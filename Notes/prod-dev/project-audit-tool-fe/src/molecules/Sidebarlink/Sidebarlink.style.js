import { css } from "styled-components";

export const SidebarlinkStyle = css`
  
 
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  font-weight: bold;
  padding: 1% 1.5%;
  text-decoration: none;


  &:hover {
    color: ${(props) => {
      try {
        return props.theme.colors.whiteColor;
      } catch {
        return null;
      }
    }};
    background-color: ${(props) => {
      try {
        return props.theme.colors.selectedBackground;
      } catch {
        return null;
      }
    }};
  }

  .padder {
    padding: 0% 0% 0% 1%;
  }
`;
