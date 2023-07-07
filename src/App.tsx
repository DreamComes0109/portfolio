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
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/about" Component={About} />
        <Route path="/project" Component={Project} />
        <Route path="/experience" Component={Experience} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
