// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2t5lvA8PQBBEo5ZRfEkREZI-iZ52LjVI",
  authDomain: "weather-website-app.firebaseapp.com",
  projectId: "weather-website-app",
  storageBucket: "weather-website-app.appspot.com",
  messagingSenderId: "63947773589",
  appId: "1:63947773589:web:438303655a288c9ab16d9c",
  measurementId: "G-HX1XY3J2HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);