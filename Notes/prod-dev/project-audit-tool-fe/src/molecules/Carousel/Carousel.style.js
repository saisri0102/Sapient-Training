import { css, withTheme } from "styled-components";

export const CarouselStyle = css`
  width: ${(props) => props.width};
  .dotHeight {
    height: 40px;
  }
  .heading h2 {
    height: 4rem;
    font-size: 2rem;
    color: ${(props) => {
      try {
        return props.headingColor?props.headingColor:'white';
      } catch {
        return 'white';
      }
    }};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
