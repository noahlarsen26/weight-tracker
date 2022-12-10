import GoalWeight from "./GoalWeight";
import GoalBmi from "./GoalBmi";
import GoalDate from "./GoalDate";

function Goals() {
  return (
    <ul className="goals">
      <GoalWeight />
      <GoalBmi />
      <GoalDate />
    </ul>
  );
}

export default Goals;
