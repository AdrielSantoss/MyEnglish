import React, {useEffect, useState} from 'react';
import './images-listen-and-learning.css'
import home from '../../assets/audios/Home.mp3'
import $ from 'jquery'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ImagesListen_andLearning() {

    const [audio, setAudio] = useState('')

    useEffect(()=>{
        setAudio(document.querySelector('audio'))
        $('#next').removeClass('next-img')
        $('#next').addClass('disableButton')
        
    },[])

    function playAudio(){
        toast.success(`✔️ CORRETO!`, {
            autoClose: 1100
        })
        $('#next').removeClass('disableButton')
        $('#next').addClass('next-img')
        return audio.play()
    }

 return (
    <div>
    <div className="question-container">
        <div className="question-content">
            <div className="question-type">
                Images and learning <i className="fa fa-comments-o" aria-hidden="true"></i>
            </div>
            
            <div className="start" >
      <div className="images-wrapper">
      <div className="start-content" >
        <center>Selecione a imagem correspondente a palavra solicitada</center> 
        <hr/>
        <div className="images">
            <div className="slot1 " onClick={()=>{playAudio()}}><div className="level-title"></div></div>
            <div className="slot2 "><div className="level-title"></div></div>
            <div className="slot3 "><div className="level-title"></div></div>
            <div className="slot4 "><div className="level-title"></div></div>
        </div>
      </div>
      </div>
      <audio  className="audio">
        <source id="demo" src={home} type="audio/mpeg"/>
      </audio>

  </div>


            <div className="translate-wrapper">
                <div className="translate">
                    <div className="text1"></div>
                    <div className="text2"></div>
                    <div className="text3"></div>
                    <div className="text4"></div>
                </div>
            </div>
        </div>

    </div>
    <div className="responses-area">
        <div className="text-img">Home</div>
        <div className="next-img" id="next">Continuar</div>
    </div>
</div>
 );
}