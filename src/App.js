import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import CurrentData from "./components/pages/currentData/CurrentData";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/pages/login/Login";
import History from "./components/pages/history/History";
import Profile from "./components/pages/profile/Profile";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { AuthContext } from "./context/AuthContext";
export const FormContext = React.createContext();

function App() {
  const [sidebar, setSidebar] = useState(false);
  const { dispatch } = useContext(AuthContext);

  function logoutHandler() {
    setSidebar(false);
    dispatch({ type: "LOGOUT" });
  }
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

  const { currentUser } = useContext(AuthContext);

  function RequireAuth({ children }) {
    return currentUser ? children : <Navigate to="/login" />;
  }
  console.log(currentUser);

  return (
    <>
      <Navbar onClick={() => setSidebar(true)} />
      {sidebar && (
        <Sidebar onClick={() => setSidebar(false)} logout={logoutHandler} />
      )}
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
            <Route
              path="/"
              element={
                <RequireAuth>
                  <CurrentData />
                </RequireAuth>
              }
            />
            <Route
              path="/history"
              element={
                <RequireAuth>
                  <History />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </FormContext.Provider>
    </>
  );
}

export default App;
