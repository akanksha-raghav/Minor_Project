import React from "react";
import Contact from "./components/ContactUs";
import About from "./components/AboutUs";
import Opportunties from "./components/Opportunities";
import MainTile from "./components/maintile"

const MainPage = () => {
  return (
    <div>
      <MainTile />
      <About />
      <Opportunties />
      <Contact />
    </div>
  );
};

export default MainPage;
