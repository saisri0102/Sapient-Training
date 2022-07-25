import { css } from "styled-components";

export const AuditMainStyle = css`
  background-color:#f0f4f7;
  padding-top:0.5%;
  height:100%;
  margin:0%;
  h1{
    margin:0%;
    border-bottom: ${(props) => {
    try {
      return props.theme.border.border1;
    } catch {
      return null;
    }
  }};
    color: ${(props) => {
    try {
      return props.theme.colors.blackColor;
    } catch {
      return null;
    }
  }};
    font-weight: 200;
    font-size: ${(props) => {
    try {
      return props.sizeMain;
    } catch {
      return null;
    }
  }};
    display: block;
    padding: 0% 0% 1% 2%;
    letter-spacing: -1px;
  }

  .body {
   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .card {
    all: inherit;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color:#fff;
    width: 60%;
    margin: 1.5% 0%;
    padding-bottom: 1.5%;
    padding-left: 0%;
    input{
      background-color:white;
    }
  }
  .subtextcss {
    all: inherit;
    font-size: ${(props) => {
    try {
      return props.subsize;
    } catch {
      return null;
    }
  }};
    width: 50%;
    text-align: center;
    font-weight: 700;
    margin: 1.5%;
  }
`;
