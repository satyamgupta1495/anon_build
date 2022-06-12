import style from "../styles/Tipoff_Text.module.css"
import { useState } from "react"
import { db } from "../firebase"

import { collection, addDoc } from "firebase/firestore"

function App() {
  const [data, setData] = useState({})

  const collectionRef = collection(db, "users")

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value }

    setData({ ...data, ...newInput })
  }

  const handleSubmit = () => {
    addDoc(collectionRef, {
      text: data.text,
      tipp: data.tipp,
    })
      .then(() => {
        console.log("hello")
        alert("Tip-Off submitted")
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div className={style.container}>
      <div className={style.main}>
        <input
          className={style.input1}
          name="text"
          placeholder="What should we call you?"
          onChange={(event) => handleInput(event)}
        />

        <input
          className={style.input}
          name="tipp"
          placeholder="Insert your tipoff here..."
          onChange={(event) => handleInput(event)}
        />

        <div className={style.button}>
          <button type="submit" className={style.btn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
