import React from "react";
import "./Filter.css";
import FilterItem from "./filterItem/FilterItem";

const Filter = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filter;
