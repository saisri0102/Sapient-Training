import React from "react";

import ProgressFilter from "./ProgressFilter";

export default {
  title: "Progress Filter",
  component: ProgressFilter,
  argTypes: {},
};

const Template = (args) => <ProgressFilter {...args} />;

export const progressFilter = Template.bind({});
progressFilter.args = {
  width: "200px",
  buttonVarient: "secondary",
  heading: "PROGRESS",
  btnText: "Clear",
  title:40
};
