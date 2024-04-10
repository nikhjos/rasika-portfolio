import React from "react";
import { About, Contact, Hero, Navbar, Skills, Footer } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
