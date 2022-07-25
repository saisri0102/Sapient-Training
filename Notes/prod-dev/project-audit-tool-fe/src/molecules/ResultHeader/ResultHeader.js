import React from "react";
import withStyles from "../../withstyle";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import { ResultHeaderStyle } from "./ResultHeader.style";
import PropTypes from "prop-types";

const ResultHeader = ({ className, resultCount, ...dataprops }) => {
  const {resultText, sortBy, orderBy} = dataprops;
  const RESULTCOUNT = (resultCount>=0) ? `(${resultCount})`: `(0)`;
  return (
    <div className={`${className}`} >
      <span className="result-parent">
        <span className="result-title">
          <h2 data-testid="rc2">{resultText}</h2>
          <h2 className="grey-font">{RESULTCOUNT}</h2>
        </span>
        <span className="result-dropdown">
          <Dropdown
            className="order"
            labelclassName="orderbylabel"
            labelname="Order By: "
            onChange={(event) => orderBy(event.target.value)}
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
          <Dropdown
            className="sort"
            labelclassName="sortbylabel"
            labelname="Sort By: "
            onChange={(event) => sortBy(event.target.value)}
            options={[
              {
                label: "Progress",
                value: "progress",
              },
              {
                label: "Name",
                value: "Name",
              },
              
            ]}
          />
        </span>
      </span>
    </div>
  );
};
ResultHeader.propTypes = {
  className: PropTypes.string,
  resultCount: PropTypes.number
}

ResultHeader.propTypes = {
  className:"",
  resultCount: "0"
}
export default withStyles(ResultHeader, ResultHeaderStyle);

export { ResultHeader as ResultHeaderNotStyled };
