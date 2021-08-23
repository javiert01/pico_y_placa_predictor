import { Formik, Field, Form, ErrorMessage } from "formik";
import { daysOfWeek, validationSchema } from "./PicoyPlacaForm.helper";
import classes from "./PicoyPlacaForm.module.css";


const PicoyPlacaForm = () => {
 
  return (
    <Formik
      initialValues={{
        licensePlate: "",
        day: "",
        hour: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("logging values!", values);
      }}
    >
      <Form className={classes.form}>
        <div className={classes.inputContainer}>
          <label htmlFor="licensePlate">License Plate:</label>
          <Field type="text" name="licensePlate" />
          <ErrorMessage name="licensePlate" />
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
          <ErrorMessage name="day" />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="hour">Choose an hour:</label>
          <Field name="hour" type="time" />
          <ErrorMessage name="hour" />
        </div>
        <div className={classes.btnContainer}>
          <button type="submit">View Result!</button>
        </div>
      </Form>
    </Formik>
  );
};

export default PicoyPlacaForm;
