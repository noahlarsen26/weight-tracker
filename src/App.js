import React, { useState, useEffect } from "react";
import Tracker from "./components/tracker/Tracker";
import { useLocalStorage } from "../src/components/hooks/useLocalStorage";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

export const TrackerContext = React.createContext();
export const FormContext = React.createContext();

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
    <>
      <Navbar />
      <div className="container">
        <h1 className="name">
          {firstName} {lastName}
        </h1>
        <TrackerContext.Provider
          value={{
            openFormHandler,
            currentWeight,
            meters,
            startingWeight,
            goalWeight,
            startingDate,
            goalDate,
          }}
        >
          <Tracker />
        </TrackerContext.Provider>
        {formIsOpen && (
          <FormContext.Provider
            value={{
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
            }}
          >
            <section className="input-form">
              <Form />
            </section>
          </FormContext.Provider>
        )}
      </div>
    </>
  );
}

export default App;
