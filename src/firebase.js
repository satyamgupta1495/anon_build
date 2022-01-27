// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK1H0upQJZeb71uygARTH4QDpfUmonS-k",
  authDomain: "auth-production-6ede5.firebaseapp.com",
  projectId: "auth-production-6ede5",
  storageBucket: "auth-production-6ede5.appspot.com",
  messagingSenderId: "182844112609",
  appId: "1:182844112609:web:8af951c664cff2edb141a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password){

}