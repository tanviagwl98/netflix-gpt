// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ONNFe9l0K3c1fF5oW0t2caNQ_yaJZOM",
  authDomain: "netflixgpt-703ea.firebaseapp.com",
  projectId: "netflixgpt-703ea",
  storageBucket: "netflixgpt-703ea.appspot.com",
  messagingSenderId: "972998141053",
  appId: "1:972998141053:web:3cf0913f06d5032cbe7d14",
  measurementId: "G-V5J61WQX5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);