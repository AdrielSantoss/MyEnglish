import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import levelIcon from '../../assets/icons/configuracao.png'
import {TemplateTypes} from './style'
import SpeechRecognition from 'react-speech-recognition'
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
    navigation('/game')
  }
  function setTranslate(){
    localStorage.setItem('Type_MyEnglish', 'translate')
    navigation('/game')

  }
  function setListenAndLearning(){
    localStorage.setItem('Type_MyEnglish', 'listen and learning')
    navigation('/game')

  }
  function setImagensAndLearning(){
    localStorage.setItem('Type_MyEnglish', 'images and learning')
    navigation('/game')

  }
  function setSpeak(){
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert('Seu navegador não é compativel com o reconhecimento de voz do sistema.')
      return
    }else {
      localStorage.setItem('Type_MyEnglish', 'speak')
      navigation('/game')
    }
  }

  function setRandom(){
    localStorage.setItem('Type_MyEnglish', 'random')
    navigation('/game')

  }


 return (
  <div className="start" >
      <TemplateTypes className="mt-5">
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
            <div className="dialogue "><span onClick={()=>{setDialogue()}}><div className="level-title-types">Diálogos</div></span></div>
            <div className="translate-type "><span onClick={()=>{setTranslate()}}><div className="level-title-types">Tradução</div></span></div>
            <div className="listen-type "><span onClick={()=>{setListenAndLearning()}}><div className="level-title-types">Ouvir e traduzir</div></span></div>
            <div className="listen-and-learning-type "><span onClick={()=>{setImagensAndLearning()}}><div className="level-title-types">Imagens e audios</div></span></div>
            <div className="speak-pronounce "><span  onClick={()=>{setSpeak()}}><div className="level-title-types">Fala e pronúncia</div></span></div>
            <div className="random-type "><span onClick={()=>{setRandom()}}><div className="level-title-types">Aleatório - todos</div></span></div>
        </div>
      </div>
      </TemplateTypes>
  </div>
 );
}