import React, {useEffect, useState} from 'react';
import './header-content.css'
import {Link} from 'react-router-dom'
import {TemplateLogin, TemplateLogin2} from './style'


export default function Header_Content() {

  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [text, setText] = useState('')
 

  useEffect(()=>{
    if(localStorage.getItem('user_MyEnglish')){
      let user = JSON.parse(localStorage.getItem('user_MyEnglish'))
      let theme = localStorage.getItem('theme_MyEnglish')
      setUser(user)
      setName(user.name)


 }
  },[])

  function renderIntroduction(){
    if(localStorage.getItem('user_MyEnglish')){
      return (
        <TemplateLogin>
          <div className="buttons-authentication">
          <Link to="/start"><button type="button" className={`button`}>Começar</button></Link>
        
          </div>
        </TemplateLogin>
      )
 }else {
   return (
    <TemplateLogin2>
        <div className="buttons-authentication">
        <Link to="/login"><button type="button" className="btn btn-light mr-5 btn-lg">Login</button></Link>
          <Link to="/register"><button type="button" className="btn btn-secondary btn-lg">Register</button></Link>
        </div>
    </TemplateLogin2>
   )
 }
  }

 return (
  <div className="menu-content">
  <h1 className="title"> Melhor sistema para a prática de inglês - com o melhor ritmo de desenvolvimento</h1>
 <p className="mt-4"> Seja muito bem vindo(a) {name} deseja praticar seu conhecimento em inglês hoje? </p>
  {renderIntroduction()}


</div> 
 );
}