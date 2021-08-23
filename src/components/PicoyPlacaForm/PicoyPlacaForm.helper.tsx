import * as Yup from "yup";
export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const validationSchema = () => {
  return Yup.object({
    licensePlate: Yup.string()
      .max(7, "Must be 7 characters or less")
      .required("Required"),
    day: Yup.string().required("Required"),
    hour: Yup.string().required("Required"),
  });
};
