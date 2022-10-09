import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";


export default function Signup () {

    return (
      <>
        <NavBar />
        <p className="hello">
          Hey there, <span className="wlc">create an account</span>
        </p>
        <div className="login-pg">
          <form>
            <label>
              <span>Enter Email</span>
              <input type="email" placeholder="Email" />
            </label>
            <label>
              <span>Enter Username</span>
              <input type="text" placeholder="Username" />
            </label>
            <label>
              <span>Enter password</span>
              <input type="password" placeholder="Password" />
            </label>
            <input type="submit" value="Register" className="submit" />
          </form>
        </div>

        <Footer />
      </>
    );
}