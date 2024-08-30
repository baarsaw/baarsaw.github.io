import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';


// import Project1 from './pages/Project1';
// import Project2 from './pages/Project2';
// import Project3 from './pages/Project3';
// import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<GalleryPage />} />

          {/* <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Welcome!</h1>
    //     <img src={headshot} className="App-Headshot" alt="Headshot" />
    //     <h2>About</h2>
    //     <p>Sawyer is a Computer Science Student at Oregon State University with a background as a Professional mechanical engineer.</p>
    //     <p>For a  </p>
    //     <h2>Skills and Interests</h2>
    //     <p></p>
    //     <h2>Projects</h2>
    //     <p>The following projects showcase Sawyer's ability and experience.</p>
    //     <ul>
    //       {/* <li><Link to="/">Project 1 - Personal Website - Using React</Link></li>
    //       <li><Link to="/Snake">Project 2 - Snake Game - In-Browser</Link></li> */}
    //       <li>More Projects to Come.</li>
    //     </ul>
    //   </header>
    // </div>
  );
}

export default App;
