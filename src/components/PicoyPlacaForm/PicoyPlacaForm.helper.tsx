import dayjs from "dayjs";
import * as Yup from "yup";
import isBetween from "dayjs/plugin/isBetween";
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

export const isTimeBetweenPicoyPlacaHours = (time: dayjs.Dayjs) => {
  dayjs.extend(isBetween);
  const startMorningHour = dayjs("07:00", "HH:mm");
  const endMorningHour = dayjs("09:30", "HH:mm");
  const startEveningHour = dayjs("16:00", "HH:mm");
  const endEveningHour = dayjs("19:30", "HH:mm");
  if (time.isBetween(startMorningHour, endMorningHour)) {
    return true;
  }
  if (time.isBetween(startEveningHour, endEveningHour)) {
    return true;
  }
  return false;
};

export const isLastDigitInPicoyPlacaDay = (lastDigit: number, day: string) => {
  if (lastDigit !== 0) {
    let minusNumber = lastDigit % 2 !== 0 ? 0 : 1;
    for (let i = 1; i <= lastDigit; i++) {
      if (lastDigit % 2 === 0 && i % 2 === 0) {
        minusNumber++;
      }
      if (lastDigit % 2 !== 0 && i % 2 !== 0) {
        minusNumber++;
      }
    }
    lastDigit -= minusNumber;
    return day === daysOfWeek[lastDigit];
  }
  return day === daysOfWeek[4];
};
