import React, { useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

const Task2 = () => {
  const [data, setData] = useState([
    { firstname: [{ value: "", type: "" }], initial: "" },
  ]);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          style={{ marginRight: "25px" }}
          type="email"
          placeholder="Text"
          onChange={(e) => setData([])}
          name="first"
        />
        <input
          type="text"
          onChange={(e) => setData({ ...data, initial: e.target.value })}
          placeholder="Text"
          name="second"
          disabled={data.firstname.length === 0}
        />

        {data.firstname.length > 0 && data.initial.length === 0 ? (
          <span>Required</span>
        ) : null}

        {/* {formik.values.first.length > 0 || formik.values.second.length > 0 ? (
          <span>Required</span>
        ) : null} */}
      </div>

      <button style={{ padding: "5px 25px" }} type="submit">
        Submit
      </button>
    </form>
  );
};
export default Task2;
