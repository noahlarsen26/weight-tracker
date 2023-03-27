import { useState, useEffect } from "react";
import { useContext } from "react";
import { TrackerContext } from "../../../App";

function CurrentBmi() {
  const { currentWeight, meters } = useContext(TrackerContext);

  const [currentBMI, setCurrentBMI] = useState(0);
  const [BMI, setBMI] = useState("");

  // CALCULATE BMI
  useEffect(() => {
    setCurrentBMI((currentWeight / (meters * meters)) * 10000);

    // SET BMI LABEL
    if (currentBMI < 18.5) {
      setBMI("underweight");
    } else if (currentBMI >= 18.5 && currentBMI <= 24.9) {
      setBMI("normal");
    } else if (currentBMI >= 25 && currentBMI <= 29.9) {
      setBMI("overweight");
    } else if (currentBMI >= 30 && currentBMI <= 34.9) {
      setBMI("obese class 1");
    } else if (currentBMI >= 35 && currentBMI <= 39.9) {
      setBMI("obese class 2");
    } else {
      setBMI("obese class 3");
    }
  }, [currentBMI, currentWeight]);

  return (
    <section className="current-bmi">
      <h3>
        <span className="bmi">bmi: </span>
        {Math.floor(currentBMI)}
      </h3>
      <h3>{BMI}</h3>
    </section>
  );
}

export default CurrentBmi;
