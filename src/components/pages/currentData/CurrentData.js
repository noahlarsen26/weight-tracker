import React, { useState } from "react";
import Tracker from "./Tracker";
import { useContext } from "react";
import WeightSlider from "../../WeightSlider";
import { AuthContext } from "../../../context/AuthContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";

function CurrentData({ user }) {
  const [weightForm, setWeightForm] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const userDocRef = doc(db, "users", currentUser.uid);
  const historyRef = collection(userDocRef, "history");

  const [value, setValue] = useState(user.currentWeight);

  async function updateWeight(e) {
    e.preventDefault();

    await updateDoc(userDocRef, {
      currentWeight: value,
    });

    await addDoc(historyRef, {
      currentWeight: value,
      difference: user.currentWeight - value,
      timestamp: serverTimestamp(),
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
