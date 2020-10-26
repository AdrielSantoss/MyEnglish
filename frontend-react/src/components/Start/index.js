import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import levelIcon from '../../assets/icons/configuracao.png'
import {TemplateStart} from './style'
import './start.css'
import { LeftArrowAlt } from '@styled-icons/boxicons-regular/LeftArrowAlt'


export default function Start() {

  const navigation = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('user_MyEnglish')){
      navigation('/login')
    }
  },[])

  function setEasy(){
    localStorage.setItem('Difficulty_MyEnglish', 'easy')
    if(localStorage.getItem('Knowledge_test')){
      localStorage.removeItem('Knowledge_test')
    }
  }
  function setMedium(){
    localStorage.setItem('Difficulty_MyEnglish', 'medium')
    if(localStorage.getItem('Knowledge_test')){
      localStorage.removeItem('Knowledge_test')
    }

  }
  function setHard(){
    localStorage.setItem('Difficulty_MyEnglish', 'hard')
    if(localStorage.getItem('Knowledge_test')){
      localStorage.removeItem('Knowledge_test')
    }

  }
  function setRandom(event){
    if(event.firstChild.data === "Eu não sei"){
      localStorage.setItem('Difficulty_MyEnglish', 'random')
      localStorage.setItem('Knowledge_test', true)
    }else {
      localStorage.setItem('Difficulty_MyEnglish', 'random')
      localStorage.removeItem('Knowledge_test')
    }


  }

 return (
 
  <div className="start" >
      <TemplateStart className="mt-5">
      <div className="leftArrow">
                    <LeftArrowAlt size={45} onClick={() => { navigation('/') }} />
        </div>
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
            <div className="basic "><Link to="/types" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={()=>{setEasy()}}><div className="level-title">Básico</div></Link></div>
            <div className="intermediario "><Link to="/types" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={()=>{setMedium()}}><div className="level-title">Intermediario</div></Link></div>
            <div className="avanced "><Link to="/types" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={()=>{setHard()}}><div className="level-title">Avançado</div></Link></div>
            <div className="idontknow "><Link to="/game" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={(event)=>{setRandom(event.target)}}><div className="level-title">Eu não sei</div></Link></div>
        </div>
      </div>
      </TemplateStart>
  </div>

 );
}