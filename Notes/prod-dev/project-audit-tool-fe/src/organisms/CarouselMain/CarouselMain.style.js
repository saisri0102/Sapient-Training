import { css } from "styled-components";

export const CarouselMainStyle = css`
  display: flex;
  width:100%;
  height:100vh;
  justify-content: space-between;
   align-items:center;
  flex-direction:column;
  positon: relative;
  a,span,input,button,.font2{
    font-size:1.2vw!important;
 }
 h2{
  font-size:1.5vw!important;
 }
  background-color:${(props) => {
    try {
      return props.theme.colors.darkPurpleColor;
    } catch {
      return null;
    }
  }};
  .carouselPosition{
    display:flex;
    justify-content: center;
  align-items:center;
  padding-top:10%;
    width:40%;
  }
  .navFooterPosition{
    width:70%;
    justify-content: center;
    padding-bottom:10%;
  }
  

  @media only screen and (max-width: 600px) {
    height:54vh;
    h2{
      
      font-size:4vw!important;
  }
  a{
    font-size:2.5vw!important;
 }
 .carouselPosition{
   width:70%;
   padding-top:0;
   margin-top:5vh;
   
  }
  .navFooterPosition{
    padding-top:20%;
    width:80%;
  }
  @media only screen and (max-height: 400px) {
    height:400px;
  }
`;
