import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem("darkMode", newMode.toString());
            return newMode;
        });
    };

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
