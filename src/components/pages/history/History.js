function History() {
  return (
    <section className="history">
      <header>
        <div className="title">
          <h2>history</h2>
        </div>
        <div className="first-name">
          <h3>firstName</h3>
        </div>
      </header>
      <div className="history-container">
        <div className="input-history">
          <div className="weight-container">
            <p className="input">57kg</p>
            <p className="difference">-2kg</p>
          </div>
          <section className="progress-bar-container">
            <h3>progress</h3>
            <div className="progress-bar">
              <div style={{ width: "90%" }} className="progress"></div>
            </div>
            <div>{/* <h3>{Math.floor(progress)}%</h3> */}</div>
          </section>
          <div className="day-date">
            <p>March 17</p>
            <p>2023</p>
          </div>
          <div className="date-time">
            <p>Friday</p>
            <p>1:10 AM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
