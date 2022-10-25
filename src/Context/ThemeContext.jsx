import { createContext } from "react"

const theme = {
    light: {
        background: 'white',
        foreground: 'black',
        opacity: '#ffffff20'
    },
    dark: {
        background: 'black',
        foreground: 'white',
        opacity: '#00000020'
    }
}
const ThemeContext = createContext(theme)


export {ThemeContext, theme}
