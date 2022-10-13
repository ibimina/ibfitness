import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";

import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";


export default function Signup() {
  const [registerUser, setRegisterUser] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const[cancel,setCancel]=useState(false)
  const { dispatch} = useAuthContext();

  const handleSubmit = async (e) => {
     e.preventDefault();
       setRegisterUser(true);
       setRegisterError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        e.target.email.value,
        e.target.password.value
      );
      if (!userCredential) {
        throw new Error ("could not catch error")
      }
     await  updateProfile(userCredential.user, {
        displayName: e.target.username.value,
      });
      dispatch({ type: "LOGIN", payload: userCredential.user });
        setRegisterUser(false);
        setRegisterError(null);
        e.target.reset();
      if (!cancel) {
   setRegisterUser(false);
   setRegisterError(null);
    e.target.reset();
 }

      
    } catch (error) {
      if (!cancel) {
        setRegisterUser(false);
        setRegisterError(error.message);
      }
      
    }
  };
useEffect(()=>{
return()=>setCancel(true)
},[])
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
            <input type="email" placeholder="Email" name="email" required />
          </label>
          <label>
            <span>Enter Username</span>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
            />
          </label>
          <label>
            <span>Enter password</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
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
