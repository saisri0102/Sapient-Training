import React from "react";
import Sidebarlinks from "./Sidebarlink";

export default {
  title: "Molecule/Sidebarlinks",
  component: Sidebarlinks,
  argTypes: {},
};

const Template = (args) => <Sidebarlinks {...args} />;

export const SidebarLink = Template.bind({});
SidebarLink.args = {
  type: "fas faHome",
  size: "lg",
  href: "#",
  text: "Sign Up",
  target: "_self",
  padder: "padder",
};
