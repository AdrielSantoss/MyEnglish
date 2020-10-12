import React, { useState, useEffect } from 'react'
import $ from 'jquery'


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.lang = 'en-US'

function Dictaphone() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(false)
  const [savedNotes, setSavedNotes] = useState([])

  function recognition(){
      mic.start()
      mic.onresult = (evt)=>{
          setNote(evt.results[0][0].transcript)

        }
      mic.onerror = (evt) => {
        setNote('repita o que voce falou por favor')
      } 
      mic.onaudioend = (evt)=> {
        if(!note){
          setNote('repita o que voce falou por favor')
        }
      }
   

  }


  return (
    <>
    <center>
      <h1>Voice Notes</h1>
      <div className="container">
        <button onClick={()=>{recognition()}}>ouvir</button>
        <button onClick={()=>{mic.stop()}}>parar</button>
        <p>{note}</p>
      </div>
      </center>
    </>
  )
}
export default Dictaphone