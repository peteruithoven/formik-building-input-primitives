import "./formik-demo.css";
import React from "react";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import Yup from "yup";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
// Helper for the demo
import { DisplayFormikState } from "./formik-demo";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "C'mon, your name is longer than that")
    .required("First name is required."),
  lastName: Yup.string()
    .min(2, "C'mon, your name is longer than that")
    .required("Last name is required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!")
});

const App = () => (
  <div className="app">
    <h1>
      Building input primitives with{" "}
      <a href="https://github.com/jaredpalmer/formik">Formik</a>
    </h1>
    <p>
      Formik's enables you to quickly build and style your own reusable
      form-related components extremely quickly.
    </p>
    <p>
      This example does just that. It demonstrates a custom text input, label,
      and form feedback components as well as a cool shake animation that's
      triggered if a field is invalid.
    </p>

    <Formik
      validationSchema={schema}
      onSubmit={(payload, { setSubmitting, setErrors }) => {
        setTimeout(() => {
          setSubmitting(false);
          setErrors({
            email: "Already exists"
          });
        }, 2000);
      }}
      displayName="MyForm"
      initialValues={{
        email: "",
        firstName: "",
        lastName: ""
      }}
    >
      {props => {
        return (
          <Form>
            <Field
              name="firstName"
              label="First Name"
              placeholder="John"
              component={TextInput}
            />
            <Field
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              component={TextInput}
            />
            <Field
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              component={TextInput}
            />
            <SubmitButton {...props} />
            <DisplayFormikState {...props} />
          </Form>
        );
      }}
    </Formik>
  </div>
);

render(<App />, document.getElementById("root"));
