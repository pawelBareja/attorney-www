import React from "react";
import Menu from "./Layout/Menu";
import Header from "./Components/Header";
import Offer from "./Components/Offer";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Layout/Footer";
import About from "./Components/About";
import Form from "./Components/Form";
import ScrollToTop from "./Components/ScrollToTop";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: {
      fontWeight: "100",
      fontSize: "5rem",
      lineHeight: "1"
      // marginBottom: "20px"
    },
    h3: {
      fontWeight: "100",
      textAlign: "center"
    },
    p: {
      fontSize: "16px"
    },
    body1: {
      fontSize: "16px",
      fontWeight: "300",
      lineHeight: "1.6"
    },
    body2: {
      fontSize: "16px",
      fontWeight: "300",
      lineHeight: "1.6"
    }
  },
  palette: {
    primary: {
      main: "#00c2ff"
    }
  }
});

function Home() {
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Menu />
        <Header />
        <Offer />
        <About />
        <HowItWorks />
        <Form />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default Home;
