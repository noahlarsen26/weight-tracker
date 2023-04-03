import React from "react";
import Navbar from "./components/Navbar";
import CurrentData from "./components/pages/currentData/CurrentData";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import History from "./components/pages/history/History";
import Profile from "./components/pages/profile/Profile";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
export const FormContext = React.createContext();

function App() {
  const [firstName, setFirstName] = useLocalStorage("First Name", "First");
  const [lastName, setLastName] = useLocalStorage("Last Name", "Last");
  const [startingWeight, setStartingWeight] = useLocalStorage(
    "Starting Weight",
    ""
  );
  const [currentWeight, setCurrentWeight] = useLocalStorage(
    "Current Weight",
    ""
  );
  const [startingDate, setStartingDate] = useLocalStorage("Starting Date", "");
  const [meters, setMeters] = useLocalStorage("Meters", "");
  const [goalWeight, setGoalWeight] = useLocalStorage("Goal Weight", "");
  const [goalDate, setGoalDate] = useLocalStorage("Goal Date", "");
  const [birthDate, setBirthDate] = useLocalStorage("Birthdate", "");
  const [email, setEmail] = useLocalStorage("Email", "");
  const [pasword, setPassword] = useLocalStorage("Password", "");
  return (
    <>
      <Navbar />
      <FormContext.Provider
        value={{
          firstName,
          lastName,
          startingWeight,
          currentWeight,
          startingDate,
          meters,
          goalWeight,
          goalDate,
          setFirstName,
          setLastName,
          setStartingWeight,
          setCurrentWeight,
          setStartingDate,
          setMeters,
          setGoalWeight,
          setGoalDate,
          birthDate,
          setBirthDate,
          email,
          setEmail,
          pasword,
          setPassword,
          // closeFormHandler,
        }}
      >
        <div className="container">
          <Routes>
            <Route path="/" element={<CurrentData />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </FormContext.Provider>
    </>
  );
}

export default App;
