import Tracker from "./components/Tracker";
import InputForm from "./components/input-form/InputForm";

const user = {
  name: "james baxter",
};

function App() {
  return (
    <div className="container">
      <h1 className="name">James Baxter</h1>
      <Tracker />
      <InputForm />
    </div>
  );
}

export default App;
