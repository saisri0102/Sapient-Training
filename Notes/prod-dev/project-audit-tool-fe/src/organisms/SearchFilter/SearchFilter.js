import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { SearchFilterStyle } from "./SearchFilter.style";
import Button from "../../atoms/Button/Button";
import CategoryFilter from "../../molecules/CategoryFilter/CategoryFilter";
import StatusFilter from "../../molecules/StatusFilter/StatusFilter";
import ProgressFilter from "../../molecules/ProgressFilter/ProgressFilter";

const SearchFilter = ({
  className,
  width,
  step,
  buttonVarient,
  heading,
  btnText,
  defaultProgress,
  categoryTypes,
  filterTypes,
  DataChange,
}) => {
  let defaultFilterState = { status: [], category: "", progress: "" };
  const [Progress, setProgress] = React.useState(defaultProgress);
  const [event3, setEvent] = React.useState("");
  const [categories, setCategories] = React.useState([...categoryTypes]);
  const [filters, setFilters] = React.useState([...filterTypes]);
  const [filterArr, setFilterArr] = React.useState(defaultFilterState);
  const defaultFilter = [...filterTypes];

  const defaultCat = [...categoryTypes];

  const onProgressChange = (event) => {
    setProgress(event.target.value);
    setEvent(event);
    setFilterArr({ ...filterArr, progress: event.target.value });
  };
  console.log(filterArr);
  const onFilterChange = (index) => {
    let changedFilters = [
      ...filters.slice(0, index),
      { label: filters[index].label, status: !filters[index].status },
      ...filters.slice(index + 1),
    ];
    setFilters(changedFilters);
    let statusFilter = [];
    changedFilters.forEach((filter) => {
      if (filter.status) {
        statusFilter.push(filter.label.toUpperCase());
      }
    });
    setFilterArr({ ...filterArr, status: [...statusFilter] });
  };
  const onCategoryChange = (event) => {
    let index = event.target.options.selectedIndex;
    let changedCategory = [
      ...defaultCat.slice(0, index),
      {
        label: defaultCat[index].label,
        value: defaultCat[index].value,
        status: !defaultCat[index].status,
      },
      ...defaultCat.slice(index + 1),
    ];

    setCategories(changedCategory);
    setFilterArr({
      ...filterArr,
      category: event.target[event.target.options.selectedIndex].innerHTML,
    });
  };

  const onFilterClear = () => {
    setFilters(defaultFilter);
    setFilterArr({ ...filterArr, status: [] });
  };
  const onCatClear = () => {
    setCategories(defaultCat);
    setFilterArr({ ...filterArr, category: "" });
  };

  const onProgressClear = () => {
    if (event3) {
      event3.target.value = defaultProgress;
    }
    setProgress(defaultProgress);
    setFilterArr({ ...filterArr, progress: "" });
  };

  const clearAllFilters = () => {
    onFilterClear();
    onCatClear();
    onProgressClear();
    setFilterArr(defaultFilterState);
  };
  const filterData = async () => {
    const response = await fetch("http://localhost:5000/results", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }).then((res) => res.json());
    let ResultData = response.filter(
      (result) => result.progress >= filterArr.progress
    );
    if (filterArr.status.length) {
      ResultData = ResultData.filter((result) =>
        filterArr.status.includes(result.status)
      );
    }
    console.log(ResultData);
    DataChange(ResultData);
  };

  React.useEffect(() => {
    filterData();
  }, [filterArr]);
  return (
    <div className={`${className}`} width={width} data-testid="filter">
      <div className="flex margin">
        <h2 className="margin">Filters</h2>
        <Button
          varient={buttonVarient}
          size="small"
          btnText={btnText}
          style={{ padding: "0", width: "2.8rem" }}
          onClick={clearAllFilters}
        />
      </div>
      <div className="margin">
        <StatusFilter
          width="auto"
          buttonVarient="secondary"
          heading="STATUS"
          filters={filters}
          btnText="Clear"
          onChange={onFilterChange}
          onClick={onFilterClear}
        />
      </div>
      <div className="margin">
        <CategoryFilter
          width="auto"
          buttonVarient="secondary"
          heading="CATEGORY"
          categoryTypes={categories}
          btnText="Clear"
          onChange={onCategoryChange}
          onClick={onCatClear}
        />
      </div>
      <div className="margin">
        <ProgressFilter
          width="auto"
          buttonVarient="secondary"
          heading="PROGRESS"
          btnText="Clear"
          step={step}
          onClick={onProgressClear}
          onChange={onProgressChange}
          defaultValue={Progress}
          title={Progress}
        />
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  width: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  categoryTypes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  filters: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      status: PropTypes.bool,
    })
  ),
  step: PropTypes.number,
  buttonVarient: PropTypes.string,
  btnText: PropTypes.string,
};

SearchFilter.defaultProps = {
  width: "",
  filters: [],
  onClick: () => {},
  onChange: () => {},
  buttonVarient: "",
  step: 1,
  categoryTypes: [],
  heading: "",
  btnText: "",
  DataChange: () => {},
};

export default withStyles(SearchFilter, SearchFilterStyle);
export { SearchFilter as SearchFilterNotStyled };
