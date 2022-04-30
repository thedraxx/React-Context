import React from 'react'
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from "../context/ThemeContext";

export const FooterContext = () => {

  const {theme} = useContext(ThemeContext)
  const {text} = useContext(LanguageContext)

  return (
    <footer className={theme}>
    <h4>{text.footerTitle}</h4>
  </footer>
  )
}
