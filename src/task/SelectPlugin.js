import { useState } from "react";
import Select from "react-select";
import React from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function MultiSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(selectedOption, "data");

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
        isSearchable
        placeholder="Multi Select"
      />
    </div>
  );
}
