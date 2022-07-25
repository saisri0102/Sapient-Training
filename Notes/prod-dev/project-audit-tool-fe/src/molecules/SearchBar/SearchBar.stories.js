import React from "react";
import SearchBar from "./SearchBar";
import { storiesOf } from "@storybook/react";
import JSONDATA from "./country.json";

var searchProps = {
  input: {
    name: "username",
    type: "search",
    placeholder: "Search By Audit name or Project name",
    ariaLabel: "Search",
  },
  anchor: {
    className: "anchor",
    varient: "primary",
  },
};

storiesOf("SearchBar", module).add("searching", () => (
  <SearchBar searchProps={searchProps} JSONDATA={JSONDATA} />
));
