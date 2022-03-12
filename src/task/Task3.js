import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

export default function Task3() {
  const [field, setField] = useState([]);

  console.log(field);

  const selectHandle = (selectData) => {
    console.log(selectData, "===data");
    if (field.includes(selectData)) {
      console.log("test");
      let filterSelect;
      console.log(field, "====totalData");
      filterSelect = field.filter((e) => e !== selectData);
      console.log(filterSelect, "result");
      setField(filterSelect);
    } else {
      setField([...field, selectData]);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Form.Group
        as={Col}
        className="container m-3"
        controlId="my_multiselect_field"
      >
        <Form.Label>My multiselect</Form.Label>
        <Form.Control
          as="select"
          multiple
          value={field}
          onChange={(e) => selectHandle(e.target.value)}
        >
          <option value="field1">Field 1</option>
          <option value="field2">Field 2</option>
          <option value="field3">Field 3</option>
        </Form.Control>
      </Form.Group>
    </form>
  );
}
