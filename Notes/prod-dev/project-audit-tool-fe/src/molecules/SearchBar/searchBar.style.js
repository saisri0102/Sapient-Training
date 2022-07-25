import { css } from "styled-components";


export const SearchBarStyle = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  input {
    width: 100%;
    outline: none;
    border-bottom:1px solid white;
    color: ${(props) => {
    try {
      return props.theme.colors.whiteColor;
    } catch {
      return null;
    }

  }};
  ::placeholder {
    color: ${(props) => props.theme.colors.whiteColor};
    opacity: 1;
  }
    background-color: ${(props) => {
    try {
      return props.theme.colors.darkPurpleColor;
    } catch {
      return null;
    }
  }};
  }
  div {
    width: 100%;
  }
  p {
    width: 100%;
    border-bottom: 1px black solid;
  }
  .results{
    position:fixed;
    top:63px;
    width:60%;
  }
  .anchor {
    background-color: ${(props) => {
    try {
      return props.theme.colors.whiteColor;
    } catch {
      return null;
    }
  }};
    color: ${(props) => {
    try {
      return props.theme.colors.darkGreyColor;
    } catch {
      return null;
    }
  }};
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0.5%;
    width: 100%;
    border: 1px grey solid;
  }
  .anchor:hover {
    background-color: ${(props) => {
    try {
      return props.theme.colors.blackColor;
    } catch {
      return null;
    }
  }};
    color: ${(props) => {
    try {
      return props.theme.colors.whiteColor;
    } catch {
      return null;
    }
  }};
    width: 100%;
  }
  .resultsWrapper {
    width: 100%;
  }
`;
