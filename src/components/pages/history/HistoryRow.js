import { useState, useEffect } from "react";

function HistoryRow({ currentWeight, timestamp, id, difference, goalWeight }) {
  const [progress, setProgress] = useState();

  const fireBaseTime = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );
  const date = fireBaseTime.toDateString();
  const atTime = fireBaseTime.toLocaleTimeString();

  useEffect(() => {
    setProgress((goalWeight / currentWeight) * 100);
  }, [goalWeight, currentWeight]);

  return (
    <li key={id} className="input-history">
      <div className="weight-container">
        <p className="input">{currentWeight}kg</p>
        <p className="difference">{difference ? difference : 0}</p>
      </div>
      <div className="progress-bar-container">
        <h3>progress</h3>
        <div className="progress-bar">
          <div
            style={{ width: `${Math.floor(progress)}%` }}
            className="progress"
          ></div>
        </div>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
      <div className="time">
        <p>{atTime}</p>
      </div>
    </li>
  );
}

export default HistoryRow;
