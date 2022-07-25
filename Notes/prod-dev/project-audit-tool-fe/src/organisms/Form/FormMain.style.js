import { css } from "styled-components";

export const FormMainStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
   height: 100%;
   a,span,input,.font2{
    font-size:1.1vw!important;
 }
 button{
  font-size:1vw!important;
 }
 h2{
  font-size:2.5vw!important;
 }
  .formPosition {
    display:flex;
    justify-content: center;
  align-items:center;
    width: 100%;
    padding-top:15%;
  }

  .copyrightPosition {
    width: 100%;
    padding-bottom:8%;
    text-align: center;
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};
    font-size: 1.5vw;
  }
  @media only screen and (max-width: 600px) {
    
    a,span,input,button,.font2{
      font-size:3vw!important;
   }
   h2{
    font-size:4vw!important;
   }
 .formPosition{
   width:100%;
   
   
  }
  .copyrightPosition{
    padding-top:15%;
    width:100%;
    opacity:0;
  }
`;
