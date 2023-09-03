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
      shippingWeight: undefined,
      insurance: false,
      parcelLength: undefined,
      parcelWidth: undefined,
      parcelHeight: undefined,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(10, "ФИО не может быть меньше 10 символов")
        .required("ФИО не заполнено"),
      phone: Yup.number()
        .min(8999999999, "Телефон написан не верно. Верный формат: 9ххххххххх")
        .max(10000000000, "Телефон написан не верно. Верный формат: 9ххххххххх")
        .required("Телефон не заполнен"),
      address: Yup.string()
        .min(30, "Адрес не может быть меньше 30 символов")
        .required("Адрес не заполнен"),
      firstNameRecipient: Yup.string()
        .min(10, "ФИО не может быть меньше 10 символов")
        .required("ФИО не заполнено"),
      phoneRecipient: Yup.number()
        .min(8999999999, "Телефон написан не верно. Верный формат: 9ххххххххх")
        .max(10000000000, "Телефон написан не верно. Верный формат: 9ххххххххх")
        .required("Телефон не заполнен"),
      addressRecipient: Yup.string()
        .min(30, "Адрес не может быть меньше 30 символов")
        .required("Адрес не заполнен"),
      shippingWeight: Yup.number().min(
        0,
        "Вес отправления не может быть отрицательным"
      ),
      parcelLength: Yup.number().min(0, "Длина не может быть отрицательной"),
      parcelWidth: Yup.number().min(0, "Ширина не может быть отрицательной"),
      parcelHeight: Yup.number().min(0, "Высота не может быть отрицательной"),
    }),
    onSubmit: (values) => {
      console.log("On submit=", values);
    },
  });

  // console.log("значения=", formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <legend className="blockLegend">
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

      <legend className="blockLegend">
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

      <legend className="blockLegend">
        Параметры:
        <div className="shipmentFormOptionsContainer">
          <div>
            <input
              type="radio"
              id="sendType1"
              name="sendType"
              value={formik.values.sendType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label for="sendType1">Обычное</label>

            <input
              type="radio"
              id="sendType2"
              name="sendType"
              value={formik.values.sendType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label for="sendType2">Заказное</label>

            <input
              type="radio"
              id="sendType3"
              name="sendType"
              value={formik.values.sendType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label for="sendType3">Срочное</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="insurance"
              name="insurance"
              value={formik.values.insurance}
            />
            <label for="insurance">Страхование</label>
          </div>

          <div className="inputElement">
            <input
              type="number"
              id="shippingWeight"
              name="shippingWeight"
              placeholder="Вес отправления (кг)"
              value={formik.values.shippingWeight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.shippingWeight && formik.touched.shippingWeight
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.shippingWeight && formik.touched.shippingWeight && (
              <p>{formik.errors.shippingWeight}</p>
            )}
          </div>
        </div>
      </legend>

      <legend className="blockLegend">
        Габариты:
        <div className="shipmentFormDimensionsContainer">
          <div className="inputElement">
            <input
              type="number"
              id="parcelLength"
              name="parcelLength"
              placeholder="Длина"
              value={formik.values.parcelLength}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.parcelLength && formik.touched.parcelLength
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.parcelLength && formik.touched.parcelLength && (
              <p>{formik.errors.parcelLength}</p>
            )}
          </div>

          <div className="inputElement">
            <input
              type="number"
              id="parcelWidth"
              name="parcelWidth"
              placeholder="Ширина"
              value={formik.values.parcelWidth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.parcelWidth && formik.touched.parcelWidth
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.parcelWidth && formik.touched.parcelWidth && (
              <p>{formik.errors.parcelWidth}</p>
            )}
          </div>

          <div className="inputElement">
            <input
              type="number"
              id="parcelHeight"
              name="parcelHeight"
              placeholder="Высота"
              value={formik.values.parcelHeight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.parcelHeight && formik.touched.parcelHeight
                  ? "errorInputStyle"
                  : "standartInputStyle"
              }`}
            />
            {formik.errors.parcelHeight && formik.touched.parcelHeight && (
              <p>{formik.errors.parcelHeight}</p>
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
