import React from "react";
import { storiesOf } from "@storybook/react";

import Dropdown from "./Dropdown"; 

storiesOf("Dropdown", module)
  .add("Order", () => (
    <Dropdown
      className="order"
      labelclassName="orderbylabel"
      labelname="Order By: "
      onChange={() => {
        console.log("Onchange Event");
      }}
      options={[
        {
          label: "ASC",
          value: "ascending",
        },
        {
          label: "DSC",
          value: "descending",
        },
      ]}
    />
  ))
  .add("Sort", () => (
    <Dropdown
      className="sort"
      labelclassName="sortbylabel"
      labelname="Sort By: "
      onChange={() => {
        console.log("Onchange Event");
      }}
      options={[
        {
          label: "Name",
          value: "name",
        },
        {
          label: "Author",
          value: "author",
        },
        {
          label: "Progress",
          value: "progress",
        },
      ]}
    />
  ))
  .add("Category-Large", () => (
    <Dropdown
      className="category-form"
      labelclassName=""
      labelname=""
      onChange={() => {
        console.log("Onchange Event");
      }}
      options={[
        {
          label: "Select a Category",
          value: "0",
        },
        {
          label: "Mango",
          value: "mango",
        },
        {
          label: "Banana",
          value: "banana",
        },
        {
          label: "Pineapple",
          value: "pineapple",
        },
      ]}
    />
  ))
  .add("CategorySmall", () => (
    <Dropdown
      className="category-sm"
      abelclassName=""
      labelname=""
      onChange={() => {
        console.log("Onchange Event");
      }}
      options={[
        {
          label: "Select a Category",
          value: "0",
        },
        {
          label: "Mango",
          value: "mango",
        },
        {
          label: "Banana",
          value: "banana",
        },
        {
          label: "Pineapple",
          value: "pineapple",
        },
      ]}
    />
  ));
