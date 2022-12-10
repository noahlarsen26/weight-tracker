import FirstName from "./inputs/name/FirstName";
import LastName from "./inputs/name/LastName";
import PresentWeight from "./inputs/weight/PresentWeight";
import EndGoalWeight from "./inputs/goals/EndGoalWeight";
import EndGoalDate from "./inputs/goals/EndGoalDate";
import FormButton from "../buttons/Form-Button";
import Height from "./inputs/height/Height";

function InputContainer() {
  return (
    <div className="input-container">
      <FirstName />
      <LastName />
      <PresentWeight />
      <Height />
      <EndGoalWeight />
      <EndGoalDate />
      <FormButton />
    </div>
  );
}

export default InputContainer;
