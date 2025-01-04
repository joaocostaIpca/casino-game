import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRcADmjKXGcXt6KPMUoxMmJkyMLcAU8uw",
  authDomain: "gamblinggame-f6fcf.firebaseapp.com",
  projectId: "gamblinggame-f6fcf",
  storageBucket: "gamblinggame-f6fcf.appspot.com",
  messagingSenderId: "661998980834",
  appId: "1:661998980834:web:gamblinggame-f6fcf" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };