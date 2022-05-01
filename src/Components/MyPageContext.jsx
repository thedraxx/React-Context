import React from "react";
import AuthContext, { AuthProvider } from "../context/AuthContext";
import { LanguajeProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { FooterContext } from "./FooterContext";
import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";

export const MyPageContext = () => {
  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LanguajeProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </LanguajeProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};
