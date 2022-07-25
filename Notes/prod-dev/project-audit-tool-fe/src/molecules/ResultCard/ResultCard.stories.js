import React from "react";
import ResultCard from "./ResultCard";

export default {
  title: "ResultCard",
  component: ResultCard,
  argTypes: {},
};

const Template = (args) => <ResultCard {...args} />;

export const Resultcard = Template.bind({});
const progressPercentage= "80";
Resultcard.args = {
  heading: "Bed Bath & Beyond Audit",
  subHeading: "Bed Bath & Beyond ",
  status: "COMPLETE",
  img: ``,
  progress: "80",
  auditors: ["","test"],
  reviewers: ["","test"],
  auditorText:"Auditors",
  reviewerText:"Reviewer",
  progressText: `Progress ${progressPercentage}%`,
  altText:"ResultCardImg"
};
