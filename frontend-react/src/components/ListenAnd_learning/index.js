import React, { useEffect, useState } from 'react';
import './listen-and-learning.css'
import $ from 'jquery'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Image} from './style.js'


export default function ListenAnd_learning(props) {

    const [error, setError] = useState(false)

    useEffect(()=>{
         setQuestion()

    },[])

    function setDifficulty(){
        if(props.item.difficulty === 'easy'){
            props.correct()
        }else if(props.item.difficulty === 'medium'){
            props.correctMedium()
        }else if(props.item.difficulty === 'hard'){
            props.correctHard()
        }
    }

    function setQuestion(){
        $('.text-listen').html(props.item.text)
        $('.response').html('____')
        $('#next').removeClass('next')
        $('#next').addClass('disableButton')
    }

    function setResponseError(evt){
        $('#next').removeClass('disableButton').addClass('next-error')
        $('#next').click(() => {
            props.rand()
        })
        toast.error(`❌ ERRADO!`, {
            autoClose: 1100
        })
        setError(!error)
    }

    function setResponse(evt){
        if(!error){
        if($('.response').html() === '____'){
            if(evt.target.value === props.item.r){
                evt.target.className = 'disableButton'
                $('.response').html(props.item.r)
                $('#next').removeClass('disableButton')
                $('#next').addClass('next')
                toast.success(`✔️ CORRETO!`, {
                    autoClose: 1100
                })
                $('#next').click(()=>{
                    props.rand()
                })
                setDifficulty()
                return
            }else {
                setResponseError(evt)
                $('.response').html(evt.target.value).removeClass('response').addClass('error-text')
                props.incorrect()
                return
            
        }}}
    }

    return (
        <div>
      <div class="question-container">
          <div class="question-content">
              <div class="question-type">
                   Listen and learning <i class="fa fa-comments-o" aria-hidden="true"></i>
              </div>
              <Image img={props.item.img}/>
              <audio controls>
                <source src="horse.ogg" type="audio/ogg"/>
                <source src={props.item.audio} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio> 
        
              <div class="text-listen"></div>
              
          </div>
      </div>

      <div class="responses-area">
          <div class="responses-options">
          <input type="button" value={props.item.btn1} onClick={(evt)=>{setResponse(evt)}} className="option" />
                    <input type="button" value={props.item.btn2} onClick={(evt)=>{setResponse(evt)}} className="option" />
                    <input type="button" value={props.item.btn3} onClick={(evt)=>{setResponse(evt)}} className="option" />
                    <input type="button" value={props.item.btn4} onClick={(evt)=>{setResponse(evt)}}className="option" />
                    <div className="next" id="next">Continuar</div>
          </div>
      </div>
        </div>
    );
}