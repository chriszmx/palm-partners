// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDR3fZiszUdyW-THJ4sYd-U-aVCEObYuWk",
    authDomain: "palm-partners.firebaseapp.com",
    projectId: "palm-partners",
    storageBucket: "palm-partners.appspot.com",
    messagingSenderId: "1009906349834",
    appId: "1:1009906349834:web:87273b26b6e854b555ecf3",
    measurementId: "G-4EZQL0XR2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const db = getFirestore(app);

export { app, analytics, firestore, db }
