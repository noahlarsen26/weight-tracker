function Height() {
  return (
    <div className="height">
      <label for="feet">height:</label>
      <div className="height-container">
        <input placeholder="Feet" type="number" name="feet" id="feet" />
        <input placeholder="Inches" type="number" name="inches" id="inches" />
      </div>
    </div>
  );
}

export default Height;
