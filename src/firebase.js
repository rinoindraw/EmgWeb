// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; // Import the necessary database functions

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fadilskripsi.firebaseapp.com",
  databaseURL: "https://fadilskripsi-default-rtdb.firebaseio.com",
  projectId: "fadilskripsi",
  storageBucket: "fadilskripsi.appspot.com",
  messagingSenderId: "617661420819",
  appId: "1:617661420819:web:735629f9552b2c8b2eb6e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Use getDatabase to access the Realtime Database
