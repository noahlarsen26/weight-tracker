import StartWeight from "./StartWeight";
import StartBMI from "./StartBMI";
import StartDate from "./StartDate";
function Start() {
  return (
    <ul className="start">
      <StartWeight />
      <StartBMI />
      <StartDate />
    </ul>
  );
}

export default Start;
