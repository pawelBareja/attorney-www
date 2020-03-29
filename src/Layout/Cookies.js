import React from "react";
import CookieConsent from "react-cookie-consent";

const style = {
  container: {
    borderRadius: "5px",
    background: "rgba(43, 55, 59, 0.9)"
  },
  content: {},
  button: {
    background: "#00c2ff",
    borderRadius: "10px",
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
      debug={false}
      contentStyle={style.content}
    >
      <p>
        Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
        poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się z{" "}
        <a
          href="#"
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
