import Tracker from "./components/Tracker";
import InputForm from "./components/input-form/InputForm";
import { useState, useEffect } from "react";

function App() {
  const [formIsOpen, setFormIsOpen] = useState(true);
  function closeFormHandler() {
    setFormIsOpen(false);
  }

  useEffect(() => {
    setFormIsOpen(JSON.parse(window.localStorage.getItem("Form Is Open")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Form Is Open", formIsOpen);
  }, [formIsOpen]);

  return (
    <div className="container">
      <h1 className="name">James Baxter</h1>
      <Tracker />
      {formIsOpen && <InputForm onClick={closeFormHandler} />}
    </div>
  );
}

export default App;
