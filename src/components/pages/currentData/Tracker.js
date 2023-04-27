import Overview from "./Overview";
import Progress from "./Progress";
import Progression from "./Progression";
import CurrentBmi from "./CurrentBmi";
import EnterWeightBtn from "../../EnterWeightBtn";

function Tracker({ weightForm, user }) {
  return (
    <main className="tracker">
      <Overview user={user} />
      <Progress user={user} />
      <section className="current-stats">
        <h2>current statistics</h2>
      </section>
      <Progression user={user} />
      <CurrentBmi user={user} />
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
