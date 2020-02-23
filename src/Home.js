import React from "react";
import Header from "./Layout/Header";
import Head from "./Components/Head";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Layout/Footer";
import About from "./Components/About";

function Home() {
  return (
    <>
      <Header />
      <Head />
      <HowItWorks />
      <About />
      <Footer />
    </>
  );
}

export default Home;
