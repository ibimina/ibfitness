import { createContext,useEffect,useReducer } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

import {auth} from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "AUTHREADY":
      return { user: action.payload, authChanged: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authChanged: false,
  });
 useEffect(()=>{
const unsub =onAuthStateChanged(auth, user=> {
dispatch({type:"AUTHREADY", payload:user})
unsub()
});

 },[ ])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
