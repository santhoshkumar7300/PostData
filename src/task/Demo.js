import { ErrorMessage, useFormik } from "formik";
import { useEffect } from "react";
import { Form } from "react-bootstrap";

let EMAIL_REGEX = new RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default function Demo() {
  const formik = useFormik({
    initialValues: {
      emailSlots: [
        { email: "", msg: "" },
        { email: "", msg: "" },
        { email: "", msg: "" },
        { email: "", msg: "" },
      ],
    },

    validate: (values) => {
      let error = {
        emailSlots: [
          { email: "", msg: "" },
          { email: "", msg: "" },
          { email: "", msg: "" },
          { email: "", msg: "" },
        ],
      };
      let flag = 0;
      values.emailSlots.forEach((a, index) => {
        if (a.email) {
          if (!EMAIL_REGEX.test(a.email)) {
            flag++;
            error.emailSlots[index].email = "Invalid Email Address";
          }
        }
        if (a.email.length > 0 && a.msg.length === 0) {
          flag++;
          error.emailSlots[index].msg = "Required";
        }
      });

      if (flag === 0) {
        return {};
      }

      console.log(error);
      return error;
    },
    onSubmit: (values) => {
      console.log("kjkjkjkjkjk");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {formik.values.emailSlots.map((e, index) => (
        <Form.Group className="mb-3 container d-flex justify-content-between">
          <Form.Control
            style={{ width: "45%" }}
            type="text"
            className="mt-5"
            name="email"
            placeholder="Enter email"
            onChange={(event) => {
              formik.setFieldValue(
                `emailSlots[${index}].email`,
                event.target.value
              );
            }}
            value={e?.email || ""}
          />

          <Form.Text>
            {formik?.errors?.emailSlots?.[index]?.email || ""}
          </Form.Text>

          <Form.Control
            style={{ width: "45%" }}
            type="text"
            className="mt-5"
            name="msg"
            placeholder="Enter Message"
            onChange={(event) =>
              formik.setFieldValue(
                `emailSlots[${index}].msg`,
                event.target.value
              )
            }
            value={e.msg}
            disabled={e.email.length === 0}
          />
          <Form.Text>
            {formik?.errors?.emailSlots?.[index]?.msg || ""}
          </Form.Text>
        </Form.Group>
      ))}
      <button type="submit" className=" btn btn-outline-primary">
        Submit
      </button>
    </Form>
  );
}
