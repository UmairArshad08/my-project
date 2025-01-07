import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import MyServices from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <MyServices />
      <Projects/>
      <Contact />
    </div>
  );
};

export default App;
