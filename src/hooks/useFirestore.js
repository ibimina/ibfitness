import { collection, addDoc, updateDoc, doc, setDoc } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
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
    case "UPDATE_DOC":
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

export const UseFirestore = (c, q) => {
  const [dispatchCancelled, setDispatchCancelled] = useState(false);
  const [response, dispatch] = useReducer(firestoreReducer, {
    document: null,
    isloading: false,
    error: null,
    success: null,
  });

  let docRef = collection(db, c);
  const dispatchIsNotCancelled = (action) => {
    if (dispatchCancelled) {
      dispatch(action);
    }
  };
  const addUserDocument = async (data) => {
    dispatch({ type: "LOADING" });
    try {
      const doct = await setDoc(doc(db, c, data.uid), data);
      dispatchIsNotCancelled({ type: "ADD_DOC", payload: doct });
    } catch (e) {
      console.error("Error adding document: ", e);
      dispatchIsNotCancelled({ type: "ERROR", payload: "Could not add" });
    }
  };

  const addDocument = async (data) => {
    dispatch({ type: "LOADING" });
    try {
      const doc = await addDoc(docRef, { data });
      dispatchIsNotCancelled({ type: "ADD_DOC", payload: doc });
      console.log("Document written with ID: ", doc.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      dispatchIsNotCancelled({ type: "ERROR", payload: "Could not add" });
    }
  };
  const upDateDocument = async (data) => {
    dispatch({ type: "LOADING" });
    try {
      const doct = await updateDoc(doc(db, c, q), data);
      dispatchIsNotCancelled({ type: "UPDATE_DOC", payload: doct });
    } catch (e) {
      console.error("Error adding document: ", e);
      dispatchIsNotCancelled({ type: "ERROR", payload: "Could not update" });
    }
  };

  useEffect(() => {
    return () => setDispatchCancelled(true);
  }, []);
  return { addDocument, upDateDocument, response, addUserDocument };
};
