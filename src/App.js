import Navbar from "./components/Navbar";
import CurrentData from "./components/pages/currentData/CurrentData";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import History from "./components/pages/history/History";
import Profile from "./components/pages/profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<CurrentData />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
