import React from "react";
import Anchor from "./Anchor";

export default {
  title: "Anchor",
  component: Anchor,
  argTypes: {},
};

const Template = (args) => <Anchor {...args} >
Sign Up
</Anchor>;

export const Primary = Template.bind({});
Primary.args = {
  href: "#",
  target: "_self",
  varient: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: "#",
  target: "_blank",
  varient: "secondary",
};

export const Default = Template.bind({});
Default.args = {
  href: "#",
  target: "_self",
  varient: "normal",
};


