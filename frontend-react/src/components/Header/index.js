import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import eua from '../../assets/icons/eua.png'
import eua2 from '../../assets/icons/eua2.png'
import {SignOutAlt} from '@styled-icons/fa-solid/SignOutAlt'
import {Palette} from '@styled-icons/boxicons-solid/Palette'
import {Star} from '@styled-icons/boxicons-solid/Star'
import ThemeContext from '../../config/theme'


export default function Header() {

  const [name, setName] = useState('Login')
  const [color, setColor] = useState('secondary')
  const [colorBtn, setColorBtn] = useState('light')
  const [theme, setTheme] = useState('')
  const {switchTheme} = useContext(ThemeContext)


  useEffect(()=>{
    if(localStorage.getItem('user_MyEnglish')){
      let user = JSON.parse(localStorage.getItem('user_MyEnglish'))
      let theme = localStorage.getItem('theme_MyEnglish')

      if(user){
        setName(user.name)
      }

      if(theme === 'whiteMode'){
        setTheme('Tema - black')
        setColor('secondary')
        setColorBtn('light')
      }else if(theme === 'darkMode') {
        setTheme('Tema - white')
        setColor('dark')
        setColorBtn('secondary')
      }
      
 }
  },[])

  function signOut(){
    localStorage.removeItem('user_MyEnglish')
    window.location.reload()
   
  }

  function switchThemeFunc(){
    switchTheme()
    let theme = localStorage.getItem('theme_MyEnglish')

      if(theme === 'whiteMode'){
        setTheme('Tema - black')
        setColor('secondary')
        setColorBtn('light')
      }else if(theme === 'darkMode') {
        setTheme('Tema - white')
        setColor('dark')
        setColorBtn('secondary')
      }

  }

 return (
   <div>
<nav className={`navbar navbar-expand-lg navbar-light bg-${color} text-light`}>
  <Link to="/"><a className="navbar-brand text-light ml-5 d-flex" href="#"><img src={eua2} className="mr-2"/> MyEnglish <img src={eua} className="ml-2"/></a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

     
    </ul>
    <form className="form-inline my-2 my-lg-0 mr-5">
        <div className="dropdown">
        <button className={`btn btn-${colorBtn} dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {name}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item d-flex align-items-center" href="#">Conquistas <Star size={15} className="ml-1" color="grey"/></a>
          <a className="dropdown-item " href="#" onClick={()=>{switchThemeFunc()}}>{theme} <Palette size={15} className="ml-1" color="grey"/></a>
          <a className="dropdown-item d-flex align-items-center" href="#" onClick={()=>{signOut()}}>Sair <SignOutAlt size={15} className="ml-1" color="grey"/></a>
        </div>
    </div>
    </form>
  </div>
</nav>
   </div>
 );
}