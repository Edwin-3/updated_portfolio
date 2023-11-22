import React, { useState } from 'react'
import Header from "./components/Header/header";
import Navbar from "./components/NavBar/navbar";
import Services from "./components/Services/services";
import Resume from "./components/Resume/resume";
import Footer from "./components/Footer/footer";
import Testimony from "./components/Testimonials/testimony";
import ProjectDetails from "./components/ProjectDetails/projectDetails";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectCarousel from "./components/Projects/project_carousel";
import Popup from "./components/Popups/popup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Services />
        <ProjectCarousel />
        <Resume />
        <Testimony />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
