import React, {useEffect, useState} from 'react';
import './header-content.css'
import {Link} from 'react-router-dom'
import {TemplateLogin, TemplateLogin2} from './style'



export default function Header_Content() {

  const [text, setText] = useState('Faça o login para ter acesso ao sistema e poder praticar seu inglês com diálogos, traduções, áudios e reconhecimento de voz 😉💻 ')
 

  useEffect(()=>{
    if(localStorage.getItem('user_MyEnglish')){
      let user = JSON.parse(localStorage.getItem('user_MyEnglish'))
      let theme = localStorage.getItem('theme_MyEnglish')

      if(user){
        let txt = `Seja muito bem vindo(a) ${user.name} deseja praticar seu conhecimento em inglês hoje?`
        setText(txt)
      }


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
        <Link to="/login"><button type="button" className="btn btn-dark mr-5 btn-lg">Login</button></Link>
          <Link to="/register"><button type="button" className="btn btn-dark btn-lg">Register</button></Link>
        </div>
    </TemplateLogin2>
   )
 }
  }

 return (
  <div className="menu-content">
  <h1 className="title"> Melhor sistema para a prática de inglês - com o melhor ritmo de desenvolvimento</h1>
 <p className="mt-4">{text}  </p>
  {renderIntroduction()}


</div> 
 );
}