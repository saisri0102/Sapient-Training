import React from "react";
import ListItem from "./ListItem";
import Anchor from '../../atoms/Anchor/Anchor'
export default {
  title: "ListItem",
  component: ListItem,
  argTypes: {},
};

const Template = (args) => <ListItem {...args} >
  <Anchor>System Interface</Anchor>
  <Anchor>Arichitectural Interface</Anchor>
  <Anchor>Understanding Layers</Anchor>
</ListItem>;

export const Complete = Template.bind({});
Complete.args = {
  status:"complete",
  text:"✓",
  btnText:"REQUIREMENTS VIEWPOINT",

};
export const Progress = Template.bind({});
Progress.args = {
  status:"progress",
  text:"1",
  btnText:"FUNCTIONAL VIEWPOINT",
};
export const NotStarted = Template.bind({});
NotStarted.args = {
  status:"notstarted",
  text:"3",
  btnText:"OPERATIONAL VIEWPOINT",
};
