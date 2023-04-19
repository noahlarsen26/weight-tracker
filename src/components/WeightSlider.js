import { useState } from "react";

function WeightSlider({ onClick }) {
  const [value, setValue] = useState(70);

  function getBackgroundSize() {
    return { backgroundSize: `${(value * 100) / 150}% 100%` };
  }
  return (
    <>
      <div className="overlay"></div>
      <form className="slider">
        <button type="button" onClick={onClick} className="close">
          x
        </button>
        <div className="slider-container">
          <h2>
            enter weight <span>(kgs)</span>
          </h2>
          <div className="input-container">
            <input
              type="range"
              max={150}
              value={value}
              onChange={(e) => setValue(e.target.valueAsNumber)}
              style={getBackgroundSize()}
            />
          </div>
          <div className="weight-value">
            <p>
              {value}
              <span>kgs</span>
            </p>
          </div>
          <button onClick={onClick} type="button" className="btn">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default WeightSlider;
