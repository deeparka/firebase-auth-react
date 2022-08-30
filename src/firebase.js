// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUnzrfF6MHpnB671dJYgP5R3UyZKu_VXw",
    authDomain: "fir-auth-react-7de70.firebaseapp.com",
    projectId: "fir-auth-react-7de70",
    storageBucket: "fir-auth-react-7de70.appspot.com",
    messagingSenderId: "212468264707",
    appId: "1:212468264707:web:9a635caa35e6c3cab60336",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
