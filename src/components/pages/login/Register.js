import FormInput from "../profile/FormInput";
import { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function Register() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  function handleRegister(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  }
  return (
    <section className="login-page">
      <header>
        <div className="title">
          <h2>register</h2>
        </div>
      </header>
      <form onSubmit={handleRegister} className="login">
        <div className="login-container">
          <FormInput
            htmlFor={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            name={"email"}
            id={"email"}
          >
            email
          </FormInput>
          <FormInput
            htmlFor={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            name={"password"}
            id={"password"}
          >
            password
          </FormInput>
          {error && <h3 className="error">invalid email or password</h3>}
          <button className="btn">register</button>
        </div>
      </form>
    </section>
  );
}

export default Register;
