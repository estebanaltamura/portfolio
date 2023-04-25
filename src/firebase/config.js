// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5FF2zwoF9xgTvsvL2uAsGAStv2G8J-t8",
  authDomain: "portafolio-b98ea.firebaseapp.com",
  projectId: "portafolio-b98ea",
  storageBucket: "portafolio-b98ea.appspot.com",
  messagingSenderId: "282706245894",
  appId: "1:282706245894:web:65623650f9395868168687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFireBase = ()=> app
