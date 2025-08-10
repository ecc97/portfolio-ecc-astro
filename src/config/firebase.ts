// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkcjiHhv8gH4vj9HPsEYxfPB3rCmrSYmc',
  authDomain: 'projects-list-eck.firebaseapp.com',
  projectId: 'projects-list-eck',
  storageBucket: 'projects-list-eck.firebasestorage.app',
  messagingSenderId: '225068183595',
  appId: '1:225068183595:web:65e1f472db268fb3b5ba6e'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
