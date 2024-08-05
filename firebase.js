// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPUhWjGgmKzXzdbmSfr_dkMc1g3Ovckv0",
  authDomain: "inventory-management-9af8a.firebaseapp.com",
  projectId: "inventory-management-9af8a",
  storageBucket: "inventory-management-9af8a.appspot.com",
  messagingSenderId: "185451090710",
  appId: "1:185451090710:web:7e9fbc14762e3e81a5b637",
  measurementId: "G-BLW9DDLR40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore}