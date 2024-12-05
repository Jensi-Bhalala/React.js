
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0ASK6b1BILnbLUbSidujVLUEQCh3B-Co",
  authDomain: "react-website-80412.firebaseapp.com",
  databaseURL: "https://react-website-80412-default-rtdb.firebaseio.com",
  projectId: "react-website-80412",
  storageBucket: "react-website-80412.firebasestorage.app",
  messagingSenderId: "32338118357",
  appId: "1:32338118357:web:09fabfad2a9741e432845c",
  measurementId: "G-41EE236XFF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
