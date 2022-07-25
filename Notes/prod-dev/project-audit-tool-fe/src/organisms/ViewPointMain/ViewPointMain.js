import React, { useState, useEffect } from "react";

import withStyles from "../../withstyle";
import { ViewPointMainStyle } from "./ViewPointMain.style";
import MainHeading from "../../molecules/MainHeading/MainHeading";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/inputs/input";
import Commentcard from "../../molecules/Commentcard/comment-card";
import WriteCommentcard from "../../molecules/WriteCommentcard/WriteCommentcard";
import Data from "./commentCard.json";
let CommentData = Data.comments;

const ViewPointMain = ({
  viewPointMainProps,
  varient,
  className,
  ...dataprops
}) => {
  return (
    <div className={`${className}`} dataprops={dataprops} varient={varient}>
      <div className={viewPointMainProps.class.main}>
        <div className={viewPointMainProps.class.mainheading}>
          <h2> {viewPointMainProps.content.mainHeading}</h2>
        </div>
        <div className={viewPointMainProps.class.mainsub}>
          <h4>
            {" "}
            <MainHeading
              answeredno={viewPointMainProps.content.answeredno}
              questionsno={viewPointMainProps.content.questionsno}
            />
          </h4>
        </div>
      </div>

      <div className={viewPointMainProps.class.content}>
        <div className={viewPointMainProps.class.contentmain}>
          <div className={viewPointMainProps.class.question}>
            <span>{viewPointMainProps.content.question}</span>
            <p>{viewPointMainProps.content.questionDescription}</p>
          </div>
          <div className={viewPointMainProps.class.ans}>
            <Input
              className={viewPointMainProps.class.textbox}
              type="text"
              placeholder={viewPointMainProps.content.answerPlaceholder}
              onChange={viewPointMainProps.functions.onAnsChange}
            />
          </div>
          <div className={viewPointMainProps.class.addref}>
            <Button
              style={{ outline: "none" }}
              varient="tertiary"
              size="small"
              btnText={viewPointMainProps.content.addref}
              onClick={viewPointMainProps.functions.onClickAddref}
            />
          </div>

          <div className={viewPointMainProps.class.commentsHead}>
            {CommentData.length} Comments
          </div>

          <div className={viewPointMainProps.class.comments}>
            {CommentData.map((comment, index) => (
              <div
                className={viewPointMainProps.class.commentBox}
                id={"commentBox" + { index }}
              >
                <Commentcard
                  name={comment.author[0].name}
                  typeOfUser={comment.typeOfUser}
                  commentDate={comment.commentDate}
                  commentContent={comment.commentContent}
                  imgsrc={comment.author[0].imgsrc}
                  onLike={viewPointMainProps.functions.onLike}
                  onReply={viewPointMainProps.functions.onReply}
                  id={"commentCard" + { index }}
                />
              </div>
            ))}
          </div>
          <div className={viewPointMainProps.class.writeComment}>
            <WriteCommentcard />
          </div>
          <div className={viewPointMainProps.class.commentButton}>
            <Button
              style={{ outline: "none" }}
              varient="primary"
              size="medium"
              btnText={viewPointMainProps.content.submitComment}
              onClick={viewPointMainProps.functions.onClickContinue}
            />
          </div>
        </div>

        <div className={viewPointMainProps.class.viewPointDetails}>
          <span>{viewPointMainProps.content.detailsHeading}</span>
          <p>{viewPointMainProps.content.detailsDescription}</p>
          <span>{viewPointMainProps.content.subHead1}</span>
          <p>{viewPointMainProps.content.subhead1Description}</p>
          <span>{viewPointMainProps.content.subHead2} </span>
          <p>{viewPointMainProps.content.subhead2Description}</p>
          <span>{viewPointMainProps.content.subHead3}</span>
          <p>{viewPointMainProps.content.subhead3Description}</p>
        </div>
      </div>
    </div>
  );
};

ViewPointMain.defaultProps = {
  viewPointMainProps: {
    functions: {
      onLike: () => {
        console.log("Liked");
      },
      onReply: () => {
        console.log("Replied");
      },
      onAnsChange: () => {
        console.log("CHANGE");
      },
      onClickAddref: () => {
        console.log("test");
      },
      onClickContinue: () => {
        console.log("You clicked on the continue button");
      },
    },
    class: {
      main: "viewpoint-main",
      mainheading: "viewpoint-main-heading",
      mainsub: "viewpoint-main-sub",
      content: "viewpoint-content",
      contentmain: "viewpoint-content-main",
      question: "viewpoint-question",
      ans: "viewpoint-ans",
      textbox: "textbox",
      addref: "viewpoint-addref",
      commentsHead: "comments-head",
      comments: "comments",
      commentBox: "comment-box",
      writeComment: "write-comment",
      commentButton: "comment-button",
      viewPointDetails: "viewpoint-details",
    },
    content: {
      mainHeading: "VIEWPOINT",
      answeredno:"1",
      questionsno:"5",
      question: "Question",
      questionDescription: "Question Description",
      answerPlaceholder: "Enter your answer here",
      addref: "+ Add Reference",
      submitComment: "CONTINUE",
      detailsHeading: "REQUIREMENTS",
      detailsDescription: "Details Description",
      subHead1: "MANDATORY",
      subHead2: "ASSESSMENT TYPE",
      subHead3: "PRIORITY",
      subhead1Description: "Yes/No",
      subhead2Description: "Self/Group",
      subhead3Description: "High/Med/Low",
    },
  },
};

export default withStyles(ViewPointMain, ViewPointMainStyle);
export { ViewPointMain as ViewPointMainNotStyled };
