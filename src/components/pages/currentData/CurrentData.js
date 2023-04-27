import React, { useState, useEffect } from "react";
import Tracker from "./Tracker";
import { useContext } from "react";
import WeightSlider from "../../WeightSlider";
import { AuthContext } from "../../../context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

function CurrentData() {
  const [weightForm, setWeightForm] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const email = currentUser.email;

  const [user, setUser] = useState({});

  const userDocRef = doc(db, "users", currentUser.uid);

  const [value, setValue] = useState(user.currentWeight ? true : 70);
  useEffect(() => {
    async function getUserData() {
      const snap = await getDoc(userDocRef);
      setUser({ email, ...snap.data() });
    }
    getUserData();
  }, []);

  async function updateWeight(e) {
    e.preventDefault();

    await updateDoc(userDocRef, {
      currentWeight: value,
    });
    setWeightForm(false);
    window.location.reload();
  }

  function getBackgroundSize() {
    return { backgroundSize: `${(value * 100) / 150}% 100%` };
  }
  return (
    <>
      {weightForm && (
        <WeightSlider
          onChange={(e) => setValue(e.target.valueAsNumber)}
          getBackgroundSize={getBackgroundSize}
          // user={user}
          onSubmit={updateWeight}
          onClick={() => setWeightForm(false)}
          value={value}
        />
      )}
      <h1 className="name">
        {user.firstName} {user.lastName}
      </h1>
      <Tracker user={user} weightForm={() => setWeightForm(true)} />
      <div className="back-filler">
        <div className="back-filler-1"></div>
      </div>
    </>
  );
}

export default CurrentData;
