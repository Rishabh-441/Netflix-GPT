// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtLM1JUL-9SW5Xd5AZ6qt37BPU8COFPa8",
  authDomain: "netflixgpt-92f9d.firebaseapp.com",
  projectId: "netflixgpt-92f9d",
  storageBucket: "netflixgpt-92f9d.appspot.com",
  messagingSenderId: "730104613636",
  appId: "1:730104613636:web:c699f6fd86fa17eb6ade51",
  measurementId: "G-20YNCXN1M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();