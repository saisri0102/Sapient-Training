import { css } from "styled-components";

export const ListItemStyle = css`
    padding-bottom: 20px;
    .checkpoint {
        border-radius:50%;
        height:17px;
        width:17px;
        display:inline-block;
        text-align:center;
        padding:5px;
        margin-right:10px;
        color:white;
        background-color: ${(props) => {
            switch (props.status) {
              case "complete":
                return props.theme.colors.greenColor;
              case "progress":
                return props.theme.colors.darkPurpleColor;
              case "notstarted":
                return props.theme.colors.darkGreyColor;
              default:
                return props.theme.colors.blackColor;
            }
        }};
    }
    .checkpoint-text {
        color:${props => (
            props.theme.colors.darkGreyColor
        )};
        font-size:0.9rem;
        font-weight:normal
    }
    .checkpoint-text-active{
        color:${props => (
            props.theme.colors.blackColor
        )};
        font-size:0.9rem;
        font-weight:normal
    }
    .sub-links{
        margin-left:10px;
        display:flex;
        border-left:${props => (
            props.theme.border.defaultBorder
        )};
        
    }
    .sub-links li{
        list-style-type:none;
        padding-bottom:10px;  

    }
    
    .sub-links li a{
        color:${props => (
            props.theme.colors.darkGreyColor
        )};
        font-weight:normal;
        &:hover {
            color:${props => (
                props.theme.colors.darkPurpleColor
            )};
        }
        &:active {
            color:${props => (
                props.theme.colors.darkPurpleColor
            )};
        }
    }
    .activeClass a{
        color:${props => (
            props.theme.colors.darkPurpleColor
        )};
    }

    
`
;