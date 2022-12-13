import { useLocalStorage } from "../hooks/useLocalStorage";

function InputContainer(props) {
  const [firstName, setFirstName] = useLocalStorage("First Name", "");
  const [lastName, setLastName] = useLocalStorage("Last Name", "");
  const [startingWeight, setStartingWeight] = useLocalStorage(
    "Starting Weight",
    0
  );
  const [feet, setFeet] = useLocalStorage("Feet", 0);
  const [inches, setInches] = useLocalStorage("Inches", 0);
  const [goalWeight, setGoalWeight] = useLocalStorage("Goal Weight", 0);
  const [goalDate, setGoalDate] = useLocalStorage("Goal Date", "");

  if (
    firstName &&
    lastName &&
    startingWeight &&
    feet &&
    inches &&
    goalWeight &&
    goalDate === !""
  ) {
  }

  return (
    <div className="input-container">
      <div className="firstName">
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
      <div className="lastName">
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
      <div className="starting-weight">
        <label htmlFor="starting-weight">current weight:</label>
        <input
          required
          value={startingWeight}
          onChange={(e) => setStartingWeight(e.target.value)}
          type="number"
          name="starting-weight"
          id="starting-weight"
        />
      </div>
      <div className="height">
        <label htmlFor="feet">height:</label>
        <div className="height-container">
          <input
            required
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            placeholder="Feet"
            type="number"
            name="feet"
            id="feet"
          />
          <input
            required
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            placeholder="Inches"
            type="number"
            name="inches"
            id="inches"
          />
        </div>
      </div>
      <div className="end-goal-weight">
        <label htmlFor="end-goal-weight">goal weight:</label>
        <input
          required
          value={goalWeight}
          onChange={(e) => setGoalWeight(e.target.value)}
          type="number"
          name="end-goal-weight"
          id="end-goal-weight"
        />
      </div>
      <div className="end-goal-date">
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
      <div className="btn-container">
        <button onClick={props.changeName} type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputContainer;
