import React, { useContext } from "react";
import{AuthContext} from"../context/AuthContext"

export default function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("use context within defined components");
  }
  return context;
}
