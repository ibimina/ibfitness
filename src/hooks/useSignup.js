import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import { UseFirestore } from "./useFirestore";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";


export const useSignup = () => {
  const [registerUser, setRegisterUser] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const [cancel, setCancel] = useState(false);
  const { dispatch } = useAuthContext();

  const { addUserDocument } = UseFirestore("users");

  const signup = async (email, password, displayName) => {
    setRegisterUser(true);
    setRegisterError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential) {
        throw new Error("could not catch error");
      }
      await updateProfile(userCredential.user, {
        displayName,
      });
      dispatch({ type: "LOGIN", payload: userCredential.user });
      addUserDocument({ displayName, email, uid: userCredential.user.uid });

      if (!cancel) {
        setRegisterUser(false);
        setRegisterError(null);
      }
    } catch (error) {
      if (!cancel) {
        setRegisterUser(false);
        setRegisterError(error.message);
      }
    }
  };
  useEffect(() => {
    return () => setCancel(true);
  }, []);
  return { signup, registerError, registerUser };
};
