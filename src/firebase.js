// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7JVGuTyX-UDN5Z4PEC6_1ZwElxZMIh5M",
  authDomain: "meta-f74bd.firebaseapp.com",
  projectId: "meta-f74bd",
  storageBucket: "meta-f74bd.appspot.com",
  messagingSenderId: "404033078605",
  appId: "1:404033078605:web:da93b95037b6de11f7a304",
  measurementId: "G-L6X2Z2VB5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
