import React from "react";
import Result  from "./Result";

export default {
  title: "ResultComponent",
  component: Result,
  argTypes: {},
};

const Template = (args) => <Result {...args} />;

export const result = Template.bind({});
result.args = {
  data: "" 
};
