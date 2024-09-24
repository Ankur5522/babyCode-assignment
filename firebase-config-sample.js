// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration (from Firebase Console)
const firebaseConfig = {
    apiKey: "***********************",
    authDomain: "****************",
    projectId: "*******************",
    storageBucket: "************************",
    messagingSenderId: "****************",
    appId: "*************************"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
