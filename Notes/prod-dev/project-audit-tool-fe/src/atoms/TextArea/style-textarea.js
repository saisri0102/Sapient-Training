import styled, { css } from "styled-components";
const TEXTAREA = styled.textarea`
  ${(props) => {
    switch (props.className) {
      default:
        return css`
          border-radius: 2px;
          outline: none;
          width: 90%;
          color: black;
          background-color:  ${(props) => {
            try {
                return props.theme.colors.dullwhite;
            } catch {
                return null;
            }
         }};
          resize: none;
          padding-top: 7px;
          font-family: sans-serif;
          border: 1px solid #bfbfbf;
          box-shadow: 0px 0px 2px 2px ${(props) => {
            try {
                return props.theme.colors.lightGreyColor;
            } catch {
                return null;
            }
         }};

          ::placeholder {
            color:  ${(props) => {
              try {
                  return props.theme.colors.blackColor;
              } catch {
                  return null;
              }
           }};
            padding: 2px;
          }
        `;
    }
  }}
`;

export default TEXTAREA;
