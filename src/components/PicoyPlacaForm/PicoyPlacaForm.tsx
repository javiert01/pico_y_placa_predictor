import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  daysOfWeek,
  isLastDigitInPicoyPlacaDay,
  isTimeBetweenPicoyPlacaHours,
  validationSchema,
} from "./PicoyPlacaForm.helper";
import classes from "./PicoyPlacaForm.module.css";
import { PicoyPlacaFormData } from "./PicoyPlacaForm.types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import Message from "../Message/Message";
import Card from "../Card/Card";

const PicoyPlacaForm = () => {
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<boolean>(false);

  const predictPicoyPlaca = (formData: PicoyPlacaFormData) => {
    const { licensePlate, day, hour } = formData;
    dayjs.extend(customParseFormat);
    setSuccessResult(true);
    if (day === daysOfWeek[5] || day === daysOfWeek[6]) {
      setResultMessage("You can get on the road on weekends!");
      return;
    }
    const formattedHour = dayjs(hour, "HH:mm");
    if (!isTimeBetweenPicoyPlacaHours(formattedHour)) {
      setResultMessage(
        "You can get your car on the road! You are not on Pico y Placa time"
      );
      return;
    }
    const lastDigit = parseInt(licensePlate.charAt(licensePlate.length - 1));
    if (!isLastDigitInPicoyPlacaDay(lastDigit, day)) {
      setResultMessage(
        "It's Pico y Placa time but your car is safe. You can go out on the road!"
      );
      return;
    }
    setSuccessResult(false);
    setResultMessage(
      "Your car can't be on the road! Better go out another time"
    );
  };
  return (
    <Card>
      <Formik
        initialValues={{
          licensePlate: "",
          day: "",
          hour: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          predictPicoyPlaca(values);
        }}
      >
        <Form className={classes.form}>
          <div className={classes.inputContainer}>
            <label htmlFor="licensePlate">License Plate:</label>
            <Field type="text" name="licensePlate" />
            <ErrorMessage name="licensePlate">
              {(msg) => <div className={classes.errorMessage}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="day">Select a day:</label>
            <Field name="day" id="day" as="select">
              <option value="">Select a day</option>
              {daysOfWeek.map((day) => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))}
            </Field>
            <ErrorMessage name="day">
              {(msg) => <div className={classes.errorMessage}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="hour">Choose an hour:</label>
            <Field name="hour" type="time" />
            <ErrorMessage name="hour">
              {(msg) => <div className={classes.errorMessage}>{msg}</div>}
            </ErrorMessage>
          </div>
          <div className={classes.btnContainer}>
            <button type="submit">View Result!</button>
          </div>
        </Form>
      </Formik>
      {resultMessage && (
        <Message
          message={resultMessage}
          type={successResult ? "success" : "error"}
        />
      )}
    </Card>
  );
};

export default PicoyPlacaForm;
