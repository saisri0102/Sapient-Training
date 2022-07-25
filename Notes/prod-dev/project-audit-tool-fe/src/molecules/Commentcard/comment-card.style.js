import styled, { css } from "styled-components";

export const Commenthead = styled.span`
  margin-right: 20px;
  margin-left: -15px;
  font-size: 15px;
  .usertype {
    
    background-color: ${(props) => {
      try {
        return props.theme.colors.lightPurpleColor;
      } catch {
        return null;
      }
    }
   
  };
    color: ${(props) => {
      try {
        return props.theme.colors.whiteColor;
      } catch {
        return null;
      }
    }};
    padding: 2px;
  }
  .commentdate {
    @media screen and (max-width: 320px) {
      
      display:none;
 
     }
    font-size: 12px;
    color: ${(props) => {
      try {
        return props.theme.colors.darkGreyColor;
      } catch {
        return null;
      }
    }};
  }
  .username {
    color: ${(props) => {
      try {
        return props.theme.colors.blackColor;
      } catch {
        return null;
      }
    }};
   
  }
`;
export const Commentmainhead = styled.li`
  margin-left: -4px;
  color: ${(props) => {
    try {
      return props.theme.colors.darkPurpleColor;
    } catch {
      return null;
    }
  }};
  font-size: 20px;
`;
export const Commentbox = styled.div`
  width: 90%;
  border: 1px solid
    ${(props) => {
      try {
        return props.theme.colors.lightGreyColor;
      } catch {
        return null;
      }
    }};
  box-shadow: 0px 0px 2px 2px
    ${(props) => {
      try {
        return props.theme.colors.lightGreyColor;
      } catch {
        return null;
      }
    }};
  height: auto;
`;
export const Commentbody = styled.p`
  margin-left: 10px;
  height: 60px;
  margin-top: 15px;
  font-size: 15px;
  overflow: auto;
`;
export const StyledCommentcard = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 70px auto;
  @media screen and (max-width: 600px) {
    diplay:grid;
    grid-template-columns: 100%;
  }

`;
export const UserImage = styled.div`
  @media screen and (max-width: 600px) {
    img {
      display: none;
    }
    display: none;
   
  }
`;
