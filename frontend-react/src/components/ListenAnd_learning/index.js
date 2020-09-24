import React, { useEffect, useState } from 'react';
import './listen-and-learning.css'
import $ from 'jquery'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ListenAnd_learning(props) {


    useEffect(()=>{
         setQuestion()

    },[])

    function setQuestion(){
        $('.text-listen').html(props.item.text)
        $('.response').html('____')
        $('#next').removeClass('next')
        $('#next').addClass('disableButton')
    }

    function setResponse(evt){
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
                return
            }else {
                alert('erro')
                return
            
        }}
    }

    return (
        <div>
      <div class="question-container">
          <div class="question-content">
              <div class="question-type">
                   Listen and learning <i class="fa fa-comments-o" aria-hidden="true"></i>
              </div>
              <div class="image">
              </div>
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