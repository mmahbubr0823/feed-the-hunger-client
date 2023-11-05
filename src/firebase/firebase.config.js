// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAfnmCjy32UmgmQ4qEmDLbFV9cbWPkIY8",
  authDomain: "feed-the-hunger-f361d.firebaseapp.com",
  projectId: "feed-the-hunger-f361d",
  storageBucket: "feed-the-hunger-f361d.appspot.com",
  messagingSenderId: "1003354294630",
  appId: "1:1003354294630:web:5472e77a8ba8af02fc60a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;