import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './config/routes'
import {ThemeProvider} from 'styled-components'
import ThemeContext from './config/theme'
import { Transition } from 'react-transition-group';


function App({ in: inProp }) {


  const LightTheme = {
    background: 'rgb(123, 140, 158)',
    icons: 'black',
    backgroundContent: 'white',
    color: 'black'
  }
  const DarkTheme = {
    background: 'rgb(56, 62, 71)',
    icons: 'white',
    backgroundContent: 'rgb(56, 62, 71)',
    color: 'white'
  }
  
  const [theme, setTheme] = useState(LightTheme)

  useEffect(()=>{

    const currentTheme = localStorage.getItem('theme_MyEnglish')
    if(currentTheme === 'whiteMode'){
      setTheme(LightTheme)
    }else {
      setTheme(DarkTheme)
    }

  },[])

  const handleDarkMode = ()=>{
    const currentTheme = localStorage.getItem('theme_MyEnglish')
    if(currentTheme === 'whiteMode'){
      localStorage.setItem('theme_MyEnglish', 'darkMode')
      setTheme(DarkTheme)
    }else {
      localStorage.setItem('theme_MyEnglish', 'whiteMode')
      setTheme(LightTheme)
    }
    
  }
  

  return (
    <Router>
       <Transition in={inProp} timeout={500}>
      <div className="App">
      <ThemeContext.Provider value={{
        switchTheme: handleDarkMode
      }}>
        <ThemeProvider theme={theme}>
            <Routes/>
        </ThemeProvider>
      </ThemeContext.Provider>
      </div>
      </Transition>
    </Router>
  )
}

export default App;
