import Overview from "./Overview";
import Progress from "./Progress";
import Progression from "./Progression";
import CurrentBmi from "./CurrentBmi";
import EnterWeightBtn from "../../EnterWeightBtn";
import { useContext, useState, useEffect } from "react";
import { FormContext } from "../../../App";
import { AuthContext } from "../../../context/AuthContext";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

function Tracker({ weightForm }) {
  const { currentUser } = useContext(AuthContext);

  const email = currentUser.email;

  const [user, setUser] = useState({});

  const userDocRef = doc(db, "users", currentUser.uid);
  useEffect(() => {
    async function getUserData() {
      const snap = await getDoc(userDocRef);
      setUser({ email, ...snap.data() });
    }
    getUserData();
  }, []);
  const { openFormHandler } = useContext(FormContext);
  return (
    <main className="tracker">
      <Overview user={user} />
      <Progress user={user} />
      <section className="current-stats">
        <h2>current statistics</h2>
      </section>
      <Progression user={user} />
      <CurrentBmi user={user} />
      <section className="enter-weight">
        <EnterWeightBtn
          // onClick={openFormHandler}
          onClick={weightForm}
          divClassName={"enter-weight-btn"}
          btnClassName={"weight-btn"}
          input={"enter weight"}
        />
      </section>
    </main>
  );
}

export default Tracker;
