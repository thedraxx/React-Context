import React from "react";
import { useState } from "react";
import { LanguajeProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { FooterContext } from "./FooterContext";
import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";

const initialAuth = null;

export const MyPageContext = () => {
  
  const [auth, setAuth] = useState(initialAuth);

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
        <LanguajeProvider>
        <HeaderContext
          auth={auth}
          handleAuth={handleAuth}
        />
        <MainContext auth={auth} />
        <FooterContext/>
        </LanguajeProvider>
      </ThemeProvider>
    </div>
  );
};
