import FormInput from "../profile/FormInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Register({ profileInputs, weightInputs }) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [data, setData] = useState({});

  function handleInput(e) {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        email,
        password,
        ...data,
        timeStamp: serverTimestamp(),
      });
      await setDoc(doc(db, "users", res.user.uid, "history", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/login");
    } catch (error) {
      setError(true);
    }
  }
  return (
    <section className="login-page">
      <header>
        <div className="title">
          <h2>register</h2>
        </div>
      </header>
      <form onSubmit={handleRegister} className="register">
        <div className="register-container">
          <div className="inputs">
            <div className="profile-inputs register-inputs">
              <FormInput
                label={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
                id={"email"}
              >
                email
              </FormInput>
              {profileInputs.map((input) => (
                <FormInput
                  htmlFor={input.htmlFor}
                  onChange={handleInput}
                  type={input.type}
                  id={input.id}
                  key={input.id}
                >
                  {input.label}
                </FormInput>
              ))}
            </div>
            <div className="weight-inputs register-inputs">
              <FormInput
                label={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
                id={"password"}
              >
                password
              </FormInput>
              {weightInputs.map((input) => (
                <FormInput
                  htmlFor={input.htmlFor}
                  onChange={handleInput}
                  type={input.type}
                  id={input.id}
                  key={input.id}
                >
                  {input.label}
                </FormInput>
              ))}
            </div>
          </div>
          <button className="btn" type="submit">
            register
          </button>
        </div>
      </form>
      {error && <h3 className="error">invalid email or password</h3>}
    </section>
  );
}

export default Register;
