import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // * Bu Context'te theme değişimini yapıyorum. Ayrıca theme değişimini local storage'a kayıt ediyorum.
  // * Sayfayı yenileyen veya kapatıp açan kişiler hangi modda kaldıysa oradan devam ediyor.

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
