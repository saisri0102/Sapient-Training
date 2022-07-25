// import styled from 'styled-components';
import { css } from "styled-components";
export const UniversalFormStyle = css`
  width: 100%;
  height: auto;
  .OuterFormWrapper,
  .FormAudit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .OuterFormWrapper h2,
  .FormAudit h2 {
    font-size: 3.5vw;
    font-weight: lighter;
    font-family: inherit;
  }

  .OuterFormWrapper,
  .FormAudit a {
    font-size: 2vw;
    font-weight: lighter;
    font-family: inherit;
  }
  .OuterFormWrapper span {
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};

    font-size: 2vw;
    font-weight: lighter;
    font-family: inherit;
  }
  .OuterFormWrapper p,
  .FormAudit p {
    margin: 0px;
    height: 1vw;
    color: ${(props) => {
      try {
        return props.theme.colors.redColor;
      } catch {
        return null;
      }
    }};
    font-size: 1vw;
  }

  .FormAudit {
    border-top: 5px solid green;
    padding-top: 2%;
  }

  .ButtonWrapper {
    width: 70%;
    margin-top: 2%;
    display: flex;

    flex-direction: row;

    text-align: center;

    align-items: center;

    justify-content: space-between;
  }

  .ButtonWrapper button {
    width: 30%;
  }
  button {
    margin-top: 1%;
  }

  .FormItemWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 1% 0;
  }

  .FormItemWrapper button {
    width: 40%;
  }

  .FormWrapper {
    width: 70%;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    margin: 2%;
    border-bottom: solid 0.5px grey;
  }
  .FormWrapper input {
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    outline: none;
    width: 90%;
    font-size: 1.5vw;
    background-color: #f0f4f7;
  }

  .FormWrapper label {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .FormWrapper span {
    font-size: 2vw;
    width: 100%;
  }

  .FormWrapper select {
    color: grey;
    display: flex;
    outline: none;
    border: none;
  }
  .font2 {
    font-size: 2vw !important;
  }

  .FormWrapper select {
    outline: none;
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1.5vw;
  }
  @media only screen and (max-width: 600px) {
    .FormItemWrapper {
      padding-bottom: 2vh;
    }
    .FormWrapper {
      margin: 3.5%;
    }
    .OuterFormWrapper p,
    .FormAudit p {
      font-size: 1.2vh;
    }
    .FormAudit button {
      margin-top: 5%;
    }
  }
`;
