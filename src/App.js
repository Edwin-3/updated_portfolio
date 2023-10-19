import React from "react";
import Header from "./components/Header/header";
import Navbar from "./components/NavBar/navbar";
import Services from "./components/Services/services";
import Project from "./components/Projects/project";
import Resume from "./components/Resume/resume";
import Footer from "./components/Footer/footer";
import Testimony from "./components/Testimonials/testimony";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Project />
      <Resume />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
