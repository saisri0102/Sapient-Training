import React from "react";
import WriteCommentcard from "./WriteCommentcard";

export default {
  title: "WriteComment",
  component: WriteCommentcard,
  argTypes: {},
};

const Template = (args) => <WriteCommentcard {...args} />;

export const WriteCommentcardArgs = Template.bind({});
WriteCommentcardArgs.args = {
  textAreaonChange: () => {
    console.log("Onchange Event");
  },
};
