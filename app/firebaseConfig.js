import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHvhP5MHX3DMCLxmBV_b3CgC4mqcIXpog",
  authDomain: "excellent-hacks.firebaseapp.com",
  projectId: "excellent-hacks",
  storageBucket: "excellent-hacks.appspot.com",
  messagingSenderId: "86332685456",
  appId: "1:86332685456:web:d562d90b6a1d8d7ac7ac15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export { app, db, auth };
