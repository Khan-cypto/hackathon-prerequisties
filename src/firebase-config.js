// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ1BUuFGLG4WMIgmVh8GYE6_SyJBmND8g",
  authDomain: "hackathon-react-app.firebaseapp.com",
  projectId: "hackathon-react-app",
  storageBucket: "hackathon-react-app.appspot.com",
  messagingSenderId: "484621875220",
  appId: "1:484621875220:web:761dc65d08148e05748f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);