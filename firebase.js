import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQdzs9k-4PnkUpu5KSay0SJoO_1QTOh8A",
  authDomain: "nea-cs-quiz-web.firebaseapp.com",
  projectId: "nea-cs-quiz-web",
  storageBucket: "nea-cs-quiz-web.appspot.com",
  messagingSenderId: "473413319948",
  appId: "1:473413319948:web:1ae4c7b7f509e5d69bdd29",
  measurementId: "G-HL97JHY1B1",
};

// Initialize the firebase if not already initialized
const app = initializeApp(firebaseConfig);

// Database (Firestore)
const db = getFirestore();

// Authentication
const auth = getAuth();

// Google Provider for Authentication
const provider = new GoogleAuthProvider();

export { db, auth, provider };
