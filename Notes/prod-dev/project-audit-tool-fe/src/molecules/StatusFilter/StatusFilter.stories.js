import React from "react";

import StatusFilter from "./StatusFilter";

export default {
  title: "Status Filter",
  component: StatusFilter,
  argTypes: {},
};

const Template = (args) => <StatusFilter {...args} />;

export const statusFilter = Template.bind({});
statusFilter.args = {
  width: "200px",
  buttonVarient: "secondary",
  heading: "STATUS",
  filters: [
    {
      label: "Complete",
      status: true,
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
  btnText: "Clear",
};
