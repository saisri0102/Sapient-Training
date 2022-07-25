import React from "react";
import NavbarLeftItems from "./NavbarLeft";

export default {
  title: "NavbarLeftItems",
  component: NavbarLeftItems,
  argTypes: {},
};

const Template = (args) => <NavbarLeftItems {...args} />;

export const NavbarLeftItemsArgs = Template.bind({});
NavbarLeftItemsArgs.args = {
  content: "logo",
  onclickeventArrow: () => {
    console.log("hi");
  },
  theme: {
    color: "white",
    borderRadius: "radius30",
  },
  sizeButton: "small",
  btnText: "<",
  size: "2x",
  varient: ""
};