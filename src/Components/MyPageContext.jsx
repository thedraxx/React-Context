import React from "react";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { FooterContext } from "./FooterContext";
import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";

const initialLanguage = "es";

const translations = {
  es: {
    headerTitle: "Mi aplicación CON Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const initialAuth = null;

export const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setText(translations.es);
    }
    if (e.target.value === "en") {
      setLanguage("en");
      setText(translations.en);
    }
  };

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <ThemeProvider>
        <HeaderContext
          text={text}
          handleLanguage={handleLanguage}
          auth={auth}
          handleAuth={handleAuth}
        />
        <MainContext text={text} auth={auth} />
        <FooterContext text={text} />
      </ThemeProvider>
    </div>
  );
};
