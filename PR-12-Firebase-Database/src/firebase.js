// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAl56X8geQV1DKIQXPmKYo-zxOGgW74-i0",
  authDomain: "pr-12-firestore-todo-app.firebaseapp.com",
  projectId: "pr-12-firestore-todo-app",
  storageBucket: "pr-12-firestore-todo-app.firebasestorage.app",
  messagingSenderId: "615205090958",
  appId: "1:615205090958:web:73cdbcadd0644747f13bdf",
  measurementId: "G-6VGG21P861"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);