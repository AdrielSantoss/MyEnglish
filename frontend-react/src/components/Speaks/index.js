import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import '../../assets/css/global.css'
import { Image, ShowButton, Button, ButtonsArea, ButtonsWrapper } from '../../assets/styleds/global.js'
import { toast } from 'react-toastify'
import SpeechRecognition from 'react-speech-recognition'

let mic = ''

function Dictaphone(props) {

  useEffect(() => {
    setQuestion()

  }, [])

  const [note, setNote] = useState('Clique para falar')
  const [text, setText] = useState(false)
  const [error, setError] = useState(false)

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return props.rand()
  }else {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
     mic = new SpeechRecognition()
    
    mic.lang = 'en-US'
  }

  function setDifficulty() {
    if (props.item.difficulty === 'easy') {
      props.correct()
    } else if (props.item.difficulty === 'medium') {
      props.correctMedium()
    } else if (props.item.difficulty === 'hard') {
      props.correctHard()
    }
  }

  function setResponseError() {
    $('#next').removeClass('disableButton').addClass('next-error')
    $('#next').click(() => {
      props.rand()
    })
    toast.error(`❌ ERRADO!`, {
      autoClose: 1100
    })
    setError(!error)
  }

  function recognition() {
    if (!error) {
      mic.start()
      setNote('Estou te ouvindo')

      mic.onresult = (evt) => {
        setNote('Clique para falar')
        setText('')
        setText(evt.results[0][0].transcript)
  
        if (evt.results[0][0].transcript === props.item.text) {
          toast.success(`✔️ CORRETO!`, {
            autoClose: 1100
          })
          $('#next').removeClass('disableButton')
          $('#next').addClass('next')
          $('#next').click(() => {
            props.rand()
          })
          setDifficulty()
          setError(!error)
        } else {
          setResponseError()
          $('.text1').removeClass('text1').addClass('error')
          props.incorrect()
        }

        return
      }

      mic.onerror = (evt) => {
        setText('Você disse algo? Repita, por favor.')
        setNote('Clique para falar')
        return

      }

      mic.onaudioend = ()=> {
        setNote('Clique para falar')
      }
    }
  }

  function setAudio(){

    if(props.item.type === 'speaks-audio'){
      $('#text').removeClass('text')
      return (
        <audio controls>
          <source src="horse.ogg" type="audio/ogg"/>
          <source src={props.item.audio} type="audio/mpeg"/>
          Your browser does not support the audio element.
      </audio> 
        )
    }
  }

  function setQuestion() {
    $('#next').removeClass('next')
    $('#next').addClass('disableButton')
  }
  return (
    <div>
      <div className="question-container">
        <div className="question-content">
          <div className="question-type">
            Speak <i className="fa fa-comments-o" aria-hidden="true"></i>
          </div>

          <Image img={props.item.img}>
            <div className="text" id="text">{props.item.text}</div>
          </Image>
          {setAudio()}

          <div className="translate-wrapper">
            <div className="translate-title">
              Pronuncie a frase acima:
                </div>
            <div className="translate">
              <div className="text1">{text}</div>
            </div>
          </div>
        </div>

      </div>

      <ButtonsArea>
        <ButtonsWrapper>
          <ShowButton display={true} className="buttonWrapper">
            <Button className="option" value={`${note} 🎙`} onClick={() => { recognition() }} />
          </ShowButton>
          <div className="next" id="next">Continuar</div>
        </ButtonsWrapper>
      </ButtonsArea>
    </div>
  )
}
/**    <>
    <center>
      <h1>Voice Notes</h1>
      <div className="container">
        <button onClick={()=>{recognition()}}>ouvir</button>
        <button onClick={()=>{mic.stop()}}>parar</button>
        <p>{note}</p>
      </div>
      </center>
    </> */
export default Dictaphone