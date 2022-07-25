import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./input";

storiesOf("Input", module)
  .add("username", () => (
    <Input
      className="username"
      type="text"
      placeholder="Enter User Name"
      ariaLabel="User name"
      title="Username"
    />
  ))
  .add("email", () => (
    <Input
      className="email"
      type="text"
      placeholder="Enter your email-address"
      ariaLabel="Email address"
      title="email"
    />
  ))
  .add("password", () => (
    <Input
      className="password"
      type="text"
      placeholder="Enter Password"
      ariaLabel="Password"
      title="password"
    />
  ))
  .add("cnfpass", () => (
    <Input
      className="cnfpass"
      type="text"
      placeholder="Confirm your password"
      ariaLabel="confirm Pasword"
      title="confirm password"
    />
  ))
  .add("loginemail", () => (
    <Input
      className="loginemail"
      type="text"
      placeholder="Enter your Email address *"
      ariaLabel="Login Email"
      title="Login email"
    />
  ))
  .add("loginpass", () => (
    <Input
      className="loginpass"
      type="text"
      placeholder="Enter your password *"
      ariaLabel="Login Password"
      title="login Password"
    />
  ))
  .add("textbox", () => (
    <Input
      className="textbox"
      type="text"
      placeholder="Enter your text here"
      ariaLabel="Your Text"
      title="textBox"
    />
  ));
