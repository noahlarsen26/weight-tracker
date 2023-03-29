import React, { useState, useEffect } from "react";
import Tracker from "./Tracker";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Form from "../../Form";

export const TrackerContext = React.createContext();
export const FormContext = React.createContext();

function CurrentData() {
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
      <div className="back-filler">
        <div className="back-filler-1"></div>
      </div>
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
    </>
  );
}

export default CurrentData;
