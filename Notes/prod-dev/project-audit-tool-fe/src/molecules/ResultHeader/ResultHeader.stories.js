import React from "react";
import ResultHeader from "./ResultHeader";

export default {
  title: "ResultHeader",
  component: ResultHeader,
  argTypes: {},
};

const Template = (args) => <ResultHeader {...args} />;

export const Resultheader = Template.bind({});
 Resultheader.args = {
   resultCount: 5,
   resultText: "Results"
 }