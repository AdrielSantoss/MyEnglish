import {createContext} from 'react'

const ThemeContext = createContext({defaultValue: {
    switchTheme: ()=>{}
}})

export default ThemeContext