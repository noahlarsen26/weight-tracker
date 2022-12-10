import AvgDailyLoss from "./AvgDailyLoss";
import AvgWeeklyLoss from "./AvgWeeklyLoss";
function WeightLoss() {
  return (
    <section className="weightloss">
      <AvgDailyLoss />
      <AvgWeeklyLoss />
    </section>
  );
}

export default WeightLoss;
