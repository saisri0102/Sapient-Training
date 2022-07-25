import { css } from "styled-components";

let newStyle = "";

const ButtonStyle = css`
  ${(props) => {
    try {
      switch (props.varient) {
        case "primary":
          newStyle = `
        border:2px solid ${props.theme.colors.defaultBtnTheme};
        background-color:${props.theme.colors.defaultBtnTheme};
        color:white;
        font-size: 0.9em;
        padding:1em;
        border-radius:30px;
    `;
          break;
        case "secondary":
          newStyle = `
        color: gray;
        background-color:inherit;
        border: none;

        font-size: 0.8em;
    `;
          break;
        case "tertiary":
          newStyle = `
        border:none;
        background-color:white;
        color:${props.theme.colors.defaultBtnTheme};
        padding:${props.theme.colors.defaultBtnTheme};
        border-radius:30px;
        font-size:1em;
        font-weight:bold;
    `;
          break;
        default:
          break;
      }
    } catch {
      return null;
    }
    switch (props.size) {
      case "small":
        return css`
          ${newStyle}
          width:auto;
          ${props.style}
        `;
      case "large":
        return css`
          ${newStyle}
          width:60%;
          ${props.style}
        `;
      default:
        return css`
          ${newStyle}
          ${props.style}
        `;
    }
  }}};

  @media only screen and (max-width: 750px) {
    font-size: 10px;
  }

  &:hover {
    opacity: ${(props) => {
      return "0.8";
    }};
    cursor: pointer;
  }
`;

export { ButtonStyle };
