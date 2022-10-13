import { collection, addDoc } from "firebase/firestore";
import { useReducer } from "react";
import { db } from "../firebase/config";
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null, success: false, document: null };
    case "ERROR":
      return { loading: false, error: true, success: true, document: null };
    case "ADD_DOC":
      return {
        loading: false,
        error: null,
        document: action.payload,
        success: true,
      };
    case "DELETE_DOC":
      return { loading: false, error: null, document: null, success: true };

    default:
      return state;
  }
};

export const UseFirestore = (c) => {
  const [response, dispatch] = useReducer(firestoreReducer, {
    document: null,
    isloading: false,
    error: null,
    success: null,
  });

  const docRef = collection(db, c);

  const addDocument = async (data) => {
    try {
      const doc = await addDoc(docRef, { data });
      dispatch({type:"ADD_DOC",payload:addDocument})
      console.log(response);
      console.log("Document written with ID: ", doc.id);
      
    } catch (e) {
      console.error("Error adding document: ", e);
       dispatch({ type: "ERROR", payload: "Could not add" });
    }
  };

  return { addDocument ,response};
};
