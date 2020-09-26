import React, { useEffect, useState } from 'react';
import './images-listen-and-learning.css'
import { Slot1, Slot2, Slot3, Slot4 } from './style.js'
import $ from 'jquery'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ImagesListen_andLearning(props) {

    const [audio, setAudio] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setAudio(document.querySelector('audio'))
        $('#next').removeClass('next-img')
        $('#next').addClass('disableButton')

    }, [])

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

    function setResponse(evt) {
        if(!error){
        if (evt.target.id === props.item.r) {
            toast.success(`✔️ CORRETO!`, {
                autoClose: 1100
            })
            $('#next').removeClass('disableButton')
            $('#next').addClass('next-img')
            audio.play()
            $('#next').click(() => {
                props.rand()
            })
            return
        } else {
            setResponseError(evt)
            return
        }}
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
                                <hr />

                                <div className="images">
                                    <Slot1 img1={props.item.img1} onClick={(evt) => { setResponse(evt) }}><div className="level-title" id="img1"></div></Slot1>
                                    <Slot2 img2={props.item.img2} onClick={(evt) => { setResponse(evt) }}><div className="level-title" id="img2"></div></Slot2>
                                    <Slot3 img3={props.item.img3} onClick={(evt) => { setResponse(evt) }}><div className="level-title" id="img3"></div></Slot3>
                                    <Slot4 img4={props.item.img4} onClick={(evt) => { setResponse(evt) }}><div className="level-title" id="img4"></div></Slot4>
                                </div>

                            </div>
                        </div>
                        <audio className="audio">
                            <source id="demo" src={props.item.audio} type="audio/mpeg" />
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
                <div className="text-img">{props.item.word}</div>
                <div className="next-img" id="next">Continuar</div>
            </div>
        </div>
    );
}