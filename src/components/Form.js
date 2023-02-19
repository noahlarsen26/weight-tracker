// import { useLocalStorage } from "./hooks/useLocalStorage";
import EnterWeightBtn from "./EnterWeightBtn";

function Form({
  firstName,
  lastName,
  startingWeight,
  currentWeight,
  startingDate,
  meters,
  goalWeight,
  goalDate,
  setFirstName,
  setLastName,
  setStartingWeight,
  setCurrentWeight,
  setStartingDate,
  setMeters,
  setGoalWeight,
  setGoalDate,
  onClick,
}) {
  // SAVE FORM DATA TO LOCAL STORAGE
  // const [startingWeight, setStartingWeight] = useLocalStorage(
  //   "Starting Weight",
  //   ""
  // );
  // const [currentWeight, setCurrentWeight] = useLocalStorage(
  //   "Current Weight",
  //   ""
  // );
  // const [startingDate, setStartingDate] = useLocalStorage("Starting Date", "");
  // const [meters, setMeters] = useLocalStorage("Meters", "");
  // const [goalWeight, setGoalWeight] = useLocalStorage("Goal Weight", "");
  // const [goalDate, setGoalDate] = useLocalStorage("Goal Date", "");

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="form-container">
        <div className="form-heading">
          <h2>please enter your information</h2>
        </div>
        <div className="input-container">
          <div>
            <label htmlFor="first-name">first name:</label>
            <input
              required
              value={firstName}
              onChange={setFirstName}
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <label htmlFor="last-name">last name:</label>
            <input
              required
              value={setLastName}
              onChange={lastName}
              type="text"
              name="last-name"
              id="last-name"
            />
          </div>
          <div>
            <label htmlFor="starting-weight">
              starting weight (kilograms):
            </label>
            <input
              required
              value={startingWeight}
              onChange={setStartingWeight}
              type="number"
              name="starting-weight"
              id="starting-weight"
            />
          </div>
          <div>
            <label htmlFor="current-weight">
              enter current weight (kilograms):
            </label>
            <input
              required
              value={currentWeight}
              onChange={setCurrentWeight}
              type="number"
              name="current-weight"
              id="current-weight"
            />
          </div>
          <div>
            <label htmlFor="meters">height (centimeters):</label>
            <div className="height-container">
              <input
                required
                value={meters}
                onChange={setMeters}
                placeholder="Centimeters"
                type="number"
                name="meters"
                id="meters"
              />
            </div>
          </div>
          <div>
            <label htmlFor="end-goal-weight">goal weight (kilograms):</label>
            <input
              required
              value={goalWeight}
              onChange={setGoalWeight}
              type="number"
              name="end-goal-weight"
              id="end-goal-weight"
            />
          </div>
          <div>
            <label htmlFor="start-goal-date">starting date:</label>
            <input
              required
              value={startingDate}
              onChange={setStartingDate}
              type="date"
              name="start-goal-date"
              id="start-goal-date"
            />
          </div>
          <div>
            <label htmlFor="end-goal-date">goal date:</label>
            <input
              required
              value={goalDate}
              onChange={setGoalDate}
              type="date"
              name="end-goal-date"
              id="end-goal-date"
            />
          </div>
          <EnterWeightBtn
            onClick={onClick}
            divClassName={"btn-container"}
            btnClassName={"form-btn"}
            input={"Submit"}
            type={"submit"}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
