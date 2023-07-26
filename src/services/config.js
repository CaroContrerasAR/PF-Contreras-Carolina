import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBGU9ORz3qVIsqBub28ei8bZoAJmlGbwDk",
  authDomain: "express-56b8b.firebaseapp.com",
  projectId: "express-56b8b",
  storageBucket: "express-56b8b.appspot.com",
  messagingSenderId: "732491452751",
  appId: "1:732491452751:web:99240e9de91694db6d353a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);