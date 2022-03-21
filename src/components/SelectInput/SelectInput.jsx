import React from "react";
import {sort} from "../../filter-data";
import { SORT } from "../../constant/filterConstant";
import { useFilter } from "../../Context/filter-context";

const SelectInput = () => {
  const { dispactherforfilter } = useFilter();
  return (
    <div className="sort">
      <h4>SORT</h4>
      <select
        name="sorting"
        onChange={(e) =>
          dispactherforfilter({ type: SORT, payload: e.target.value })
        }
      >
        {sort.map((data) => {
          return (
            <option key={data.val} value={data.val}>
              {data.optionName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
