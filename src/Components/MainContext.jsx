import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

export const MainContext = ({auth}) => {
  const {theme} = useContext(ThemeContext)
  const {text} = useContext(LanguageContext)
  return (
    <main className={theme}>
      {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
      <p>{text.mainContent}</p>
    </main>
  );
};
