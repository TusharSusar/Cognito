import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8JDmWMYCj_eYE5GIBCHvMXYcSPTtXuwg",
  authDomain: "cognito-dc317.firebaseapp.com",
  databaseURL: "https://cognito-dc317-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cognito-dc317",
  storageBucket: "cognito-dc317.firebasestorage.app",
  messagingSenderId: "156968064706",
  appId: "1:156968064706:web:33fedb0a0474a0fa65cd5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);