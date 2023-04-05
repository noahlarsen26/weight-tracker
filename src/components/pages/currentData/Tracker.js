import Overview from "./Overview";
import Progress from "./Progress";
import Progression from "./Progression";
import CurrentBmi from "./CurrentBmi";
import EnterWeightBtn from "../../EnterWeightBtn";
import { useContext } from "react";
import { FormContext } from "../../../App";

function Tracker({ weightForm }) {
  const { openFormHandler } = useContext(FormContext);
  return (
    <main className="tracker">
      <Overview />
      <Progress />
      <section className="current-stats">
        <h2>current statistics</h2>
      </section>
      <Progression />
      <CurrentBmi />
      <section className="enter-weight">
        <EnterWeightBtn
          // onClick={openFormHandler}
          onClick={weightForm}
          divClassName={"enter-weight-btn"}
          btnClassName={"weight-btn"}
          input={"enter weight"}
        />
      </section>
    </main>
  );
}

export default Tracker;
