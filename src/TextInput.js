import React from "react";
import InputFeedback from "./InputFeedback";
import Label from "./Label";
import classnames from "classnames";

const TextInput = ({ type, label, form, field, ...props }) => {
  const { name } = field;
  const error = form.errors[name];
  const touched = form.touched[name];
  const classes = classnames("input-group", {
    "animated shake error": !!error && touched
  });
  return (
    <div className={classes}>
      <Label htmlFor={name}>{label}</Label>
      <input id={name} className="text-input" {...field} {...props} />
      {touched && error && <InputFeedback error={error} />}
    </div>
  );
};

export default TextInput;
