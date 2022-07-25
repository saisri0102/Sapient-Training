import React from "react";

import FormMain from "./FormMain";

export default {
  title: "FormMain",
  component: FormMain,
  argTypes: {},
};

const Template = (args) => <FormMain {...args} />;

export const LoginMain = Template.bind({});
LoginMain.args = {
  copyrightText: "Copyright @ 2019-2020 Publicis Sapient",
  formtype: "loginform",
};

export const SignUpMain = Template.bind({});
SignUpMain.args = {
  copyrightText: "Copyright @ 2019-2020 Publicis Sapient",
  formtype: "signupform",
};
