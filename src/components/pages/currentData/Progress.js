import { useState, useEffect } from "react";
import { useContext } from "react";
import { FormContext } from "../../../App";

function Progress() {
  const { goalWeight, currentWeight } = useContext(FormContext);

  const [progress, setProgress] = useState(goalWeight);

  // CALCULATE PROGRESS
  useEffect(() => {
    setProgress((goalWeight / currentWeight) * 100);
  }, [currentWeight]);

  return (
    <section className="progress-container">
      <h3>progress</h3>
      <div className="progress-bar">
        <div
          style={{ width: `${Math.floor(progress)}%` }}
          className="progress"
        ></div>
      </div>
      <div>
        <h3>{Math.floor(progress)}%</h3>
      </div>
    </section>
  );
}

export default Progress;
