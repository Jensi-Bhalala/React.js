// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnSWO0KE5D55_zyQ2EzB9HXVn5ErpWm4w",
  authDomain: "fir-firestore-pr-12.firebaseapp.com",
  projectId: "fir-firestore-pr-12",
  storageBucket: "fir-firestore-pr-12.firebasestorage.app",
  messagingSenderId: "336257169723",
  appId: "1:336257169723:web:b90a2ad921676eab61df1e",
  measurementId: "G-LXNMS2SXF3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);