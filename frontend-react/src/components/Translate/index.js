import React, {useEffect, useState} from 'react';
import './translate.css'
import $ from 'jquery'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Image} from './style.js'

export default function Translate(props) {

    const [error, setError] = useState(false)

    useEffect(()=>{

        setQuestion()
        wordCounter()
        
    },[])

    function setQuestion(){
       $('.text').html(props.item.text)
       $('#next').removeClass('next')
       $('#next').addClass('disableButton')
     
    }

    

    function wordCounter(){         
        let text = props.item.text
        text.replace(/(\r\n|\n|\r)/g," ").trim();
        
        var cont = text.split(/\s+/g).length ;
                    
        for(let i = 1; i <= cont; i++){
            if(i === 1){
                $('.text1').append('____ ')
            }
            if(i === 2){
                $('.text2').append('____ ')
            }
            if(i === 3){
                $('.text3').append('____ ')
            }

        }

    }

    function setResponseError(evt){
        $('#next').removeClass('disableButton').addClass('next-error')
        $('#next').click(() => {
            props.rand()
        })
        toast.error(`❌ ERRADO!`, {
            autoClose: 1100
        })
        evt.target.className = 'disableButton'
        setError(!error)
    }

    function setResponse(evt){
        if(!error){
        if($('.text1').html() === "____ "){
            if(evt.target.value === props.item.t1){
                evt.target.className = 'disableButton'
                $('.text1').html(props.item.t1)

                if(!props.item.t2){
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(()=>{
                        props.rand()
                    })
                }
                return
            }else {
                setResponseError(evt)
                $('.text1').html(evt.target.value).removeClass('text1').addClass('error')
               return
                
            }
        }
        if($('.text2').html() === "____ "){
            if(evt.target.value === props.item.t2){
                evt.target.className = 'disableButton'
                $('.text2').html(props.item.t2)

                if(!props.item.t3){
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(()=>{
                        props.rand()
                    })
                }
                return
            }else {
                setResponseError(evt)
                $('.text2').html(evt.target.value).removeClass('text2').addClass('error')
               return
                
            }
        }
        if($('.text3').html() === "____ "){
            if(evt.target.value === props.item.t3){
                evt.target.className = 'disableButton'
                $('.text3').html(props.item.t3)

                if(!props.item.t4){
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    props.item.btn4 = ''
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(()=>{
                        props.rand()
                    })
                }
                return
            }else {
                setResponseError(evt)
                $('.text3').html(evt.target.value).removeClass('text3').addClass('error')
               return
                
            }
        }
        if($('.text4').html() === "____ "){
            if(evt.target.value === props.item.t4){
                evt.target.className = 'disableButton'
                $('.text4').html(props.item.t4)

                if(!props.item.t5){
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(()=>{
                        props.rand()
                    })
                }
                return
            }else {
                setResponseError(evt)
                $('.text4').html(evt.target.value).removeClass('text4').addClass('error')
               return
                
            }
        }
        if($('.text5').html() === "____ "){
            if(evt.target.value === props.item.t5){
                evt.target.className = 'disableButton'
                $('.text5').html(props.item.t5)

                if(!props.item.t6){
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(()=>{
                        props.rand()
                    })
                }
                return
            }else {
                setResponseError(evt)
                $('.text5').html(evt.target.value).removeClass('text5').addClass('error')
               return
                
            }
        }}
    }

    return (
        <div>
            <div className="question-container">
                <div className="question-content">
                    <div className="question-type">
                        Translate <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>
                    
                    <Image img={props.item.img}>
                        <div className="text" >{props.item.text}</div>
                    </Image>
    
                    <div className="translate-wrapper">
                        <div className="translate-title">
                            Traduza a frase acima:
                        </div>
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
                <div className="responses-options">
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