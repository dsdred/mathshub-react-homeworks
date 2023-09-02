import React from "react";
import { useFormik } from "formik";
import "./SignupForm.css";

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      console.log("omSunmit=", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Имя"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default SignupForm;
