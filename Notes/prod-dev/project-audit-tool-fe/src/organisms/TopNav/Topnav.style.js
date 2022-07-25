import { css } from "styled-components";

export const TopnavStyle = css`
  background-color: ${props => props.theme.colors.darkPurpleColor};
  display: flex;
  .Searchbar{
    padding:0% 2% 0% 0%;
    width:25vw;
  }
  @media screen and (max-width: 600px) {
    .Searchbar{
      position:relative;
      width:36vw;
      right:2vw;
    }
  }
`;

