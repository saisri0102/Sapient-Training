import React from "react";
import SearchListing  from "./SearchListing";

export default {
  title: "Template/Search Template",
  component: SearchListing,
  argTypes: {},
};

const Template = (args) => <SearchListing {...args} />;

export const searchListing = Template.bind({});
searchListing.args = {
  
};