import React from "react";
import withStyles from "../../withstyle";
import ResultHeader from "../../molecules/ResultHeader/ResultHeader";
import ResultCard from "../../molecules/ResultCard/ResultCard";

function sortByProperty(property, order) {
  if (order === "ASC")
    return function (a, b) {
      return b[property].localeCompare(a[property]);
    };
  else {
    return function (a, b) {
      return a[property].localeCompare(b[property]);
    };
  }
}

const Result = ({ ...dataprops }) => {
  const { ResultData, DataChange } = dataprops;
  const defaultState = {
    sort: "progress",
    order: "ASC",
  };
  const [sortState, setSortState] = React.useState(defaultState);

  const sortBy = (a) => {
    if (a === null || a === "Progress") {
      a = "progress";
    } else if (a === "Name") {
      a = "heading";
    }

    setSortState({
      ...sortState,
      sort: a,
    });
  };

  const orderBy = (a) => {
    if (a === null || a === "ascending") a = "ASC";
    else if (a === "descending") a = "DSC";

    setSortState({
      ...sortState,
      order: a,
    });
  };

  const changeData = () => {
    const newData = ResultData.sort(
      sortByProperty(sortState.sort, sortState.order)
    );
    console.log(sortState);
    DataChange(newData);
  };

  React.useEffect(() => {
    changeData();
  });
  // console.log(sortState)
  return (
    <React.Fragment>
      {/* {console.log(sortState)} */}
      <ResultHeader
        resultCount={ResultData.length}
        resultText="Results"
        sortBy={sortBy}
        orderBy={orderBy}
      />
      <div data-testid="result">
        {ResultData.map((result, index) => (
          <ResultCard
            key = {result.heading}
            heading={result.heading}
            subHeading={result.subHeading}
            status={result.status}
            progress={result.progress}
            auditors={result.auditors}
            reviewers={result.reviewers}
            auditorText="Auditors"
            reviewerText="Reviewer"
            progressText={`Progress ${result.progress}%`}
            altText="Result Image"
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default withStyles(Result);

export { Result as ResultNotStyled };
