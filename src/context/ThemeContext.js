import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const data = {
        theme,
        setTheme
    }

    console.log(theme);
    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}