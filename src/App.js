import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home"
import Questionaire from "./components/questionaire/Questionaire"
import Homepage from "./components/Homepage"
import About from "./components/About"
import Tipoff_image from "./components/Tipoff_image"
import Tipoff_audio from "./components/Tipoff_audio"
import Tipoff_text from "./components/Tipoff_text"
import Tipoff_video from "./components/Tipoff_video"
import Login from "./components/Login/Login"
import Register from "./components/Login/Register"
import { AuthProvider } from "./components/Login/AuthProvider"

function App() {
  return (
    <>
      <AuthProvider>
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
          <Route path="/tipoff_audio" element={<Tipoff_audio />} />
          <Route path="/tipoff_text" element={<Tipoff_text />} />
          <Route path="/tipoff_video" element={<Tipoff_video />} />

          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
