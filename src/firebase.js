import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEhECWdflHLoxxPrxlAkxr8qi2AeEvhnI",
  authDomain: "empathetic-proxy-s2c1-feminist.firebaseapp.com",
  databaseURL: "https://empathetic-proxy-s2c1-feminist-default-rtdb.firebaseio.com",
  projectId: "empathetic-proxy-s2c1-feminist",
  storageBucket: "empathetic-proxy-s2c1-feminist.appspot.com",
  messagingSenderId: "823549544984",
  appId: "1:823549544984:web:7413b0771302e4364e516d",
  measurementId: "G-FC7LVJK9HT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getDatabase(firebaseApp);