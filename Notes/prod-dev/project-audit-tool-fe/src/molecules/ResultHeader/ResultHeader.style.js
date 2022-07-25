import { css } from "styled-components";

export const ResultHeaderStyle = css`
  .result-parent {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }
  h2 {
    font-size: 1.37em;
    display: inline;
    font-weight: 600;
    margin-right: 0.4em;
  } 
  .grey-font {
    color: #777777;
  }
  
  @media all and (max-width: 750px) {
    
      font-size: 10px;
    
  }
`;
