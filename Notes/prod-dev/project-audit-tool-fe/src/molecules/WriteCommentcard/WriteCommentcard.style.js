import { css } from "styled-components";

export const WriteCommentcardStyle = css`

.WriteCommentmain{
    display:grid;
    grid-template-columns:70px auto;
}
@media screen and (max-width: 600px){
    .WriteCommentmain{
        display:grid;
        grid-template-columns:100%;
    }
    img{
        display:none;
    }


`;