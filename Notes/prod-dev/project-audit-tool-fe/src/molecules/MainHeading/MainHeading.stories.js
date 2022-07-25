import React from "react";
import MainHeading from "./MainHeading";

export default {
  title: "Molecule/MainHeading",
  component: MainHeading,
  argTypes: {},
};

const Template = (args) => <MainHeading {...args} />;

export const MainHeadingArgs = Template.bind({});
MainHeadingArgs.args = {
  text: "GOT AUDIT",
  status: true,
  answeredno: "4",
  questionsno: "13",
  sizeMain: "3.5vw",
  sizeSubtext: "1.5vw",
  status: "status",
  primaryeditor: "primaryeditor",
};