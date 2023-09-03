import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignupForm.css";

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      address: "",
      firstNameRecipient: "",
      phoneRecipient: "",
      addressRecipient: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(10, "ФИО не может быть меньше 10 символов")
        .required("ФИО не заполнено"),
      phone: Yup.number()
        .min(8999999999, "Телефон написан не верно. Верный формат: 9ххххххххх")
        .max(
          10000000000,
          "Телефон написан не верно. Верный формат: 9ххххххххх"
        ),
      address: Yup.string()
        .min(30, "Адрес не может быть меньше 30 символов")
        .required("Адрес не заполнен"),
      firstNameRecipient: Yup.string()
        .min(10, "ФИО не может быть меньше 10 символов")
        .required("ФИО не заполнено"),
      phoneRecipient: Yup.number()
        .min(8999999999, "Телефон написан не верно. Верный формат: 9ххххххххх")
        .max(
          10000000000,
          "Телефон написан не верно. Верный формат: 9ххххххххх"
        ),
      addressRecipient: Yup.string()
        .min(30, "Адрес не может быть меньше 30 символов")
        .required("Адрес не заполнен"),
    }),

    onSubmit: (values) => {
      console.log("omSunmit=", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <legend>
        Отправитель:
        <div className="shipmentFormSenderContainer">
          <div className="inputElement">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="ФИО"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.firstName && formik.touched.firstName
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <p>{formik.errors.firstName}</p>
            )}
          </div>
          <div className="inputElement">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Телефон"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.phone && formik.touched.phone
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p>{formik.errors.phone}</p>
            )}
          </div>
          <div className="inputElement">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Адрес"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.address && formik.touched.address
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.address && formik.touched.address && (
              <p>{formik.errors.address}</p>
            )}
          </div>
        </div>
      </legend>

      <legend>
        Получатель:
        <div className="shipmentFormRecipientContainer">
          <div className="inputElement">
            <input
              type="text"
              id="firstNameRecipient"
              name="firstNameRecipient"
              placeholder="ФИО"
              value={formik.values.firstNameRecipient}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.firstNameRecipient &&
                formik.touched.firstNameRecipient
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.firstNameRecipient &&
              formik.touched.firstNameRecipient && (
                <p>{formik.errors.firstNameRecipient}</p>
              )}
          </div>
          <div className="inputElement">
            <input
              type="tel"
              id="phoneRecipient"
              name="phoneRecipient"
              placeholder="Телефон"
              value={formik.values.phoneRecipient}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.phoneRecipient && formik.touched.phoneRecipient
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.phoneRecipient && formik.touched.phoneRecipient && (
              <p>{formik.errors.phoneRecipient}</p>
            )}
          </div>
          <div className="inputElement">
            <input
              type="text"
              id="addressRecipient"
              name="addressRecipient"
              placeholder="Адрес"
              value={formik.values.addressRecipient}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.addressRecipient &&
                formik.touched.addressRecipient
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.addressRecipient &&
              formik.touched.addressRecipient && (
                <p>{formik.errors.addressRecipient}</p>
              )}
          </div>
        </div>
      </legend>
      <button type="submit" className="standartBtn">
        ✉ Отправить
      </button>
    </form>
  );
}

export default SignupForm;
