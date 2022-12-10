function InputContainer() {
  return (
    <div className="input-container">
      <div className="form-name">
        <div className="firstName">
          <label for="first-name">first name:</label>
          <input type="text" name="first-name" id="first-name" />
        </div>
        <div className="lastName">
          <label for="last-name">last name:</label>
          <input type="text" name="last-name" id="last-name" />
        </div>
      </div>
      <div className="starting-weight">
        <label for="starting-weight">current weight:</label>
        <input type="number" name="starting-weight" id="starting-weight" />
      </div>
      <div className="height">
        <label for="feet">height:</label>
        <div className="height-container">
          <input placeholder="Feet" type="number" name="feet" id="feet" />
          <input placeholder="Inches" type="number" name="inches" id="inches" />
        </div>
      </div>
      <div className="goal-stats">
        <div className="end-goal-weight">
          <label for="end-goal-weight">goal weight:</label>
          <input type="number" name="end-goal-weight" id="end-goal-weight" />
        </div>
        <div className="end-goal-date">
          <label for="end-goal-date">goal date:</label>
          <input type="number" name="end-goal-date" id="end-goal-date" />
        </div>
      </div>
      <div className="btn-container">
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputContainer;
