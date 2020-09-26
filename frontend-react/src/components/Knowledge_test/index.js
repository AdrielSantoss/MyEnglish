import React, { useState, useEffect } from 'react';
import './listenAndLearning.css'
import { knowledgeQuestions } from '../../data/knowledge.js'
import Dialog from '../Dialog'
import Translate from '../Translate'
import ListenAnd_learning from '../ListenAnd_learning'
import ImagesListen_AndLearning from '../ImagesListen_andLearning'
import { TimesCircle } from '@styled-icons/fa-solid/TimesCircle'
import { ColorPalette } from '@styled-icons/ionicons-sharp/ColorPalette'
import { ReportProblem } from '@styled-icons/material/ReportProblem'
import { InfoCircle } from '@styled-icons/boxicons-solid/InfoCircle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Introduction from '../Introduction'
import Final from '../Final'
import { IntroWrapper, FinishWrapper } from './style.js'

let val = 0
export default function Knowledge_test() {

    const [selecteds, setSelecteds] = useState([])
    const [counterQuestions, setCounterQuestions] = useState(0)
    const [showIntro, setShowIntro] = useState('normal')
    const [showEnd, setShowEnd] = useState('none')
    const [progressValue, setProgressValue] = useState('')

    useEffect(() => {
        rand()
    }, [])

    function rand(min = 0, max = 6) {
        if (selecteds.length >= 5) {
            setShowEnd('flex')
        }

        val = val + 17
        setProgressValue(val + "%")
        console.log(progressValue)

        while (selecteds.length < 6) {
            const num = Math.random() * (max - min) + min
            let random = Math.floor(num)
            if (selecteds.indexOf(random) === -1) {
                selecteds.push(random)
                console.log(selecteds)
                return setCounterQuestions(random)
            }
        }

    }


    function hideIntro() {
        return setShowIntro('none')
    }

    return (
        <div className="game-wrapper ">

            <div className="icons-main">
                <div className="icons">
                    <div className="times"><TimesCircle size={25} color="black" /></div>
                    <div className="palette"><ColorPalette size={25} color="black" /></div>
                    <div className="info"><InfoCircle size={25} color="black" /></div>
                    <div className="report"><ReportProblem size={25} color="black" /></div>

                </div>
            </div>


            <ToastContainer />

            <IntroWrapper display={showIntro}>
                <Introduction />
            </IntroWrapper>
     
                <div className="progress-wrapper">
                <div class="progress" style={{height: '10px'}}>
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: progressValue }}></div>
                </div>
                </div>

            {knowledgeQuestions.map((i, indice) => {
                if (showIntro === 'none') {
                    if (indice === counterQuestions) {
                        while (selecteds.length < 6) {
                            if (i.type === 'dialog') {
                                return (
                                    <div>
                                        <Dialog item={i} rand={rand} />
                                    </div>
                                )
                            } else if (i.type === 'translate') {
                                return (
                                    <div>
                                        <Translate item={i} rand={rand} />
                                    </div>
                                )
                            } else if (i.type === 'listen-and-learning') {
                                return (
                                    <div>
                                        <ListenAnd_learning item={i} rand={rand} />
                                    </div>
                                )
                            } else if (i.type === 'images-listen-and-learning') {
                                return (
                                    <div>
                                        <ImagesListen_AndLearning item={i} rand={rand} />
                                    </div>
                                )
                            }

                        }
                    }
                }
            })}

            <IntroWrapper display={showIntro}>
                <div className="responses-area">
                    <div className="responses-options">
                        <center><button type="button" class="btn btn-primary btn-block" onClick={hideIntro}>Começar a praticar</button></center>
                    </div>
                </div>
            </IntroWrapper>

            <FinishWrapper display={showEnd}>
                <Final />
            </FinishWrapper>


        </div>
    );
}