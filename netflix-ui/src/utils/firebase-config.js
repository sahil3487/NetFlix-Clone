import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBmmeZVXXqtJ_ccP6If2N2YVxMf0R3P5pE",
  authDomain: "netflix-7b51f.firebaseapp.com",
  projectId: "netflix-7b51f",
  storageBucket: "netflix-7b51f.appspot.com",
  messagingSenderId: "1015454192183",
  appId: "1:1015454192183:web:feed653fd3ff7a05c4e5b2",
  measurementId: "G-W7G528R6ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
