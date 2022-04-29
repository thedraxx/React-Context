import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const MainContext = ({ text, auth }) => {
  const {theme} = useContext(ThemeContext)
  return (
    <main className={theme}>
      {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
      <p>{text.mainContent}</p>
    </main>
  );
};
