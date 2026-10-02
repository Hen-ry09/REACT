// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5i0lKEYJZbY3Q6nxg1uEeNje0TWcL0rM",
  authDomain: "school-management-app-88d4e.firebaseapp.com",
  projectId: "school-management-app-88d4e",
  storageBucket: "school-management-app-88d4e.firebasestorage.app",
  messagingSenderId: "965183509572",
  appId: "1:965183509572:web:9ea4a7ec2d866394245811",
  measurementId: "G-PV5J16BBSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}