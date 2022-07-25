import { css } from "styled-components";

export const SearchFilterStyle = css`
    width: ${(props) =>{
        try{
            return props.width;
        }catch{
            return '';
        }
    } };
    .status {
        color: ${(props) => {
            try{
                return props.theme.colors.darkGreyColor;
            }catch{
                return ''; 
            }
        }};
        font-size:0.8em;
    }
    .flex {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
    }
    .margin {
        margin-bottom: 1rem;
        margin-left:0;
    }
    .list {
        list-style-type: none;
        padding-left: 0;
        font-size:0.85em;
    }
    @media all and (max-width: 850px){
        font-size:10px;
    }
`;