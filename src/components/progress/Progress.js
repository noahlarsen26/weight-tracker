import ProgressBar from "./progressbar/ProgressBar";
import Percentage from "./progressbar/Percentage";
function Progress() {
  return (
    <section className="progress-container">
      <h3>progress</h3>
      <ProgressBar />
      <Percentage />
    </section>
  );
}

export default Progress;
