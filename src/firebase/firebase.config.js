// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA9_07F4Uit-VWDBnsFfS3_CNFSmhxa40",
  authDomain: "user-email-password-auth-cfb7a.firebaseapp.com",
  projectId: "user-email-password-auth-cfb7a",
  storageBucket: "user-email-password-auth-cfb7a.appspot.com",
  messagingSenderId: "472904220763",
  appId: "1:472904220763:web:218ab1762a935d2b99ff7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
