import React from "react";

import CategoryFilter from "./CategoryFilter";

export default {
  title: "Category Filter",
  component: CategoryFilter,
  argTypes: {},
};

const Template = (args) => <CategoryFilter {...args} />;

export const categoryFilter = Template.bind({});
categoryFilter.args = {
  width: "200px",
  buttonVarient: "secondary",
  heading: "CATEGORY",
  btnText: "Clear",
  categoryTypes: [
    {
      label: "Select a Category",
      value: "0",
      status:false
    },
    {
      label: "Retail",
      value: "Retail",
      status:false
    },
    {
      label: "Banking",
      value: "Banking",
      status:false
    },
    {
      label: "Insurance",
      value: "Insurance",
      status:false
    },
    {
      label: "Hospitality",
      value: "Hospitality",
      status:false
    },
  ],
};
