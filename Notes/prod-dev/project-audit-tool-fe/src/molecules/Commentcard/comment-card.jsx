import React from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/Image/image";
import Button from "../../atoms/Button/Button";
import {
  StyledCommentcard,
  Commenthead,
  Commentbody,
  Commentbox,
  Commentmainhead,
  UserImage,
} from "./comment-card.style";

Commentcard.propTypes = {
  name: PropTypes.string,
  typeOfUser: PropTypes.string,
  commentDate: PropTypes.string,
  commentContent: PropTypes.string,
  imgsrc: PropTypes.string,
  onLike: PropTypes.func,
  onReply: PropTypes.func,
  varient: PropTypes.string,
  nameClass:PropTypes.string,
  dateClass:PropTypes.string,
  typeClass:PropTypes.string,
  

};
Commentcard.defaultProps = {
  name: "Name",
  typeOfUser: "Guest",
  commentDate: "Date",
  commentContent: "CommentBody",
  nameClass:"username",
  typeClass:"usertype",
  dateClass:"commentdate",
};

function Commentcard(props) {
  const {
    name,
    typeOfUser,
    commentDate,
    commentContent,
    imgsrc,
    onLike,
    onReply,
    nameClass,
    typeClass,
    dateClass,
    varient,
  } = props;
  return (
    <StyledCommentcard varient={varient}>
     <UserImage>
      <Image
        src={imgsrc}
        varient="small-radius"
      />
</UserImage>
      <Commentbox>
        <Commentmainhead>
          <Commenthead>
            <span className={nameClass}>{name}</span>
          </Commenthead>

          <Commenthead>
            <span className={typeClass}>{typeOfUser}</span>
          </Commenthead>
          <Commenthead>
            <span className={dateClass}>{commentDate}</span>
          </Commenthead>
        </Commentmainhead>
        <Commentbody>{commentContent}</Commentbody>
        <Button
          onClick={onLike}
          varient="secondary"
          size="small"
          btnText="Like"
          style={{outline: "none" }}
        />
        <Button
          onClick={onReply}
          varient="secondary"
          size="small"
          btnText="Reply"
          style={{outline: "none" }}
        />
      </Commentbox>
    </StyledCommentcard>
  );
}

export default Commentcard;
