import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const localData = window.localStorage.getItem("theme")
    const [theme, setTheme] = useState(localData || "light")

    useEffect(() => {
        window.localStorage.setItem("theme", theme)
    }, [theme])

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