import "./landing.css";

import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="landing-flex">
        <div className="slogan-container">
          <p className="bd-text">Track your fitness and health</p>

          <p className="slogan">
            Get a fit and healthy body at the comfort of your home. Achieve your
            goals, whether that's access to calories counter or activity
            tracking apps.
          </p>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "assets/workout.svg"}
            alt="workout session"
            className="landing-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
