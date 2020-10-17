import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import eua from '../../assets/icons/eua.png'
import english from '../../assets/imgs/lingua-inglesa.png'
import eua2 from '../../assets/icons/eua2.png'
import {SignOutAlt} from '@styled-icons/fa-solid/SignOutAlt'
import {Palette} from '@styled-icons/boxicons-solid/Palette'
import {Star} from '@styled-icons/boxicons-solid/Star'
import ThemeContext from '../../config/theme'
import {DropdownOpts} from './style'


export default function Header() {

  const [name, setName] = useState('Login')
  const [user, setUser] = useState('')
  const [theme, setTheme] = useState('')
  const {switchTheme} = useContext(ThemeContext)
  const navigation = useNavigate()


  useEffect(()=>{
    if(localStorage.getItem('user_MyEnglish')){
      let user = JSON.parse(localStorage.getItem('user_MyEnglish'))
      setUser(user)
      let theme = localStorage.getItem('theme_MyEnglish')

      if(user){
        setName(user.name)
      }

      if(theme === 'whiteMode'){
        setTheme('Tema - dark')

      }else if(theme === 'darkMode') {
        setTheme('Tema - light')

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
        setTheme('Tema - dark')

      }else if(theme === 'darkMode') {
        setTheme('Tema - light')
     
      }

  }
  function redirect(){
    if(!user){
      navigation('/login')
      window.location.reload()
    }
  }

 return (
   <div className="container-header">
<nav className={`navbar navbar-expand-lg navbar-light bg-dark text-light`}>
  <Link to="/"><a className="navbar-brand text-light ml-5 d-flex" href="#"><div ><img src={english} className="mr-1"/> MyEnglish </div></a> </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

     
    </ul>
    <form className="form-inline my-2 my-lg-0 mr-5">
        <div className="dropdown">
        <button className={`btn btn-secondary dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>{redirect()}}>
          {name}
        </button>
        <DropdownOpts display={user}>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item d-flex align-items-center" href="#">Conquistas <Star size={15} className="ml-1" color="grey"/></a>
            <a className="dropdown-item " href="#" onClick={()=>{switchThemeFunc()}}>{theme} <Palette size={15} className="ml-1" color="grey"/></a>
            <a className="dropdown-item d-flex align-items-center" href="#" onClick={()=>{signOut()}}>Sair <SignOutAlt size={15} className="ml-1" color="grey"/></a>
          </div>
        </DropdownOpts>
    </div>
    </form>
  </div>
</nav>
   </div>
 );
}