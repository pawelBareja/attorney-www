import React from "react";
import Menu from "./Layout/Menu";
import Header from "./Components/Header";
import Offer from "./Components/Offer";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Layout/Footer";
import About from "./Components/About";
import Form2 from "./Components/Form2";
import ScrollToTop from "./Components/ScrollToTop";
import Cookies from "./Layout/Cookies";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: {
      fontWeight: "100",
      fontSize: "4.2rem",
      lineHeight: "1"
      // marginBottom: "20px"
    },
    h3: {
      marginTop: "80px",
      fontWeight: "100",
      textAlign: "center"
      // ["@media (max-width:768px)"]: {
      //   fontSize: "2rem"
      // }
    },
    p: {
      fontSize: "16px"
    },
    h6: {
      textTransform: "uppercase",
      fontWeight: "200"
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
        <Form2 />
        <Footer />
        <ScrollToTop />
        <Cookies />
      </ThemeProvider>
    </>
  );
}

export default Home;
