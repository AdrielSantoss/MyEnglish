import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import eua from '../../assets/icons/eua.png'
import {SignOutAlt} from '@styled-icons/fa-solid/SignOutAlt'
import {Palette} from '@styled-icons/boxicons-solid/Palette'
import {Star} from '@styled-icons/boxicons-solid/Star'


export default function Header() {

  const [name, setName] = useState('')
  const [theme, setTheme] = useState('')


  useEffect(()=>{
    if(localStorage.getItem('user_MyEnglish')){
      let user = JSON.parse(localStorage.getItem('user_MyEnglish'))
      let theme = localStorage.getItem('theme_MyEnglish')

      if(user){
        setName(user.name)
        alert('true')
      }else {
        setName('Login')
        alert('false')
      }

      if(theme === 'whiteMode'){
        setTheme('Tema - black')
      }else if(theme === 'darkMode') {
        setTheme('Tema - white')
      }
      
 }
  },[])

  function signOut(){
    localStorage.removeItem('user_MyEnglish')
    window.location.reload()
  }

 return (
   <div>
<nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
  <Link to="/"><a class="navbar-brand text-light ml-5 d-flex" href="#">MyEnglish <img src={eua} className="ml-2"/></a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse text-light" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

     
    </ul>
    <form class="form-inline my-2 my-lg-0 mr-5">
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {name}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item d-flex align-items-center" href="#">Conquistas <Star size={15} className="ml-1" color="grey"/></a>
          <a class="dropdown-item " href="#">{theme} <Palette size={15} className="ml-1" color="grey"/></a>
          <a class="dropdown-item d-flex align-items-center" href="#" onClick={()=>{signOut()}}>Sair <SignOutAlt size={15} className="ml-1" color="grey"/></a>
        </div>
    </div>
    </form>
  </div>
</nav>
   </div>
 );
}