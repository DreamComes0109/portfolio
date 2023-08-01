import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import About from "./components/home/About";
import Project from "./components/home/Project";
import Contact from "./components/layout/Contact";
import Experience from "./components/home/Experience";

function App() {
  return (
    <Router>
      <Header />
      <Landing />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
