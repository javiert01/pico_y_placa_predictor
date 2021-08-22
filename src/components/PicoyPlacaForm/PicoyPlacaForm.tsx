import { daysOfWeek } from "./PicoyPlacaForm.helper";

const PicoyPlacaForm = () => {
  return (
    <form >
      <div >
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
      <div >
        <label htmlFor="hour">Choose an hour:</label>
        <input type="time" required id="hour" />
      </div>
      <div>
        <button>View Result!</button>
      </div>
    </form>
  );
};

export default PicoyPlacaForm;