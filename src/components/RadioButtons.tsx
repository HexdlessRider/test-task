import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedOption } from "../store/actions/selectOption";
import { State } from "../store/reducer/reducer";

const radioOptions: { label: string; key: string }[] = [
  {
    label: "Option A",
    key: "a",
  },
  {
    label: "Option B",
    key: "b",
  },
  {
    label: "Option C",
    key: "C",
  },
];
const RadioButtons: React.FC = () => {
  const selected = useSelector<State, State["selectedOption"]>(
    (state) => state.selectedOption
  );

  const dispatch = useDispatch();

  const selectOption = (option: string) => {
    dispatch(selectedOption(option));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "1.5rem 0",
      }}
    >
      {radioOptions.map((item) => (
        <div className="flex items-center" key={item.key}>
          <input
            className="form-radio h-4 w-4 mr-2"
            type="radio"
            name={item.key}
            id={item.key}
            checked={selected === item.key}
            onChange={() => selectOption(item.key)}
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor={item.key}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
