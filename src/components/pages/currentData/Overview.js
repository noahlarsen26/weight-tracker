import { useState, useEffect } from "react";

function Overview({ user }) {
  const [startingBMI, setStartingBMI] = useState(0);
  const [goalBMI, setGoalBMI] = useState(0);

  const startWeight = parseFloat(user.startWeight);
  const height = parseFloat(user.height);
  const goalWeight = parseFloat(user.goalWeight);
  const startDate = user.startDate;
  const goalDate = user.goalDate;

  // CALCULATE BMI
  useEffect(() => {
    setStartingBMI((startWeight / (height * height)) * 10000);
    setGoalBMI((goalWeight / (height * height)) * 10000);
  }, [goalBMI, startingBMI, goalWeight]);

  return (
    <section className="overview">
      <ul className="start">
        <li>
          <h3>{startWeight} kgs</h3>
        </li>
        <li>
          <h3>
            <span>bmi: </span>
            {Math.floor(startingBMI)}
          </h3>
        </li>
        <li>
          <h3>{startDate}</h3>
        </li>
      </ul>
      <div className="current-weight">
        <div className="circle">
          <h2>
            {user.currentWeight} <span>kgs</span>
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
