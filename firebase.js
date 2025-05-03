// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgpIVYaDLheClhJQR0jd_WImi-IAJ08a8",
  authDomain: "instagram-e0cf1.firebaseapp.com",
  projectId: "instagram-e0cf1",
  storageBucket: "instagram-e0cf1.firebasestorage.app",
  messagingSenderId: "340591476229",
  appId: "1:340591476229:web:6aa646da755cecbba8e66c",
  measurementId: "G-Y6Q6FQE8MF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
getApp()
const db = getFirestore()
const storage = getStorage()


export {app, db, storage}
