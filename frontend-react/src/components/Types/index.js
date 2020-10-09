import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import levelIcon from '../../assets/icons/configuracao.png'
import './types.css'

export default function Types() {

  const navigation = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('user_MyEnglish')){
      navigation('/login')
    }
  },[])

  function setDialogue(){
    localStorage.setItem('Type_MyEnglish', 'dialogue')
  }
  function setTranslate(){
    localStorage.setItem('Type_MyEnglish', 'translate')

  }
  function setListenAndLearning(){
    localStorage.setItem('Type_MyEnglish', 'listen and learning')

  }
  function setImagensAndLearning(){
    localStorage.setItem('Type_MyEnglish', 'images and learning')

  }
  function setSpeak(){
    localStorage.setItem('Type_MyEnglish', 'speak')

  }
  function setRandom(){
    localStorage.setItem('Type_MyEnglish', 'random')

  }


 return (
  <div className="start" >
      <div className="types-wrapper mt-5">
      <div className="start-content" >
        <div className="hello">
            <span className="icon icon--circle">
                <img src={levelIcon} alt="" srcset=""/>
                </span>
                <h1 className="hello-title">Select the type of questions</h1>
        </div>
        <center>Por favor, selecione o tipo das questões.</center> 
        <hr/>
        <div className="options-types">
            <div className="dialogue "><Link to="/game" onClick={()=>{setDialogue()}}><div className="level-title-types">Diálogos</div></Link></div>
            <div className="translate-type "><Link to="/game" onClick={()=>{setTranslate()}}><div className="level-title-types">Tradução</div></Link></div>
            <div className="listen-type "><Link to="/game" onClick={()=>{setListenAndLearning()}}><div className="level-title-types">Ouvir e traduzir</div></Link></div>
            <div className="listen-and-learning-type "><Link to="/game" onClick={()=>{setImagensAndLearning()}}><div className="level-title-types">Imagens e audios</div></Link></div>
            <div className="speak-pronounce "><Link to="/game" onClick={()=>{setSpeak()}}><div className="level-title-types">Fala e pronúncia</div></Link></div>
            <div className="random-type "><Link to="/game" onClick={()=>{setRandom()}}><div className="level-title-types">Aleatório - todos</div></Link></div>
        </div>
      </div>
      </div>


  </div>
 );
}