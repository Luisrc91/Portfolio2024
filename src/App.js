import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectsPic from './Pages/ProjectsPic';

// import './style/scss/index.scss'


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar />
        </header>
      {/* < Home /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/MainProjects" element={<ProjectsPic />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
