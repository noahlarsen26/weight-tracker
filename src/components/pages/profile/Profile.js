import { useState } from "react";
import { updateDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import Form from "./Form";
import { getAuth, updateProfile, onAuthStateChanged } from "firebase/auth";

function Profile({ profileInputs, weightInputs }) {
  const [data, setData] = useState({});

  function handleInput(e) {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  }
  console.log(data);

  function handleAdd(e) {
    e.preventDefault();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // get user id
        const userRef = doc(db, "users", user.uid);
        // update data
        updateDoc(userRef, {
          ...data,
        });
      } else {
        console.log("User not logged in or has just logged out.");
      }
    });
  }

  // async function handleAdd(e) {
  //   e.preventDefault();
  //   try {
  //     await setDoc(doc(db, "users"), {
  //       ...data,
  //       timeStamp: serverTimestamp(),
  //     });
  //     // navigate("/profile");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <>
      <header className="form-heading">
        <h2>edit profile</h2>
      </header>
      <section className="input-form">
        <div className="input-form-container">
          <div className="profile-details-container placeholderClass">
            <h3>profile details</h3>
            <Form
              onSubmit={handleAdd}
              onChange={handleInput}
              inputs={profileInputs}
            />
          </div>
          <div className="weight-objective-container placeholderClass">
            <h3>weight objectives</h3>
            <Form
              onSubmit={handleAdd}
              onChange={handleInput}
              inputs={weightInputs}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
