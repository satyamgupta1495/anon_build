import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" //Dtabase
import { getStorage } from "firebase/storage" //Files

const firebaseConfig = {
  apiKey: "AIzaSyBjSPe3ydSYYK2hx3PKwGQ0L04dPShJTJw",
  authDomain: "anon-tipoff.firebaseapp.com",
  projectId: "anon-tipoff",
  storageBucket: "anon-tipoff.appspot.com",
  messagingSenderId: "728544169952",
  appId: "1:728544169952:web:3217730e566d4703e36585",
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore(app)
