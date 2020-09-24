import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import levelIcon from '../../assets/icons/configuracao.png'
import './start.css'

export default function Start() {

  const navigation = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('user_MyEnglish')){
      navigation('/login')
    }
  },[])


 return (
  <div className="start" >
      <div className="start-wrapper mt-5">
      <div className="start-content" >
        <div className="hello">
            <span className="icon icon--circle">
                <img src={levelIcon} alt="" srcset=""/>
                </span>
                <h1 className="hello-title">Select your level</h1>
        </div>
        <center>Por favor, selecione seu nível de conhecimento em inglês.</center> 
        <hr/>
        <div className="levels">
            <div className="basic "><div className="level-title">Básico</div></div>
            <div className="intermediario "><div className="level-title">Intermediario</div></div>
            <div className="avanced "><div className="level-title">Avançado</div></div>
            <div className="idontknow "><Link to="/intro"><div className="level-title">Eu não sei</div></Link></div>
        </div>
      </div>
      </div>


  </div>
 );
}