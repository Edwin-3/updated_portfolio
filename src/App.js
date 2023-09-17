import React from "react";
import Header from "./components/Header/header";
import Navbar from "./components/NavBar/navbar";
import Services from "./components/Services/services";
import Project from "./components/Projects/project";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Project />
    </div>
  );
}

export default App;
