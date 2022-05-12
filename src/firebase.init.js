// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1tpsFgRxweYMrO8fFz7NMQ9YiGf700n8",
    authDomain: "doctors-portal-1f956.firebaseapp.com",
    projectId: "doctors-portal-1f956",
    storageBucket: "doctors-portal-1f956.appspot.com",
    messagingSenderId: "534831519639",
    appId: "1:534831519639:web:93c91ca3d39b8862ff16d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;