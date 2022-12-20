import Overview from "./Overview";
import Progress from "./Progress";
import Progression from "./Progression";
import CurrentBmi from "./CurrentBmi";
import EnterWeightBtn from "./EnterWeightBtn";
import { useLocalStorage } from "./hooks/useLocalStorage";

function Tracker(props) {
  const [currentWeight, setCurrentWeight] = useLocalStorage(
    "Current Weight",
    ""
  );
  const [meters, setMeters] = useLocalStorage("Meters", "");
  return (
    <main className="tracker">
      <Overview currentWeight={currentWeight} height={meters} />
      <Progress currentWeight={currentWeight} />
      <section className="current-stats">
        <h2>current statistics</h2>
      </section>
      <Progression />
      <CurrentBmi currentWeight={currentWeight} height={meters} />
      <section className="enter-weight">
        <EnterWeightBtn
          onClick={props.onClick}
          divClassName={"enter-weight-btn"}
          btnClassName={"weight-btn"}
          input={"enter statistics"}
        />
      </section>
    </main>
  );
}

export default Tracker;
