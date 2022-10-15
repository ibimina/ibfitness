import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";

export default function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, registerError, registerUser } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    setDisplayName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <NavBar />
      <p className="hello">
        Hey there, <span className="wlc">create an account</span>
      </p>
      <div className="login-pg">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Enter Email</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Enter Username</span>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </label>
          <label>
            <span>Enter password</span>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {!registerUser && (
            <input type="submit" value="Register" className="submit" />
          )}
          {registerUser && (
            <input type="submit" value="Loading" disabled className="submit" />
          )}
          {registerError && <>{registerError}</>}
        </form>
      </div>

      <Footer />
    </>
  );
}
