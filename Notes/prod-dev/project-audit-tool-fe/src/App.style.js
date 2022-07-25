import { css } from "styled-components";
export const AppStyle = css`
    .mainBody{
        display:flex;
    }
    .SideNavHide{
        display:none;
    }
    .SideNavShow{
        flex-basis:20%;
    }
    .ContentLarge{
        width:100%;
    }
    .ContentSmall{
        width:80%;
    }
    @media only screen and (max-width: 800px){
        .SideNavShow{
            flex-basis:30%;
         
        }
        .ContentLarge{
            width:100%;
            
        }
        .ContentSmall{
            width:70%;
        }
    }
`

