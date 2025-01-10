import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import MyServices from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import End from "./components/End";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <MyServices />
      <Projects/>
      <Contact />
      <End/>
    </div>
  );
};

export default App;
