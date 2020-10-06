import React, { useEffect, useState } from 'react';
import './listen-and-learning.css'
import '../../assets/css/global.css'
import $ from 'jquery'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ShowButton, Button, ButtonsArea, ButtonsWrapper} from '../../assets/styleds/global'
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
        $('.response2').html('____')
        $('.response3').html('____')
        $('.response4').html('____')
        $('#next').removeClass('next')
        $('#next').addClass('disableButton')
    }

    function setResponseError(evt){
        evt.target.className='disableButton'
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
                if(!props.item.r2){
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').click(()=>{
                        props.rand()
                    })
                }
                setDifficulty()
                return
            }else {
                setResponseError(evt)
                $('.response').html(evt.target.value).removeClass('response').addClass('error-text')
                props.incorrect()
                return
            
        }}
        if($('.response2').html() === '____'){
            if(evt.target.value === props.item.r2){
                evt.target.className = 'disableButton'
                $('.response2').html(props.item.r2)
                if(!props.item.r3){
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').click(()=>{
                        props.rand()
                    })
                }
                setDifficulty()
                return
            }else {
                setResponseError(evt)
                $('.response2').html(evt.target.value).removeClass('response2').addClass('error-text')
                props.incorrect()
                return
            
        }}
        if($('.response3').html() === '____'){
            if(evt.target.value === props.item.r3){
                evt.target.className = 'disableButton'
                $('.response3').html(props.item.r3)
                if(!props.item.r4){
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').click(()=>{
                        props.rand()
                    })
                }
                setDifficulty()
                return
            }else {
                setResponseError(evt)
                $('.response3').html(evt.target.value).removeClass('response3').addClass('error-text')
                props.incorrect()
                return
            
        }}
        if($('.response4').html() === '____'){
            if(evt.target.value === props.item.r4){
                evt.target.className = 'disableButton'
                $('.response4').html(props.item.r4)
      
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
                $('.response4').html(evt.target.value).removeClass('response4').addClass('error-text')
                props.incorrect()
                return
            
        }}
    }
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
            <ButtonsArea>
                        <ButtonsWrapper>
                            <input type="button" className="option" value={props.item.btn1} onClick={(evt) => { setResponse(evt) }} />
                            <input type="button" className="option" value={props.item.btn2} onClick={(evt) => { setResponse(evt) }} />
                            <input type="button" className="option" value={props.item.btn3} onClick={(evt) => { setResponse(evt) }} />
                            <input type="button" className="option" value={props.item.btn4} onClick={(evt) => { setResponse(evt) }} />
                            <ShowButton display={props.item.btn5} className="buttonWrapper" >
                                <Button  className="option" value={props.item.btn5} onClick={(evt) => { setResponse(evt) }}/>
                            </ShowButton>
                            <ShowButton display={props.item.btn6} className="buttonWrapper" >
                                <Button  className="option" value={props.item.btn6} onClick={(evt) => { setResponse(evt) }}/>
                            </ShowButton>
                            <ShowButton display={props.item.btn7} className="buttonWrapper">
                                <Button  className="option" value={props.item.btn7} onClick={(evt) => { setResponse(evt) }}/>
                            </ShowButton>
                            <ShowButton display={props.item.btn8} className="buttonWrapper">
                                <Button className="option" value={props.item.btn8} onClick={(evt) => { setResponse(evt) }}/>
                            </ShowButton>
                            <div className="next" id="next">Continuar</div>
                        </ButtonsWrapper>
                    </ButtonsArea>
          </div>
      </div>
        </div>
    );
}