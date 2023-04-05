function WeightSlider({ onClick }) {
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
            <input type="range" min="30" max="300" value="70" />
            <input type="number" placeholder="70" />
          </div>
          <div className="weight-value">
            <p>
              70<span>kgs</span>
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
