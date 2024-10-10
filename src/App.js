import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
import ProjectsPic from "./Pages/ProjectsPic";

function App() {
  return (
    <div className="bg-gradient-to-br from-black to-red-800 min-h-screen">
      <Router>
        <header className="App-header">
          <NavBar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/MainProjects" element={<ProjectsPic />} />
        </Routes>
        <About />
        <ProjectsPic />
        <ContactMe />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
