import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";


import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import useAuthContext from "../../hooks/useAuthContext";
import { useState } from "react";



export default function Signup () {
  const[registerUser,setRegisterUser]=useState(false)
  const [registerError,setRegisterError]=useState(null)
const{dispatch}=useAuthContext()
const handleSubmit= async(e)=>{
  try {
    setRegisterUser(true)
    setRegisterError(false)
    e.preventDefault();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    );
      updateProfile(userCredential.user, {
        displayName: e.target.username.value,
      });
    dispatch({ type: "LOGIN", user: userCredential.user });
 console.log(userCredential.user);
    setRegisterUser(false)
    setRegisterError(null)
    e.target.reset()
  } catch (error) {
    setRegisterUser(false)
    setRegisterError("user already exist");
  }
 
} 

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
              <input type="email" placeholder="Email" name="email" />
            </label>
            <label>
              <span>Enter Username</span>
              <input type="text" placeholder="Username" name="username" />
            </label>
            <label>
              <span>Enter password</span>
              <input type="password" placeholder="Password" name="password" />
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