import { FormContext } from "../../../App";
import FormInput from "../profile/FormInput";
import { useContext } from "react";

function Login() {
  const { email, setEmail, password, setPassword } = useContext(FormContext);
  return (
    <section className="login-page">
      <header>
        <div className="title">
          <h2>login</h2>
        </div>
      </header>
      <form className="login">
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
          {/* <div className="error">wrong email or password</div> */}
          <button className="btn">login</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
