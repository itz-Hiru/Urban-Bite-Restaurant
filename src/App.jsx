import React from "react";
import "./App.css";

import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";

import About from "./sections/About/About.section";
import Features from "./sections/Features/Features.section";
import Home from "./sections/Home/Home.section";
import Menu from "./sections/Menu/Menu.section";
import Reservation from "./sections/Reservation/Reservation.section";
import Testimonials from "./sections/Testimonials/Testimonials.section";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Reservation />
      <Features />
      <About />
      <Menu />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
