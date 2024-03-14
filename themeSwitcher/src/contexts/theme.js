import React, { createContext, useContext } from "react";


 const ThemeContext =   React.createContext({
    themeMode: "light",
    lightMode: () => {},
    darkMode: () => {},
});

const ThemeProvider = ThemeContext.Provider

const useTheme = () =>{
    return useContext(ThemeContext);
}

export {ThemeContext, ThemeProvider, useTheme}