import React from "react";
import Questionnaires from "./Questionnaires";

export default {
  title: "Template/Questionnaires",
  component: Questionnaires,
  argTypes: {},
};

const Template = (args) => <Questionnaires {...args} />;

export const QuestionnairesArgs = Template.bind({});
QuestionnairesArgs.args = {
  mainbody: "mainbody",
  mainnav: "mainnav",
  mainpage: "mainpage",
};
