import React, { useState } from "react";
import Fire from "./Fire";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setpassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setpassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    Fire.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  function Register(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleEmailChange}
            type="email"
            name="emaill"
            className="form-Control"
            placeholder="email"
          />
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            className="form-Control"
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignIn
        </button>
        <button onClick={Register} type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Login;
