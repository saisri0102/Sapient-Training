import { css } from "styled-components";

export const StatusFilterStyle = css`
  width: ${(props) =>{ 
    try{
      return props.width;
    }catch{
      return '';
    }
  }
  };
  .status {
    color: ${(props) =>{
      try{
        return props.theme.colors.darkGreyColor;
    }catch{
      return '';
    }
  } 
};
    font-size: ${(props) =>{
      try{
        return props.theme.fontSizes.size15;
      }catch{
        return '';
      }
    } 
  };
  }
  .d-flex {
    display: flex;
    justify-content: space-between;
  }
  .list {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
`;
