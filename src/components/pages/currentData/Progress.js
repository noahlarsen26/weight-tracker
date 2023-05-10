import { useState, useEffect } from "react";

function Progress({ user }) {
  const [progress, setProgress] = useState();

  const goalWeight = user.goalWeight;
  const currentWeight = user.currentWeight;

  // CALCULATE PROGRESS
  useEffect(() => {
    setProgress((goalWeight / currentWeight) * 100);
  }, [goalWeight, currentWeight]);
  // function progressHandler() {
  //   if (progress) {
  //     const progressStyles = {
  //       width: `${Math.floor(progress)}%`,
  //     };
  //   } else {
  //     const progressStyles = {
  //       width: "0rem",
  //     };
  //   }
  // }
  return (
    <section className="progress-container">
      <h3>progress</h3>
      <div className="progress-bar">
        <div
          style={
            progress ? { width: `${Math.floor(progress)}%` } : { width: "0rem" }
          }
          className="progress"
        ></div>
      </div>
      <div>
        <h3>{progress ? Math.floor(progress) : "no data"}</h3>
      </div>
    </section>
  );
}

export default Progress;
