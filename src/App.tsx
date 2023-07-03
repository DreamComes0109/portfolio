import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Contact from "./components/layout/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Landing} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
