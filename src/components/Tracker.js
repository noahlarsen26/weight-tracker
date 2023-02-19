import Overview from "./Overview";
import Progress from "./Progress";
import Progression from "./Progression";
import CurrentBmi from "./CurrentBmi";
import EnterWeightBtn from "./EnterWeightBtn";

function Tracker({
  currentWeight,
  meters,
  startingWeight,
  startingDate,
  goalWeight,
  goalDate,
  onClick,
}) {
  return (
    <main className="tracker">
      <Overview
        currentWeight={currentWeight}
        height={meters}
        startingWeight={startingWeight}
        startingDate={startingDate}
        goalWeight={goalWeight}
        goalDate={goalDate}
      />
      <Progress goalWeight={goalWeight} currentWeight={currentWeight} />
      <section className="current-stats">
        <h2>current statistics</h2>
      </section>
      <Progression
        currentWeight={currentWeight}
        startingWeight={startingWeight}
        goalWeight={goalWeight}
      />
      <CurrentBmi currentWeight={currentWeight} height={meters} />
      <section className="enter-weight">
        <EnterWeightBtn
          onClick={onClick}
          divClassName={"enter-weight-btn"}
          btnClassName={"weight-btn"}
          input={"enter statistics"}
        />
      </section>
    </main>
  );
}

export default Tracker;
