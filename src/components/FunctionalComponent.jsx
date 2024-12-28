import {useContext} from 'react'
import { ThemeContext } from "./ThemeProvider"
const FunctionalComponent = () => {
    const useTheme = () => {
        return useContext(ThemeContext)
    }
    // const toggledTheme = useThemeToggle()
    // const getTheme = () => {
    //     useThemeToggle()
    // }
    return <>
    <button onClick={ useTheme}> test </button>
    </>
}
export default FunctionalComponent