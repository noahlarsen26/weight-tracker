import EnterWeightBtn from "./EnterWeightBtn";
import { useContext } from "react";
import { Context } from "../App";

function Form() {
  const {
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
    closeFormHandler,
  } = useContext(Context);
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
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <label htmlFor="last-name">last name:</label>
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setStartingWeight(e.target.value)}
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
              onChange={(e) => setCurrentWeight(e.target.value)}
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
                onChange={(e) => setMeters(e.target.value)}
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
              onChange={(e) => setGoalWeight(e.target.value)}
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
              onChange={(e) => setStartingDate(e.target.value)}
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
              onChange={(e) => setGoalDate(e.target.value)}
              type="date"
              name="end-goal-date"
              id="end-goal-date"
            />
          </div>
          <EnterWeightBtn
            onClick={closeFormHandler}
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
