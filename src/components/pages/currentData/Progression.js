import { useState, useEffect } from "react";

function Progression({ user }) {
  const startWeight = user.startWeight;
  const currentWeight = user.currentWeight;
  const goalWeight = user.goalWeight;

  const [totalLost, setTotalLost] = useState(startWeight);
  const [remainingKgs, setRemainingKgs] = useState(currentWeight);

  // CALCULATE TOTAL LOST
  useEffect(() => {
    setTotalLost(startWeight - currentWeight);
    setRemainingKgs(currentWeight - goalWeight);
  }, [currentWeight, goalWeight]);

  return (
    <section className="progression">
      <div>
        <h3>you lost</h3>
        {totalLost ? (
          <h3>
            {totalLost} <span>kgs</span>
          </h3>
        ) : (
          <h3>No Data</h3>
        )}
      </div>{" "}
      <div>
        <h3>remaining</h3>
        {remainingKgs ? <h3>{remainingKgs} kgs</h3> : <h3>No Data</h3>}
      </div>{" "}
    </section>
  );
}

export default Progression;
