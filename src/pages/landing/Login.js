import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";

export default function Login() {
  return (
    <>
      <NavBar />
      <p className="hello">Hey there, <span className="wlc">welcome back</span></p>
      <div className="login-pg">
        <form>
          <label>
            <span>Enter Email</span>
            <input type="email" placeholder="Email"/>
          </label>
          <label>
            <span>Enter password</span>
            <input type="password"placeholder="password" />
          </label>
          <input type="submit" value="Login" className="submit"/>
        </form>
      </div>
      <Footer />
    </>
  );
}
