import { css } from "styled-components";
export const ResultCardStyle = css`
  font-size: 12px;
  .result-card {
    margin: 1.5em 0;
    display: flex;
    border-top: 5px solid;
    border-color: rgba(78, 57, 131, 255);
    background-color: white;
    padding: 1em;
  }
  h2 {
    font-size: 1.3em;
    display: inline;
    font-weight: 100;
    margin-right: 0.4em;
  }
  h3 {
    font-size: 0.95em;
    display: inline;
    font-weight: 100;
  }
  .INCOMPLETE {
    color: #ff0000;
  }
  .COMPLETE {
    color: #00c5cd;
  }
  .REVISIT {
    color: #ffa500;
  }
  .CLOSED {
    color: #19ca19;
  }
  .grey-font {
    color: #777777;
  }
  .result-image {
    width: 17%;
  }
  .result-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .result-auditor {
    display: flex;
    margin-top: 2em;
    line-height: 0.5;
  }
  .result-reviewer {
    display: flex;
    margin: 1em 0;
    line-height: 0.5;
  }
  .grey-border {
    border: 2px solid grey;
    border-radius: 30px;
    padding: 0.4em 0.3em;
    margin: 0.3em;
  }
  .progress-percent {
    border: none;
    height: 1rem;
    background-color: rgba(78, 57, 131, 255);
    color: white;
    border-radius: 30px;
    padding: 0.3em 0.7em;
  }
  .result-email {
    display: flex;
  }
  @media all and (max-width: 750px) {
    font-size: 10px;
    .result-image {
      display: none;
    }
  }
`;
