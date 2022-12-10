import EndGoalDate from "./EndGoalDate";
import EndGoalWeight from "./EndGoalWeight";

function GoalStats() {
  return (
    <div className="goal-stats">
      <EndGoalWeight />
      <EndGoalDate />
    </div>
  );
}

export default GoalStats;
