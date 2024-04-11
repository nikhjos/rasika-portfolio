import React, { useState } from "react";
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
  const [sidebar, setSitebar] = useState(false);

  const showSidebar = () => {
    setSitebar(!sidebar);
  };

  return (
    <>
      <Navbar sidebar={sidebar} showSidebar={showSidebar} />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
    </>
  );
};

export default App;
