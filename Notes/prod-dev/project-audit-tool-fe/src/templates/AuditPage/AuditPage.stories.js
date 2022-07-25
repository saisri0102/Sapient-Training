import React from "react";
import AuditPage from "./AuditPage";

export default {
  title: "Template/AuditPage",
  component: AuditPage,
  argTypes: {},
};

const Template = (args) => <AuditPage {...args} />;

export const AuditPageArgs = Template.bind({});
AuditPageArgs.args = {
  text: "GOT AUDIT",
  sizeMain: "3.5vw",
  subtext: "Start creating an audit to add pace to your business, don't let a messy audit be your fate.",
  subsize: "2vw",
  mainbody: "mainbody",
  mainnav: "mainnav",
  mainpage: "mainpage",
};
