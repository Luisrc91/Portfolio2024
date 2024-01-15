import logo from "./logo.svg";
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
