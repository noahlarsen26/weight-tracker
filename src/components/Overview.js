import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState, useEffect } from "react";

function Overview(props) {
  const [startingWeight, setStartingWeight] = useLocalStorage(
    "Starting Weight",
    ""
  );
  const [startingDate, setStartingDate] = useLocalStorage("Starting Date", "");
  const [goalWeight, setGoalWeight] = useLocalStorage("Goal Weight", "");
  const [goalDate, setGoalDate] = useLocalStorage("Goal Date", "");

  const [startingBMI, setStartingBMI] = useState(0);
  const [goalBMI, setGoalBMI] = useState(0);

  // CALCULATE BMI
  useEffect(() => {
    setStartingBMI((startingWeight / (props.height * props.height)) * 10000);
    setGoalBMI((goalWeight / (props.height * props.height)) * 10000);
  }, []);

  return (
    <section className="overview">
      <ul className="start">
        <li>
          <h3>{startingWeight} kgs</h3>
        </li>
        <li>
          <h3>
            <span>bmi: </span>
            {Math.floor(startingBMI)}
          </h3>
        </li>
        <li>
          <h3>{startingDate}</h3>
        </li>
      </ul>
      <div className="current-weight">
        <div className="circle">
          <h2>
            {props.currentWeight} <span>kgs</span>
          </h2>
        </div>
      </div>
      <ul className="goals">
        <li>
          <h3>{goalWeight} kgs</h3>
        </li>
        <li>
          <h3>
            <span>bmi: </span>
            {Math.floor(goalBMI)}
          </h3>
        </li>
        <li>
          <h3>{goalDate}</h3>
        </li>
      </ul>
    </section>
  );
}

export default Overview;
