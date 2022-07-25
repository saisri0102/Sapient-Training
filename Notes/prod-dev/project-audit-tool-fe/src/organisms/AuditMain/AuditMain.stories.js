import React from "react";
import AuditMain from "./AuditMain";

export default {
  title: "Organism/AuditMain",
  component: AuditMain,
  argTypes: {},
};

const Template = (args) => <AuditMain {...args} />;

export const AuditMainArgs = Template.bind({});
AuditMainArgs.args = {
  text: "GOT AUDIT",
  sizeMain: "3.5vw",
  status: false,
  subtext:
    "Start creating an audit to add pace to your business, don't let a messy audit be your fate.",
  subsize: "2vw",
  body: "body",
  subtextcss: "subtextcss",
  card: "card",
};
