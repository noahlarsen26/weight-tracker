import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import CurrentData from "./components/pages/currentData/CurrentData";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/pages/login/Login";
import History from "./components/pages/history/History";
import Profile from "./components/pages/profile/Profile";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import Register from "./components/pages/login/Register";
import { profileInputs, weightInputs } from "./formSource";
import { db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

function App() {
  const { dispatch } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState({});

  const email = currentUser.email;
  const userDocRef = doc(db, "users", currentUser.uid);

  useEffect(() => {
    async function getUserData() {
      const snap = await getDoc(userDocRef);
      setUser({ email, ...snap.data() });
    }
    getUserData();
  }, []);

  function logoutHandler() {
    setSidebar(false);
    dispatch({ type: "LOGOUT" });
  }

  function RequireAuth({ children }) {
    return currentUser ? children : <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar onClick={() => setSidebar(true)} />
      {sidebar && (
        <Sidebar onClick={() => setSidebar(false)} logout={logoutHandler} />
      )}
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <CurrentData user={user} />
              </RequireAuth>
            }
          />
          <Route
            path="/history"
            element={
              <RequireAuth>
                <History user={user} />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile
                  profileInputs={profileInputs}
                  weightInputs={weightInputs}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/register"
            element={
              <Register
                profileInputs={profileInputs}
                weightInputs={weightInputs}
              />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
