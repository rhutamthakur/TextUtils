import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //DARK MODE USING STATE VARIABLE
  const [lightmode, setMode] = useState("light");
  const [btntext, setBtnText] = useState("Dark Mode");
  const toggleMode = () => {
    if (lightmode === "light") {
      setMode("dark");
      setBtnText("Light Mode");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      setBtnText("Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={lightmode}
          toggleMode={toggleMode}
          btntext={btntext}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                text="Enter text here"
                heading="Try TextUtils- Analyse Text"
                mode={lightmode}
                toggleMode={toggleMode}
              />
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={<About mode={lightmode} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
