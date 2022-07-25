import React from "react";
import Button from "./Button";
export default {
  title: "Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const SignUp = Template.bind({});
SignUp.args = {
  onClick: () => console.log("You clicked on the signup button"),
  varient: "primary",
  size: "small",
  btnText: "SIGN UP",
};

export const Login = Template.bind({});
Login.args = {
  onClick: () => console.log("You clicked on the login button"),
  varient: "primary",
  size: "small",
  btnText: "Login",
};

export const NewAudit = Template.bind({});
NewAudit.args = {
  onClick: () => console.log("You clicked on the audit button"),
  varient: "primary",
  size: "large",
  btnText: "Start New Audit",
};

export const Audit = Template.bind({});
Audit.args = {
  onClick: () => console.log("You clicked on the audit button"),
  varient: "primary",
  style: {
    border: "2px solid white",
    width: "auto",
  },
  btnText: "Start Audit",
};

export const Continue = Template.bind({});
Continue.args = {
  onClick: () => console.log("You clicked on the continue button"),
  varient: "primary",
  size: "small",
  btnText: "CONTINUE",
};

export const Like = Template.bind({});
Like.args = {
  onClick: () => console.log("You clicked on the like button"),
  varient: "secondary",
  size: "small",
  btnText: "Like",
};
export const Reply = Template.bind({});
Reply.args = {
  onClick: () => console.log("You clicked on the reply button"),
  varient: "secondary",
  size: "small",
  btnText: "Reply",
};
export const addReference = Template.bind({});
addReference.args = {
  onClick: () => console.log("Please enter Reference here"),
  varient: "tertiary",
  btnText: "+ Add Reference",
};

console.log(Button);
