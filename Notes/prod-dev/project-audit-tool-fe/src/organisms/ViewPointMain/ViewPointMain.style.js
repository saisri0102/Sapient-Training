import { css } from "styled-components";

export const ViewPointMainStyle = css`
  .viewpoint-content {
    display: grid;
    grid-template-columns: 70% 30%;
  }
  .viewpoint-main {
    border-top: 2px solid
      ${(props) => {
        try {
          return props.theme.colors.greenColor;
        } catch {
          return null;
        }
      }};
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
  .viewpoint-main-heading h2 {
    font-size: 1.5em;
  }

  .viewpoint-main-sub {
    padding-top: 0.4em;
    width: 50%;
    padding-left: 20px;
  }
  .viewpoint-main-sub h4 {
    font-size: 1em;
  }
  .viewpoint-addref {
    text-align: right;
    padding: 30px;
  }
  .viewpoint-details span {
    font-size: 20px;
  }
  .viewpoint-details p {
    font-size: 15px;
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};
  }
  .viewpoint-details {
    border-left: solid 1px
      ${(props) => {
        try {
          return props.theme.colors.blackColor;
        } catch {
          return null;
        }
      }};
    height: 100%;

    padding: 20px;
  }
  .viewpoint-content-main {
    width: 95%;

    padding-top: 20px;
    padding-left: 20px;
  }
  .viewpoint-content-main p {
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};
  }
  .viewpoint-question {
    padding-bottom: 30px;
  }
  .viewpoint-ans {
    padding-right: 30px;
  }
  .comments {
    padding: 20px;
  }
  .comment-box {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .write-comment {
    padding: 20px;
  }
  .comment-button {
    text-align: center;
    padding-bottom:20px;
  }
  .viewpoint-ans input {
    width: 100%;
    border: none;
    border-bottom: solid 1px
      ${(props) => {
        try {
          return props.theme.colors.darkGreyColor;
        } catch {
          return null;
        }
      }};
    outline: none;
    padding: 0;
    margin: 0;
  }
  .comments-head {
    font-size: 15px;
  }
  @media screen and (max-width: 900px) {
    .viewpoint-content {
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
    }
    .viewpoint-details {
      grid-row: 1;
      border-left: none;
    }
    .viewpoint-content-main {
      grid-row: 2;
      border-top: solid 1px
        ${(props) => {
          try {
            return props.theme.colors.darkGreyColor;
          } catch {
            return null;
          }
        }};
    }
    .viewpoint-main {
      display: flex;
      justify-content: flex-start;
    }
    .comments-head {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 600px) {
    .viewpoint-main {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    }
    .viewpoint-main-heading {
      padding-left: 0px;
      padding-bottom: 0px;
      margin: 0;
    }
    .viewpoint-main-heading h2 {
      padding-left: 0px;
      padding-bottom: 0px;
      margin: 0;
      padding-top: 10px;
    }
    .viewpoint-main-sub {
      padding-left: 0px;
      padding-top: 0px;
      margin: 0;
      width: 100%;
    }
    .viewpoint-main-sub h4 {
      margin: 0;
      padding: 10px 0;
    }
  }
`;
