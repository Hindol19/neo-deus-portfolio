import "./App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // particlesJS.load("particles-js", "assets/particles.json", function () {
  //   console.log("callback - particles.js config loaded");
  // });
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
