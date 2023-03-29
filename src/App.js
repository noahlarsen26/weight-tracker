import Navbar from "./components/Navbar";
import CurrentData from "./components/pages/currentData/CurrentData";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import History from "./components/pages/history/History";
import Statistics from "./components/pages/statistics/Statistics";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<CurrentData />} />
          <Route path="/history" element={<History />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
