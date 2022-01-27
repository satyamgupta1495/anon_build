import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Questionaire from "./components/questionaire/Questionaire";
import Tipoff from "./components/Tipoff";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/Login/LoginForm";

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
        <Route path="/image-upload" element={<Tipoff view={"image"} />} />
        <Route path="/text-upload" element={<Tipoff view={"text"} />} />
        <Route path="/audio-upload" element={<Tipoff view={"audio"} />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
