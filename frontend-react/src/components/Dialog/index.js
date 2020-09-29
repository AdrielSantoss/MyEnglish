import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import './dialog.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ShowButton} from './style'

export default function Dialog(props) {

    const [error, setError] = useState(false)

    useEffect(() => {
        setQuestion()
    }, [])

    function setQuestion() {
        $('.question-content').append(props.item.text1)
        $('.question-content').append(props.item.text2)
        $('.question-content').append(props.item.text3)
        $('.question-content').append(props.item.text4)
        $('.question-content').append(props.item.text5)
        $('.question-content').append(props.item.text6)
        $('.question-content').append(props.item.text7)
        $('.question-content').append(props.item.text8)
        $('.response').html('____')
        $('.response2').html('____')
        $('.response3').html('____')
        $('.response4').html('____')
        $('.response5').html('____')
        $('.response6').html('____')
        $('.response7').html('____')
        $('.response8').html('____')
        $('#next').removeClass('next')
        $('#next').addClass('disableButton')


    }

    function setDifficulty(){
        if(props.item.difficulty === 'easy'){
            props.correct()
        }else if(props.item.difficulty === 'medium'){
            props.correctMedium()
        }else if(props.item.difficulty === 'hard'){
            props.correctHard()
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

    function setResponse(evt) {
        if(!error){
        if ($('.response').html() === '____') {
            if (evt.target.value === props.item.r1) {
                $('.response').html(props.item.r1)
                evt.target.className = 'disableButton'
                return
            } else {
                $('.response').html(evt.target.value).removeClass('response').addClass('error')
                setResponseError(evt)
                props.incorrect()
                return
            }
        }
        if ($('.response2').html() === '____') {
            if (evt.target.value === props.item.r2) {
                $('.response2').html(props.item.r2)
                evt.target.className = 'disableButton'
                return
            } else {
                $('.response2').html(evt.target.value).removeClass('response2').addClass('error')
                setResponseError(evt)
                props.incorrect()
                return
            }
        }
        if ($('.response3').html() === '____') {
            if (evt.target.value === props.item.r3) {
                $('.response3').html(props.item.r3)
                evt.target.className = 'disableButton'
                return

            } else {
                $('.response3').html(evt.target.value).removeClass('response3').addClass('error')
                setResponseError(evt)
                props.incorrect()
                return
            }
        }
        if ($('.response4').html() === '____') {
            if (evt.target.value === props.item.r4) {
                $('.response4').html(props.item.r4)
                evt.target.className = 'disableButton'

                if (!props.item.r5) {
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(() => {
                        props.rand()
                    })
                    setDifficulty()
                }

                return
            } else {
                $('.response4').html(evt.target.value).removeClass('response4').addClass('error')
                setResponseError(evt)
                props.incorrect()
                return
            }
        }
        if ($('.response5').html() === '____') {
            if (evt.target.value === props.item.r5) {
                $('.response5').html(props.item.r5)
                evt.target.className = 'disableButton'

                if (!props.item.r6) {
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(() => {
                        props.rand()
                    })
                    setDifficulty()
                }

                return
            } else {
                $('.response5').html(evt.target.value).removeClass('response5').addClass('error')
                setResponseError(evt)
                props.incorrect()
                return
            }
        }
        if ($('.response6').html() === '____') {
            if (evt.target.value === props.item.r6) {
                $('.response6').html(props.item.r6)
                evt.target.className = 'disableButton'

                if (!props.item.r7) {
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(() => {
                        props.rand()
                    })
                    setDifficulty()
                }

                return
            } else {
                $('.response6').html(evt.target.value).removeClass('response6').addClass('error')
                setResponseError(evt)
                props.incorrect()
                return
            }
        }
        if ($('.response7').html() === '____') {
            if (evt.target.value === props.item.r7) {
                $('.response7').html(props.item.r7)
                evt.target.className = 'disableButton'

                if (!props.item.r8) {
                    toast.success(`✔️ CORRETO!`, {
                        autoClose: 1100
                    })
                    $('#next').removeClass('disableButton')
                    $('#next').addClass('next')
                    $('#next').click(() => {
                        props.rand()
                    })
                    setDifficulty()
                }
                return
            } else {
                $('.response7').html(evt.target.value).removeClass('response7').addClass('error')
                setResponseError(evt)
                props.incorrect()
                return
            }
        }

        if ($('.response8').html() === '____') {
            if (evt.target.value === props.item.r8) {
                $('.response8').html(props.item.r8)
                evt.target.className = 'disableButton'
                toast.success(`✔️ CORRETO!`, {
                    autoClose: 1500
                })
                $('#next').removeClass('disableButton')
                $('#next').addClass('next')
                $('#next').click(() => {
                    props.rand()
                })
                setDifficulty()
                return
            } else {
                $('.response8').html(evt.target.value).removeClass('response8').addClass('error')
                setResponseError(evt)
                props.incorrect()
                return
            }
        }}
    }

    return (
        <div>
            <div className="question-container">
                <div className="question-content">
                    <div className="question-type">
                        Dialog <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div className="responses-area">
                <div className="responses-options">
                    <input type="button" className="option" value={props.item.btn1} onClick={(evt) => { setResponse(evt) }} />
                    <input type="button" className="option" value={props.item.btn2} onClick={(evt) => { setResponse(evt) }} />
                    <input type="button" className="option" value={props.item.btn3} onClick={(evt) => { setResponse(evt) }} />
                    <input type="button" className="option" value={props.item.btn4} onClick={(evt) => { setResponse(evt) }} />
                    <ShowButton display={props.item.btn5}>
                        <input type="button" className="option" value={props.item.btn5} onClick={(evt) => { setResponse(evt) }} />
                    </ShowButton>
                    <ShowButton display={props.item.btn6}>
                        <input type="button" className="option" value={props.item.btn6} onClick={(evt) => { setResponse(evt) }} />
                    </ShowButton>
                    <ShowButton display={props.item.btn7}>
                        <input type="button" className="option" value={props.item.btn7} onClick={(evt) => { setResponse(evt) }} />
                    </ShowButton>
                    <ShowButton display={props.item.btn8}>
                        <input type="button" className="option" value={props.item.btn8} onClick={(evt) => { setResponse(evt) }} />
                    </ShowButton>
                    <div className="next" id="next">Continuar</div>
                </div>
            </div>
        </div>
    );
}