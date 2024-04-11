import React from "react";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Skills,
  Footer,
  Sidebar,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Sidebar />
    </>
  );
};

export default App;
