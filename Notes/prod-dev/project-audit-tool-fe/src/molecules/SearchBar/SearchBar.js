import React, { useState } from "react";
import Input from "../../atoms/inputs/input";
import Anchor from "../../atoms/Anchor/Anchor";

//import Button from '../../atoms/Button/Button';
//import { ThemeProvider } from "styled-components";
//import {lightTheme} from '../../Theme';

import withStyles from "../../withstyle";
import { SearchBarStyle } from "./searchBar.style";

const SearchBar = ({ className, JSONDATA }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const results = () => {
    console.log("in results");
    document.getElementsByClassName("results")[0].style.display = "none"
  }
  const onclickshow = () => {
    document.getElementsByClassName("results")[0].style.display = "block";
  }
  return (
    <div className={`${className}`}>
      <Input
        className="username"
        type="search"
        placeholder="Search By Audit name or Project name"
        value={searchTerm}
        ariaLabel="Search"
        title="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        onFocus={() => { onclickshow() }}
      />
      <div className="results">
        {JSONDATA.filter((val) => {
          if (searchTerm === "") {
            return null;
          } else if (val.heading.toLowerCase().includes(searchTerm.toLowerCase())) {
            console.log(val.heading);
            return val;
          }
        }).map((val, key) => {
          return (
            <Anchor
              href={`search`}
              className="anchor"
              key={key}
              varient="primary"
              aria-label={val.heading}
              onClick={(event) => {
                setSearchTerm("");
              }}
            >
              {val.heading}
            </Anchor>
          );
        })}
      </div>
    </div>
  );
};

export default withStyles(SearchBar, SearchBarStyle);

export { SearchBar as SearchBarNotStyled };
