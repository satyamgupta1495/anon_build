import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Questionaire from "./components/questionaire/Questionaire";
import Tipoff from "./components/Tipoff";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tipoff />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Questionaire" element={<Questionaire />} />
        <Route 
          path="/image-upload"  
          element={<Tipoff view={'image'}/>}
        />
        <Route path="/text-upload" element={<Tipoff view={'text'}/>} />
        <Route path="/audio-upload" element={<Tipoff view={'audio'}/>} />
      </Routes>
    </>
  );
}

export default App;
