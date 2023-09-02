import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignupForm.css";

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Не может быть длиннее 15 символов")
        .required("Нужно имя"),
      // lastName: Yup.string()
      //   .max(20, 'Не может быть длиннее 20 символов')
      //   .required('Нужна фамилия'),
      // email: Yup.string().email('Невалидный email').required('Нужен email'),
    }),
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
        {formik.errors.firstName && formik.touched.firstName && (
          <p>{formik.errors.firstName}</p>
        )}
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default SignupForm;
