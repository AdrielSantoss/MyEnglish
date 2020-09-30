import React, { useState, useEffect } from 'react';
import './listenAndLearning.css'
import { knowledgeQuestions } from '../../data/knowledgeQuestions.js'
import Dialog from '../Dialog'
import Translate from '../Translate'
import ListenAnd_learning from '../ListenAnd_learning'
import ImagesListen_AndLearning from '../ImagesListen_andLearning'
import { TimesCircle } from '@styled-icons/fa-solid/TimesCircle'
import { ColorPalette } from '@styled-icons/ionicons-sharp/ColorPalette'
import { ReportProblem } from '@styled-icons/material/ReportProblem'
import { InfoCircle } from '@styled-icons/boxicons-solid/InfoCircle'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Introduction from '../Introduction'
import Final from '../Final'
import $ from 'jquery'
import More_info from '../More_info'
import { IntroWrapper, FinishWrapper, ShowProgressBar, ShowInfos } from './style.js'

let val = 0
let second = 0
let interval =''

export default function Knowledge_test() {

    const [selecteds, setSelecteds] = useState([])
    const [counterQuestions, setCounterQuestions] = useState(0)
    const [showIntro, setShowIntro] = useState('normal')
    const [showProgress, setShowProgress] = useState('none')
    const [showEnd, setShowEnd] = useState('none')
    const [showInfos, setShowInfos] = useState(false)
    const [progressValue, setProgressValue] = useState('')
    const [time, setTime] = useState(0)
    const [pts, setPts] = useState(0)
    const [correctCounter, setCorrectCounter] = useState(0)
    const [incorrectCounter, setIncorrectCounter] = useState(0)

    useEffect(() => {
        timer()
        rand()
        $('#more-info').draggable()
    }, [])

    function rand(min = 0, max = 20) {
        if (selecteds.length >= 19) {
            setShowEnd('flex')
            setShowProgress('none')
        }
        

        val = val + 10
        setProgressValue(val + "%")

        while (selecteds.length < 20) {
            const num = Math.random() * (max - min) + min
            let random = Math.floor(num)
            if (selecteds.indexOf(random) === -1) {
                selecteds.push(random)
                console.log(selecteds)
                return setCounterQuestions(random)
            }
        }

    }

    function correct(){
        setPts(pts+100)
        setCorrectCounter(correctCounter+1)   

    }
    function correctMedium(){
        setPts(pts+200)   
        setCorrectCounter(correctCounter+1)  

    }
    function correctHard(){
        setPts(pts+300) 
        setCorrectCounter(correctCounter+1)    

    }
    function incorrect(){
        setIncorrectCounter(incorrectCounter+1)
    }

   function timer(){
         interval =  setInterval(()=>{
            second += 0.1
            setTime(second)
        },100)
    }

    function hideIntro() {
         setShowIntro('none')
         setShowProgress('normal')
    }

    return (
        <div className="game-wrapper ">

            <div className="icons-main">
                <div className="icons">
                    <div className="times" ><TimesCircle size={25} color="black" /></div>
                    <div className="palette"><ColorPalette size={25} color="black" /></div>
                    <div className="info"><InfoCircle size={25} color="black" onClick={()=>{setShowInfos(!showInfos)}} /></div>
                    <div className="report"><ReportProblem size={25} color="black" /></div>

                </div>
            </div>

            <ToastContainer />

            <IntroWrapper display={showIntro}>
                <Introduction />
            </IntroWrapper>

            <ShowProgressBar display={showProgress}>
                <div className="progress-wrapper">
                    <div class="progress" style={{height: '10px'}}>
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: progressValue }}></div>
                    </div>
                </div>
            </ShowProgressBar>

            {knowledgeQuestions.map((i, indice) => {
                if (showIntro === 'none') {
                    if (indice === counterQuestions) {
                        while (selecteds.length < 20) {
                            if (i.type === 'dialog') {
                                return (
                                    <div>
                                        <Dialog item={i} rand={rand} correct={correct} correctMedium={correctMedium} correctHard={correctHard} incorrect={incorrect}/>
                                    </div>
                                )
                            } else if (i.type === 'translate') {
                                return (
                                    <div>
                                        <Translate item={i} rand={rand} correct={correct} correctMedium={correctMedium} correctHard={correctHard} incorrect={incorrect}/>
                                    </div>
                                )
                            } else if (i.type === 'listen-and-learning') {
                                return (
                                    <div>
                                        <ListenAnd_learning item={i} rand={rand} correct={correct} correctMedium={correctMedium} correctHard={correctHard} incorrect={incorrect}/>
                                    </div>
                                )
                            } else if (i.type === 'images-listen-and-learning') {
                                return (
                                    <div>
                                        <ImagesListen_AndLearning item={i} rand={rand} correct={correct} correctMedium={correctMedium} correctHard={correctHard} incorrect={incorrect}/>
                                    </div>
                                )
                            }

                        }
                    }
                }
            })}
            <ShowInfos id="more-info" display={showInfos}>
                <More_info/>
            </ShowInfos>
        
            <IntroWrapper display={showIntro}>
                <div className="responses-area">
                    <div className="responses-options">
                        <center><button type="button" class="btn btn-primary btn-block" onClick={hideIntro}>Começar a praticar</button></center>
                    </div>
                </div>
            </IntroWrapper>

            <FinishWrapper display={showEnd}>
                <Final time={time} interval={interval} pts={pts} correct={correctCounter} incorrect={incorrectCounter} knowledgeQuestions={knowledgeQuestions}/>
            </FinishWrapper>


        </div>
    );
}