import Start from "./startComponents/Start";
import CurrentWeight from "./currentWeight/CurrentWeight";
import Goals from "./goals/Goals";

function Overview() {
  return (
    <section className="overview">
      <Start />
      <CurrentWeight />
      <Goals />
    </section>
  );
}

export default Overview;
