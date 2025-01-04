import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRcADmjKXGcXt6KPMUoxMmJkyMLcAU8uw",
  authDomain: "gamblinggame-f6fcf.firebaseapp.com",
  projectId: "gamblinggame-f6fcf",
  storageBucket: "gamblinggame-f6fcf.appspot.com",
  messagingSenderId: "661998980834",
  appId: "1:661998980834:web:ef8168c9ee7cb0f99898bb",
  measurementId: "G-75XLMQFC2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };