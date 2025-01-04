// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmgCEhFHmyAoOje29Th3THJtrqj99F0LQ",
  authDomain: "dolevdublon146.firebaseapp.com",
  projectId: "dolevdublon146",
  storageBucket: "dolevdublon146.firebasestorage.app",
  messagingSenderId: "933055353702",
  appId: "1:933055353702:web:e2d66d8935221039e32ea7",
  measurementId: "G-LR91ECT20K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);