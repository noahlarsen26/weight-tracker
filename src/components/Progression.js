import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState, useEffect } from "react";

function Progression() {
  const [startingWeight, setStartingWeight] = useLocalStorage(
    "Starting Weight",
    ""
  );
  const [currentWeight, setCurrentWeight] = useLocalStorage(
    "Current Weight",
    ""
  );
  const [goalWeight, setGoalWeight] = useLocalStorage("Goal Weight", "");
  const [totalLost, setTotalLost] = useState(startingWeight);
  const [remainingKgs, setRemainingKgs] = useState(currentWeight);

  // CALCULATE TOTAL LOST
  useEffect(() => {
    setTotalLost(startingWeight - currentWeight);
    setRemainingKgs(currentWeight - goalWeight);
  }, [currentWeight, goalWeight]);

  return (
    <section className="progression">
      <div>
        <h3>you lost</h3>
        <h3>
          {totalLost} <span>kgs</span>
        </h3>
      </div>{" "}
      <div>
        <h3>remaining</h3>
        <h3>{remainingKgs} kgs</h3>
      </div>{" "}
    </section>
  );
}

export default Progression;
