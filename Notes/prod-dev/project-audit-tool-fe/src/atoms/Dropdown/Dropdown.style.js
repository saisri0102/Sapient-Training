import styled, { css } from "styled-components";

export const DropdownStyle = css`
  .dropdown-label {
    ${(props) => {
      switch (props.labelclassName) {
        case "orderbylabel":
          return css`
            color:  #777777; 
          `;
        case "sortbylabel":
          return css`
            color:  #777777; 
          `;

        default:
          break;
      }
    }}
  }
  .dropdown-select {
    ${(props) => {
      switch (props.className) {
        case "order":
          return css`
            background-color: inherit;
            border: none;
            font-weight: bold;
            font-size: 1em;
          `;
        case "sort":
          return css`
            background-color: inherit;
            border: none;
            font-weight: bold;
            font-size: 1em;
          `;

        case "category-form":
          return css`
            width: 100%;
            background-color:inherit;
            border: none;
            border-bottom: 1px solid
              ${(props) => {
                try {
                  return props.theme.colors.darkGreyColor;
                } catch {
                  return null;
                }
              }};
          `;

        case "category-sm":
          return css`
            width: 150px;
            border: none;
            border-bottom: 1px solid
              ${(props) => {
                try {
                  return props.theme.colors.darkGreyColor;
                } catch {
                  return null;
                }
              }};
          `;
        default:
          break;
      }
    }}
  }
`;

// export const LABEL = styled.label`
//   ${(props) => {
//     switch (props.className) {
//       case "orderbylabel":
//         return css`
//           color:${(props) => {
//             try {
//                 return props.theme.colors.darkGreyColor;
//             } catch {
//                 return null;
//             }
//          }};
//         `;
//       case "sortbylabel":
//         return css`
//           color: ${(props) => {
//             try {
//                 return props.theme.colors.darkGreyColor;
//             } catch {
//                 return null;
//             }
//          }};
//           margin-left: 5px;
//         `;

//       default:
//         break;
//     }
//   }}
// `;
// export const SELECT = styled.select`
//   ${(props) => {
//     switch (props.className) {
//       case "order":
//         return css`
//           border: none;
//           font-weight: bold;
//           font-size:1em;
//         `;
//       case "sort":
//         return css`
//           border: none;
//           font-weight: bold;
//           font-size:1em;
//         `;

//       case "category-form":
//         return css`
//           width: 100%;
//           border: none;
//           border-bottom: 1px solid ${(props) => {
//             try {
//                 return props.theme.colors.darkGreyColor;
//             } catch {
//                 return null;
//             }
//          }};
//         `;

//       case "category-sm":
//         return css`
//           width: 150px;
//           border: none;
//           border-bottom: 1px solid ${(props) => {
//             try {
//                 return props.theme.colors.darkGreyColor;
//             } catch {
//                 return null;
//             }
//          }};
//         `;
//       default:
//         break;
//     }
//   }}
// `;
