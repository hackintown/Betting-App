import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCHvhP5MHX3DMCLxmBV_b3CgC4mqcIXpog",
  authDomain: "excellent-hacks.firebaseapp.com",
  projectId: "excellent-hacks",
  storageBucket: "excellent-hacks.appspot.com",
  messagingSenderId: "86332685456",
  appId: "1:86332685456:web:d562d90b6a1d8d7ac7ac15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
export { app, db };