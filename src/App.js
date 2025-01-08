import React from "react";
import "./App.css";
import Navbar from "./navbar";
import Home from "./Home/Home";
import About from "./about/about";
import Work from "./work/work";
import Contact from "./contact/contact";

function App() {
  return (
    // <div className="App">
    //   <Navbar></Navbar>
    //   <Home />
    //   <About />
    //   <Work />

    // </div>
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
