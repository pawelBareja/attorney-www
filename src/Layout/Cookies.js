import React from "react";
import CookieConsent from "react-cookie-consent";
// import polityka from "../assets/docs/polityka_prywatnosci.pdf";

const style = {
  container: {
    // position: "fixed",
    // width: "70vw",
    // height: "400px",
    // right: "0",
    // bottom: "0",
    // margin: "10px",
    borderRadius: "5px",
    background: "rgba(43, 55, 59, 0.9)"
  },
  content: {
    // position: "absolute",
    // left: "50%",
    // top: "50%",
    // transform: "translate(-50%, -50%)",
    // width: "100%",
    // color: "#fff",
    // padding: "20px",
    // borderRadius: "20px",
    // margin: "0"
  },
  button: {
    // position: "absolute",
    // left: "50%",
    // top: "75%",
    // transform: "translate(-50%, -50%)",
    // color: "#fff",
    background: "#00c2ff",
    borderRadius: "10px",
    // fontSize: "13px",
    // padding: "5px 20px",
    // margin: "0",
    cursor: "pointer"
  }
};

const Cookies = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Zgoda"
      cookieName="myAwesomeCookieName2"
      style={style.container}
      buttonStyle={style.button}
      expires={30}
      acceptOnScroll={false}
      acceptOnScrollPercentage={50}
      debug={true}
      contentStyle={style.content}
    >
      <p>
        Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
        poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się z{" "}
        <a
          // href={polityka}
          target="blank"
          style={{ textDecoration: "underline", color: "#fff" }}
        >
          polityką prywatności serwisu.
        </a>
      </p>
    </CookieConsent>
  );
};

export default Cookies;
