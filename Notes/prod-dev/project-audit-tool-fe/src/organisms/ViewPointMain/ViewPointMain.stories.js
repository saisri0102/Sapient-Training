// import React from "react";
// import ViewPointMain from "./ViewPointMain";
// import { storiesOf } from "@storybook/react";
// // storiesOf("ViewPointMain", module).add("ViewpointMain", () => (
// //   <ViewPointMain />
// // ));
import React from "react";
import ViewPointMain from "./ViewPointMain";

export default {
  title: "ViewPointMain",
  component: ViewPointMain,
  argTypes: {},
};
var viewPointMainProps = {
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
    mainHeading: "REQUIREMENT VIEWPOINT",
    answeredno: "4",
    questionsno: "13",
    question: "Are you clear on vision scope of the project?",
    questionDescription:
      "Understanding the client purpose of thr project Unders tanding the client purpose of thr project Unde rstandi ng the client purpose of thr project",
    answerPlaceholder: "Enter your answer here",
    addref: "+ Add Reference",
    submitComment: "CONTINUE",
    detailsHeading: "REQUIREMENTS",
    detailsDescription:
      "There should be project There should be project There should be  project There should be project There should be project There should  be project",
      subHead1:"MANDATORY",
      subHead2:"ASSESSMENT TYPE",
      subHead3:"PRIORITY",
      subhead1Description:"Yes",
      subhead2Description:"Self",
      subhead3Description:"High",
    },
};

const Template = (args) => (
  <ViewPointMain viewPointMainProps={viewPointMainProps} {...args} />
);

export const ViewPointMainArgs = Template.bind({});
ViewPointMainArgs.args = {};
