function WeightSlider({
  onChange,
  onSubmit,
  getBackgroundSize,
  value,
  onClick,
}) {
  return (
    <>
      <div className="overlay"></div>
      <form onSubmit={onSubmit} className="slider">
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
              value={value ? value : 75}
              onChange={onChange}
              style={getBackgroundSize()}
            />
          </div>
          <div className="weight-value">
            <p>
              {value ? value : 75}
              <span>kgs</span>
            </p>
          </div>
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default WeightSlider;
