// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAz6WG1o-QqKqafane9FiCdDf6TTbJssK4",
  authDomain: "pr-13--authentication-656b3.firebaseapp.com",
  databaseURL: "https://pr-13--authentication-656b3-default-rtdb.firebaseio.com",
  projectId: "pr-13--authentication-656b3",
  storageBucket: "pr-13--authentication-656b3.firebasestorage.app",
  messagingSenderId: "289956613480",
  appId: "1:289956613480:web:4d8de88c214aedcf0ddadd",
  measurementId: "G-0R71FZ3BS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;

