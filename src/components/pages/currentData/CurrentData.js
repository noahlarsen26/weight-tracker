import React, { useState, useEffect } from "react";
import Tracker from "./Tracker";
import { useContext } from "react";
import { FormContext } from "../../../App";

function CurrentData() {
  const { firstName, lastName } = useContext(FormContext);

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
      <Tracker />
      <div className="back-filler">
        <div className="back-filler-1"></div>
      </div>
    </>
  );
}

export default CurrentData;
