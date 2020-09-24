import React, { useEffect } from 'react';
import $ from 'jquery'
import './dialog.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dialog(props) {

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

    function setResponse(evt) {
        if ($('.response').html() === '____') {
            if (evt.target.value === props.item.r1) {
                $('.response').html(props.item.r1)
                evt.target.className = 'disableButton'

                return
            } else {
                alert('erro')
                return
            }
        }
        if ($('.response2').html() === '____') {
            if (evt.target.value === props.item.r2) {
                $('.response2').html(props.item.r2)
                evt.target.className = 'disableButton'
                return
            } else {
                alert('erro')
                return
            }
        }
        if ($('.response3').html() === '____') {
            if (evt.target.value === props.item.r3) {
                $('.response3').html(props.item.r3)
                evt.target.className = 'disableButton'
                return

            } else {
                alert('erro')
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
                }

                return
            } else {
                alert('erro')
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
                }

                return
            } else {
                alert('erro')
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
                }

                return
            } else {
                alert('erro')
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
                }
                return
            } else {
                alert('erro')
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
                return
            } else {
                alert('erro')
                return
            }
        }
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

                    <div className="next" id="next">Continuar</div>
                </div>
            </div>
        </div>
    );
}