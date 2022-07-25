import { css } from "styled-components";

export const QuestionnairesStyle = css`
  .mainbody {
    background-color: #f0f4f7;
  }
  .mainnav {
    flex-grow: 2;
  }
  .mainpage {
    flex-grow: 3;
  }
  .mainPageBody {
    display: grid;
    grid-template-columns: 33% auto auto;
    background-color: ${(props) => {
      try {
        return props.theme.colors.dullwhite;
      } catch {
        return null;
      }
    }};
  }
  .mainpageContent {
    background-color: ${(props) => {
      try {
        return props.theme.colors.whiteColor;
      } catch {
        return null;
      }
    }};
    margin: 20px;
  }
  .partition {
    display: inline-block;
    border-left: 1px solid
      ${(props) => {
        try {
          return props.theme.colors.blackColor;
        } catch {
          return null;
        }
      }};
  }
  .progressList {
    background-color: ${(props) => {
      try {
        return props.theme.colors.whiteColor;
      } catch {
        return null;
      }
    }};
    margin: 20px;
  }
  .heading {
    display: flex;
    justify-content: flex-start;
    border-bottom: solid 1px
      ${(props) => {
        try {
          return props.theme.colors.blackColor;
        } catch {
          return null;
        }
      }};
    padding-left: 20px;
  }
  .mainheading {
    font-size: 1.7em;
  }
  .mainsub {
    padding-top: 1em;

    padding-left: 20px;
    width: 50%;

    font-size: 1em;
  }
  ${(props) => {
    try {
      return `@${props.theme.mediaQuery.tabletSceen} {
    .mainbody {
      display:block;
      width:100%
      background-color:  ${(props) => {
        try {
          return props.theme.colors.dullwhite;
        } catch {
          return null;
        }
      }};
    }
   
    .mainpage {
      display: initial;
      z-index: -1;
    }
    .mainPageBody{
        display:grid;
        grid-template-columns:100%;
        grid-template-rows:auto auto auto;
        
    }
  }
}`;
    } catch {
      return null;
    }
  }}
  ${(props) => {
    try {
      return `@${props.theme.mediaQuery.largeMobileScreen} {
    .heading {
      display:flex;
      justify-content:flex-start;
      flex-direction:column;
    }
    .mainheading{
      padding-left:0px;
      padding-bottom:0px;
      margin:0;
      margin:0px;
      padding-top:10px;
    }
    .mainsub{
    //  padding-left:0px;
     // padding-top:0px;
      margin:0;
      width: 100%;
     
      padding:10px 0;
    }
  }
}`;
    } catch {
      return null;
    }
  }}
`;
