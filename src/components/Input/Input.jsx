import React from "react";
import "./input.css";
import { useFilter } from "../../Context/filter-context";

const Input = ({ inputs }) => {
  const { dispactherforfilter } = useFilter();
  const { data, tocheck } = inputs;
  return (
    <div className="filter-wrapper flex-col">
      {data.map((inputVar) => {
        return (
          <div key={inputVar.val}>
            <label
              className="flex-row spac_bord cur-point"
              htmlFor={inputVar.inputName}
            >
              <input
                className="acc-color"
                type={inputVar.inputType}
                name={inputVar.name}
                id={inputVar.inputName}
                value={inputVar.val}
                checked={
                  inputVar.inputType === "checkbox"
                    ? tocheck[inputVar.match]
                    : tocheck === inputVar.val
                }
                onChange={() => {
                  dispactherforfilter({
                    type: inputVar.type,
                    payload: inputVar.val,
                  });
                }}
              />
              {inputVar.inputName}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Input;
