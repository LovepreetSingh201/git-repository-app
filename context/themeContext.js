import React, { createContext, useState, useContext } from 'react';
import { themeColors } from '../src/theme/theme';


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    return (
        <ThemeContext.Provider
            // value={{ theme: themeColors.dark}}
            value={{ theme: isDarkMode ? themeColors.dark : themeColors.light, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
