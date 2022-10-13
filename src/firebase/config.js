// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from"firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALKy93338Yt0EH0NZWXNZPrzgVvSZtl94",
  authDomain: "ib-fitness.firebaseapp.com",
  projectId: "ib-fitness",
  storageBucket: "ib-fitness.appspot.com",
  messagingSenderId: "556162610219",
  appId: "1:556162610219:web:18be48963b9afa027e266e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()
const db =getFirestore()
export {auth,db}