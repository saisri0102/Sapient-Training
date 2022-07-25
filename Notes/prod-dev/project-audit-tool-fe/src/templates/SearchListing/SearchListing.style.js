import { css } from "styled-components";

export const SearchListingStyle = css`  
    
.mainbody { 
    background-color: #f0f4f7;
    display:flex;
  }
  .mainnav {
    width: 20%;
  }
  
  .filterStyle{
    padding:0.5em 2em;
    width:20%;
    border-right: 1px solid grey;
  } 
  .resultStyle{
    padding:1.6em 2em;
    width:80%;
  }
  @media all and (max-width: 850px){
    .mainbody {
      flex-direction: column;
      
    }
    .mainnav{
      display:none
    }
    .filterStyle{ 
        padding:1em;
        width:95%;
        border-right: none;
        border-bottom: 10px solid white;
        margin-bottom:1em;
    } 
    .resultStyle{ 
        padding: 0 1em;
        width:95%
    }
    `;
