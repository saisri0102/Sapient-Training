import React from "react";

import SearchFilter from "./SearchFilter";

export default {
  title: "Search Filter",
  component: SearchFilter,
  argTypes: {},
};

const Template = (args) => <SearchFilter {...args} />;

export const statusFilter = Template.bind({});
statusFilter.args = {
  width: "200px",
  buttonVarient: "secondary",
  heading: "STATUS",
  filterTypes: [
    {
      label: "Complete",
      status: false,
    },
    {
      label: "Incomplete",
      status: false,
    },
    {
      label: "Closed",
      status: false,
    },
    {
      label: "Revisit",
      status: false,
    },
  ],
  categoryTypes: [
    {
      label: "Select a Category",
      value: "0",
      status: false,
    },
    {
      label: "Retail",
      value: "Retail",
      status: false,
    },
    {
      label: "Banking",
      value: "Banking",
      status: false,
    },
    {
      label: "Insurance",
      value: "Insurance",
      status: false,
    },
    {
      label: "Hospitality",
      value: "Hospitality",
      status: false,
    },
  ],
  defaultProgress: 0,
  btnText: "ClearAll",
  DataChange: () => {},
};
