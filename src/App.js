import React, { useState, useEffect } from "react";
import Tracker from "./components/Tracker";
import { useLocalStorage } from "../src/components/hooks/useLocalStorage";
import Form from "./components/Form";

function App() {
  const [firstName, setFirstName] = useLocalStorage("First Name", "First");
  const [lastName, setLastName] = useLocalStorage("Last Name", "Last");
  const [startingWeight, setStartingWeight] = useLocalStorage(
    "Starting Weight",
    ""
  );
  const [currentWeight, setCurrentWeight] = useLocalStorage(
    "Current Weight",
    ""
  );
  const [startingDate, setStartingDate] = useLocalStorage("Starting Date", "");
  const [meters, setMeters] = useLocalStorage("Meters", "");
  const [goalWeight, setGoalWeight] = useLocalStorage("Goal Weight", "");
  const [goalDate, setGoalDate] = useLocalStorage("Goal Date", "");

  const [formIsOpen, setFormIsOpen] = useState(true);
  // CLOSE FORM
  function closeFormHandler() {
    setFormIsOpen(false);
    window.location.reload(true);
  }
  // OPEN FORM
  function openFormHandler() {
    setFormIsOpen(true);
  }
  // SAVE IF FORM IS OPEN TO LOCALSTORAGE
  useEffect(() => {
    setFormIsOpen(JSON.parse(window.localStorage.getItem("Form Is Open")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Form Is Open", formIsOpen);
  }, [formIsOpen]);

  return (
    <div className="container">
      <h1 className="name">
        {firstName} {lastName}
      </h1>

      <Tracker
        currentWeight={currentWeight}
        meters={meters}
        startingWeight={startingWeight}
        startingDate={startingDate}
        goalWeight={goalWeight}
        goalDate={goalDate}
        onClick={openFormHandler}
      />

      {formIsOpen && (
        <section className="input-form">
          <Form
            firstName={firstName}
            lastName={lastName}
            startingWeight={startingWeight}
            currentWeight={currentWeight}
            startingDate={startingDate}
            meters={meters}
            goalWeight={goalWeight}
            goalDate={goalDate}
            setFirstName={(e) => setFirstName(e.target.value)}
            setLastName={(e) => setLastName(e.target.value)}
            setStartingWeight={(e) => setStartingWeight(e.target.value)}
            setCurrentWeight={(e) => setCurrentWeight(e.target.value)}
            setStartingDate={(e) => setStartingDate(e.target.value)}
            setMeters={(e) => setMeters(e.target.value)}
            setGoalWeight={(e) => setGoalWeight(e.target.value)}
            setGoalDate={(e) => setGoalDate(e.target.value)}
            onClick={closeFormHandler}
          />
        </section>
      )}
    </div>
  );
}

export default App;
