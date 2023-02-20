import React, { useState, useEffect } from "react";
import Tracker from "./components/Tracker";
import { useLocalStorage } from "../src/components/hooks/useLocalStorage";
import Form from "./components/Form";

export const Context = React.createContext();

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
    <Context.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        startingWeight,
        setStartingWeight,
        currentWeight,
        setCurrentWeight,
        startingDate,
        setStartingDate,
        meters,
        setMeters,
        goalWeight,
        setGoalWeight,
        goalDate,
        setGoalDate,
        closeFormHandler,
        openFormHandler,
      }}
    >
      <div className="container">
        <h1 className="name">
          {firstName} {lastName}
        </h1>
        <Tracker />
        {formIsOpen && (
          <section className="input-form">
            <Form />
          </section>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
