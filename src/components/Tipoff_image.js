import { useState } from "react"
import { app, storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import style from "../styles/Tipoff_Image.module.css"

function App() {
  const [data, setData] = useState({})
  const handleSubmit = () => {
    const storageRef = ref(storage, `images/${data.name}`)

    const uploadTask = uploadBytesResumable(storageRef, data)
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done")
      },
      (error) => {
        console.log(error.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL)
          alert("Image uploaded")
        })
      }
    )
  }
  return (
    <div className={style.container}>
      <div className={style.app}>
        <h4>Submit your image here</h4>
        <input
          className={style.customfile}
          type="file"
          accept="image/*"
          onChange={(event) => setData(event.target.files[0])}
        />

        {/* <button type="submit" onClick={getData}> */}
        <button type="button" className={style.btn} onClick={handleSubmit}>
          Submit tipoff
        </button>
      </div>
    </div>
  )
}

export default App
