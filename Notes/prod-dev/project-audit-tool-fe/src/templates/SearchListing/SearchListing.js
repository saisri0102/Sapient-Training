import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import Result from "../../organisms/Result/Result";
import SearchFilter from "../../organisms/SearchFilter/SearchFilter";
import { SearchListingStyle } from "./SearchListing.style"; 

const SearchListing = ({
  className,
  statusHeading,
  statusFilters,
  categoryFilters,
  defaultProgress,
  btnText,
}) => {
  const [ResultData, setfilterData] = useState([]);
  console.log(ResultData);
  return (
    <div className={`${className}`}>
      <div className="mainbody">
        <SearchFilter
          buttonVarient={"secondary"}
          heading={statusHeading}
          filterTypes={statusFilters}
          categoryTypes={categoryFilters}
          defaultProgress={defaultProgress}
          btnText={btnText}
          DataChange={setfilterData}
          className="filterStyle"
        ></SearchFilter>
        <div className="resultStyle">
          <Result ResultData={ResultData} DataChange={setfilterData}></Result>
        </div>
      </div>
    </div>
  );
};

export default withStyles(SearchListing, SearchListingStyle);
export { SearchListing as SearchListingNotStyled };

SearchListing.propTypes = {
  statusHeading: PropTypes.string,
  statusFilter: PropTypes.object,
  categoryFilter: PropTypes.object,
  defaultProgress: PropTypes.number,
  btnText: PropTypes.string,
};

SearchListing.defaultProps = {
  statusHeading: "STATUS",
  statusFilters: [
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
  categoryFilters: [
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
};
