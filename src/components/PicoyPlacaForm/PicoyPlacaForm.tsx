import { daysOfWeek } from "./PicoyPlacaForm.helper";
import classes from "./PicoyPlacaForm.module.css";

const PicoyPlacaForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.inputContainer}>
        <label htmlFor="licensePlate">License Plate:</label>
        <input type="text" required id="licensePlate" placeholder="Enter your license plate"/>
      </div>
      <div>
        <label htmlFor="days">Select a day:</label>
        <select name="days" id="days">
          {daysOfWeek.map((day) => (
            <option value={day}>{day}</option>
          ))}
        </select>
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="hour">Choose an hour:</label>
        <input type="time" required id="hour" />
      </div>
      <div className={classes.btnContainer}>
        <button>View Result!</button>
      </div>
    </form>
  );
};

export default PicoyPlacaForm;