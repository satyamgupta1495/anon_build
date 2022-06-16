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
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Signup"
import {UserAuthContextProvider} from "./components/context/UserAuthContext"
// import { AuthProvider } from "./components/Login/AuthProvider"

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tipoff" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/questionaire" element={<Questionaire />} />
          <Route path="/tipoff_image" element={<Tipoff_image />} />
          <Route path="/tipoff_audio" element={<Tipoff_audio />} />
          <Route path="/tipoff_text" element={<Tipoff_text />} />
          <Route path="/tipoff_video" element={<Tipoff_video />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  )
}

export default App
