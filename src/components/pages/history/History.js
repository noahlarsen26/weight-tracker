import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { db } from "../../../firebase";
import HistoryRow from "./HistoryRow";

function History({ user }) {
  const [data, setData] = useState([]);

  const goalWeight = user.goalWeight;
  const firstName = user.firstName;
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      let list = [];
      try {
        const subColRef = collection(db, "users", currentUser.uid, "history");
        const querySnapshot = await getDocs(
          query(subColRef, orderBy("timestamp", "desc"))
        );
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <section className="history">
      <header>
        <div className="title">
          <h2>history</h2>
        </div>
        <div className="first-name">
          <h3>{firstName}</h3>
        </div>
      </header>
      <ul className="history-container">
        {data.map((history) => (
          <HistoryRow
            currentWeight={history.currentWeight}
            timestamp={history.timestamp}
            id={history.id}
            difference={history.difference}
            goalWeight={goalWeight}
          />
        ))}
      </ul>
    </section>
  );
}

export default History;
