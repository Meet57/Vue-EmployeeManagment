// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4UJf5es5jpV_i2_mUWR-gQpe6sWv569s",
    authDomain: "employeemanagment-e3979.firebaseapp.com",
    projectId: "employeemanagment-e3979",
    storageBucket: "employeemanagment-e3979.appspot.com",
    messagingSenderId: "662846082182",
    appId: "1:662846082182:web:3c1516faf1b3673f019507",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;