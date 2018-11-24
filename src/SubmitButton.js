import React from "react";

const SubmitButton = ({ errors, dirty, isSubmitting }) => {
  const numErrors = Object.keys(errors).length;
  const isSubmittable = numErrors === 0 && dirty && !isSubmitting;
  return (
    <button type="submit" disabled={!isSubmittable}>
      Submit
    </button>
  );
};

export default SubmitButton;
