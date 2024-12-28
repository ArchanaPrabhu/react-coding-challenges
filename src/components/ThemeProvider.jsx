import { useContext, useState } from "react"
import React from "react"

export const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext()


export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeToggle = () => {
    return useContext(ThemeUpdateContext)
}



const ThemeProvider = ( { children } ) => {
    const [darkTheme, setTheme] = useState(false)
    const toggleFunction = () => {
        // console.log(test)
        setTheme(!darkTheme)
    }
    return (<ThemeContext.Provider value = { darkTheme }>
        <ThemeUpdateContext.Provider value = { toggleFunction }>
        {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>)
}

export default ThemeProvider

    
