import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home"
import Questionaire from "./components/questionaire/Questionaire"
import Homepage from "./components/Homepage"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import LoginForm from "./components/Login/LoginForm"
import Tipoff_image from "./components/Tipoff_image"
import Tipoff_audio from "./components/Tipoff_audio"
import Tipoff_text from "./components/Tipoff_text"
import Tipoff_video from "./components/Tipoff_video"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tipoff" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/tipoff" element={<Tipoff />} /> */}
        <Route path="/questionaire" element={<Questionaire />} />
        {/* <Route path="/tipoff1" element={<hello />} /> */}

        {/* <Route path="/image-upload" element={<Tipoff view={"image"} />} />
        <Route path="/text-upload" element={<Tipoff view={"text"} />} />
        <Route path="/audio-upload" element={<Tipoff view={"audio"} />} />  */}

        <Route path="/tipoff_image" element={<Tipoff_image />} />
        {/* <Route path="/tipoff2" element={<FileUpload view={"text"} />} /> */}
        <Route path="/tipoff_audio" element={<Tipoff_audio />} />
        <Route path="/tipoff_text" element={<Tipoff_text />} />
        <Route path="/tipoff_video" element={<Tipoff_video />} />

        <Route path="/dash" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/tipoff2" element={<FileUpload />} /> */}
      </Routes>
    </>
  )
}

export default App
