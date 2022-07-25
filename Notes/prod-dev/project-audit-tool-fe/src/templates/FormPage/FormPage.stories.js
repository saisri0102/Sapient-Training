import React from 'react';
import { storiesOf } from "@storybook/react";
import FormPage from './FormPage';

storiesOf("Form Template", module)
  .add("loginform", () => <FormPage formtype="loginform" />)
  .add("signupform", () => <FormPage formtype="signupform" />)
