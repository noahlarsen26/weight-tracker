import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState, useEffect } from "react";

function Progress(props) {
  const [goalWeight, setGoalWeight] = useLocalStorage("Goal Weight", "");
  const [progress, setProgress] = useState(goalWeight);

  // CALCULATE PROGRESS
  useEffect(() => {
    setProgress((goalWeight / props.currentWeight) * 100);
  }, [props.currentWeight]);

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
