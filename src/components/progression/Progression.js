import BodyfatPercent from "./BodyfatPercent";
import TotalLost from "./TotalLost";
import RemainingLbs from "./RemainingLbs";

function Progression() {
  return (
    <section className="progression">
      <BodyfatPercent />
      <TotalLost />
      <RemainingLbs />
    </section>
  );
}

export default Progression;
