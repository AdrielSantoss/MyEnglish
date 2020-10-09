import React, {useEffect, useState} from 'react';
import './header-content.css'
import {Link} from 'react-router-dom'


export default function Header_Content() {

  const [user, setUser] = useState('')
  const [name, setName] = useState('')
 

  useEffect(()=>{
    if(localStorage.getItem('user_MyEnglish')){
      let user = JSON.parse(localStorage.getItem('user_MyEnglish'))
      setUser(user)
      setName(user.name)
 }
  },[])

  function renderIntroduction(){
    if(localStorage.getItem('user_MyEnglish')){
      return (
        <div className="login-container" >
        <p className="login-msg">Seja muito bem vindo {name} , o que deseja fazer?</p>
        <div className="buttons-authentication">
        <Link to="/start"><button type="button" class="btn btn-dark mr-5 btn-lg">Começar</button></Link>
           <button type="button" class="btn btn-dark btn-lg">ChatRoom</button>
        </div>
    </div>
      )
 }else {
   return (
      <div className="login-container" >
        <p className="login-msg">Faça login para começar</p>
        <div className="buttons-authentication">
        <Link to="/login"><button type="button" class="btn btn-dark mr-5 btn-lg">Login</button></Link>
          <Link to="/register"><button type="button" class="btn btn-dark btn-lg">Register</button></Link>
        </div>
    </div>
   )
 }
  }

 return (
  <div className="menu-content">
  <h1 className="title"> Melhor sistema para a prática de inglês - com o melhor ritmo de desenvolvimento</h1>
  <p className="mt-4"> ipsum porro vitae ullam quaerat distinctio, labore dolor hic veritatis natus enim quam praesentium, ipsam iusto?</p>
  {renderIntroduction()}


</div> 
 );
}