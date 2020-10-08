import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import levelIcon from '../../assets/icons/configuracao.png'
import './start.css'

export default function Start() {

  const navigation = useNavigate()

  useEffect(()=>{
    /*if(!localStorage.getItem('user_MyEnglish')){
      navigation('/login')
    }*/
  },[])

  function setEasy(){
    localStorage.setItem('Difficulty_MyEnglish', 'easy')
  }
  function setMedium(){
    localStorage.setItem('Difficulty_MyEnglish', 'medium')

  }
  function setHard(){
    localStorage.setItem('Difficulty_MyEnglish', 'hard')

  }
  function setRandom(){
    localStorage.setItem('Difficulty_MyEnglish', 'random')

  }


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
            <div className="basic "><Link to="/game" onClick={()=>{setEasy()}}><div className="level-title">Básico</div></Link></div>
            <div className="intermediario "><Link to="/game" onClick={()=>{setMedium()}}><div className="level-title">Intermediario</div></Link></div>
            <div className="avanced "><Link to="/game" onClick={()=>{setHard()}}><div className="level-title">Avançado</div></Link></div>
            <div className="idontknow "><Link to="/game" onClick={()=>{setRandom()}}><div className="level-title">Eu não sei</div></Link></div>
        </div>
      </div>
      </div>


  </div>
 );
}