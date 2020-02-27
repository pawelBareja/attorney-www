import React from "react";
import Header from "./Layout/Header";
import Head from "./Components/Head";
import Offer from "./Components/Offer";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Layout/Footer";
import About from "./Components/About";
import Form from "./Components/Form";
import ScrollToTop from "./Components/ScrollToTop";

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "rgba(187, 222, 240, 0.4)" }}>
        <Header />
        <Head />
        <Offer />
        <HowItWorks />
        <About />
        <Form />
        <Footer />

        <ScrollToTop />
      </div>
    </>
  );
}

export default Home;
