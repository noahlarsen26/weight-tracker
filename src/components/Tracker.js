import Overview from "./overview/Overview";
import Progress from "./progress/Progress";
import CurrentStats from "./CurrentStats";
import Progression from "./progression/Progression";
import CurrentBmi from "./currentbmi/CurrentBmi";
import WeightLoss from "./weightloss/WeightLoss";
import EnterWeight from "./buttons/enter-weight-btn/EnterWeight";
function Tracker() {
  return (
    <main className="tracker">
      <Overview />
      <Progress />
      <CurrentStats />
      <Progression />
      <CurrentBmi />
      <WeightLoss />
      <EnterWeight />
    </main>
  );
}

export default Tracker;
