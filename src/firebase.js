import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage" //Files
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore" //Dtabase
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBjSPe3ydSYYK2hx3PKwGQ0L04dPShJTJw",
  authDomain: "anon-tipoff.firebaseapp.com",
  projectId: "anon-tipoff",
  storageBucket: "anon-tipoff.appspot.com",
  messagingSenderId: "728544169952",
  appId: "1:728544169952:web:3217730e566d4703e36585",
}
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const logout = () => {
  signOut(auth)
}
export {
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
