import "./profile.css"
import {Footer} from "../../components/Footer"
import { UseFirestore } from "../../hooks/useFirestore"
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPageTwo() {
  const {addDocument,response}=UseFirestore("users")
  const [weight,setWeight]=useState("")
   const [height, setHeight] = useState("");
    const [gender, setGender] = useState("");
     const [dateofBirth, setDateofBirth] = useState("");
     const goTo= useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
addDocument({
  weight,
  height,
  dateofBirth,
  gender,
});
  };
useEffect(()=>{
if(response.success){
   console.log(response);
  setDateofBirth("")
   setGender(null)
   setWeight("")
   setHeight("")
   goTo("/home")
}

},[response])
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
              <select name="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="null" disabled>
                  Choose Gender
                </option>
                <option value="Male" >
                  Male
                </option>
                <option value="Female" >
                  Female
                </option>
                <option value="non">
                  I rather not say
                </option>
              </select>
            </label>

            <label>
              <span>Date of Birth</span>
              <input
                type="date"
                name="dob"
                placeholder="Date of Birth"
                value={dateofBirth}
                onChange={(e) => setDateofBirth(e.target.value)}
              />
            </label>
            <label>
              <span>Weight</span>
              <input
                type="number"
                name="weight"
                placeholder="Your Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>

            <label>
              <span>Height</span>
              <input
                type="number"
                name="height"
                placeholder="Your Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <input type="submit" value="Next >" className="submit" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPageTwo;
