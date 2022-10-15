import "./registration.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { UseFirestore } from "../../hooks/useFirestore";

import { Footer } from "../../components/Footer";

function Registration() {
  const { user } = useAuthContext();
  const { uid } = user;
  const { upDateDocument, response } = UseFirestore("users", uid);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [weightUnit, setWeightUnit] = useState("KG");
  const [heightUnit, setHeightUnit] = useState("CM");
  const [dateofBirth, setDateofBirth] = useState("");
  const goTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    upDateDocument({
      weightData: { weight, weightUnit },
      heightData: { height, heightUnit },
      dateofBirth,
      gender,
    });
  };
  useEffect(() => {
    if (response.success) {
      setDateofBirth("");
      setGender("");
      setWeight("");
      setHeight("");
      goTo("/ibfitness");
    }
  }, [response, goTo]);
  return (
    <>
      <div className="flex">
        <img
          src={process.env.PUBLIC_URL + "assets/Pilates-amico.svg"}
          className="landing-img"
          alt="a male doing strech exercise"
        />
        <div>
          <p className="center bold">Let's complete your profile</p>
          <p className="center">it will help us know more about you</p>
          <form onSubmit={handleSubmit} className="details">
            <label>
              <span>Gender</span>
              <select
                defaultValue="null"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="null" hidden disabled>
                  Choose Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="non">I rather not say</option>
              </select>
            </label>

            <label>
              <span>Date of Birth</span>
              <input
                type="date"
                placeholder="Date of Birth"
                onChange={(e) => setDateofBirth(e.target.value)}
              />
            </label>
            <label>
              <span>Weight</span>
              <div className="unit">
                <input
                  type="number"
                  placeholder="Your Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <input
                  className="cursor"
                  type="button"
                  value={weightUnit}
                  onClick={() =>
                    weightUnit === "KG"
                      ? setWeightUnit("PD")
                      : setWeightUnit("KG")
                  }
                />
              </div>
            </label>

            <label>
              <span>Height</span>
              <div className="unit">
                <input
                  type="number"
                  placeholder="Your Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <input
                  className="cursor"
                  type="button"
                  value={heightUnit}
                  onClick={() =>
                    heightUnit === "CM"
                      ? setHeightUnit("INC")
                      : setHeightUnit("CM")
                  }
                />
              </div>
            </label>
            {!response.loading && (
              <input type="submit" value="Next >" className="submit" />
            )}
            {response.loading && (
              <input
                type="submit"
                value="loading"
                disabled
                className="submit"
              />
            )}
            {response.error && <>{response.error.message}</>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Registration;
