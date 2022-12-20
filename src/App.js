import React, { useState, useEffect } from "react";
import Tracker from "./components/Tracker";
import { useLocalStorage } from "../src/components/hooks/useLocalStorage";
import Form from "./components/Form";

function App() {
  const [firstName, setFirstName] = useLocalStorage("First Name", "First");
  const [lastName, setLastName] = useLocalStorage("Last Name", "Last");

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

      <Tracker onClick={openFormHandler} />

      {formIsOpen && (
        <section className="input-form">
          <Form onClick={closeFormHandler} />
        </section>
      )}
    </div>
  );
}

export default App;
