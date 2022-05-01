import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

export const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { text, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light-Context"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light-Context">{text.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark-Context"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark-Context">{text.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? text.buttonLogout : text.buttonLogin}
      </button>
    </header>
  );
};
