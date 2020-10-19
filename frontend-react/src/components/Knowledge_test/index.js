import React, { useState, useEffect, useContext } from 'react';
import './listenAndLearning.css'
import { knowledgeQuestions } from '../../data/knowledgeQuestions.js'
import { easyQuestions } from '../../data/easy/easyQuestions.js'
import { easyQuestionsDialogue } from '../../data/easy/easyQuestionsDialogue.js'
import { easyQuestionsTranslate } from '../../data/easy/easyQuestionsTranslate.js'
import { easyQuestionsIAL } from '../../data/easy/easyQuestionsIAL.js'
import { easyQuestionsLAL } from '../../data/easy/easyQuestionsLAL.js'
import { easyQuestionsSpeak } from '../../data/easy/easyQuestionsSpeak.js'
import { mediumQuestions } from '../../data/medium/mediumQuestions.js'
import { mediumQuestionsDialogue } from '../../data/medium/mediumQuestionsDialogue.js'
import { mediumQuestionsIAL } from '../../data/medium/mediumQuestionsIAL.js'
import { mediumQuestionsLAL } from '../../data/medium/mediumQuestionsLAL.js'
import { mediumQuestionsSpeak } from '../../data/medium/mediumQuestionsSpeak.js'
import { mediumQuestionsTranslate } from '../../data/medium/mediumQuestionsTranslate.js'
import { hardQuestions } from '../../data/hard/hardQuestions.js'
import { hardQuestionsDialogue } from '../../data/hard/hardQuestionsDialogue.js'
import { hardQuestionsIAL } from '../../data/hard/hardQuestionsIAL.js'
import { hardQuestionsLAL } from '../../data/hard/hardQuestionsLAL.js'
import { hardQuestionsSpeak } from '../../data/hard/hardQuestionsSpeak.js'
import { hardQuestionsTranslate } from '../../data/hard/hardQuestionsTranslate.js'
import { randomQuestions } from '../../data/random/randomQuestions.js'
import Dialog from '../Dialog'
import Translate from '../Translate'
import ListenAnd_learning from '../ListenAnd_learning'
import ImagesListen_AndLearning from '../ImagesListen_andLearning'
import Speaks from '../Speaks'
import { TimesCircle } from '@styled-icons/fa-solid/TimesCircle'
import { ColorPalette } from '@styled-icons/ionicons-sharp/ColorPalette'
import { ReportProblem } from '@styled-icons/material/ReportProblem'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Introduction from '../Introduction'
import Final from '../Final'
import $ from 'jquery'
import { IntroWrapper, FinishWrapper, ShowProgressBar, ShowInfos, Icons } from './style.js'
import {ResponseArea, ShowButton, Button} from '../../assets/styleds/global'
import ThemeContext from '../../config/theme'
import UsersService from '../../config/services';
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'


let val = 0
let second = 0
let interval =''

export default function Knowledge_test() {

    const [selecteds, setSelecteds] = useState([])
    const [counterQuestions, setCounterQuestions] = useState(0)
    const [showIntro, setShowIntro] = useState('normal')
    const [showProgress, setShowProgress] = useState('none')
    const [showEnd, setShowEnd] = useState('none')
    const [progressValue, setProgressValue] = useState('')
    const [time, setTime] = useState(0)
    const [pts, setPts] = useState(0)
    const [correctCounter, setCorrectCounter] = useState(0)
    const [incorrectCounter, setIncorrectCounter] = useState(0)
    const {switchTheme} = useContext(ThemeContext)
    const [questionNum, setQuestionNum] = useState(0)
    const [questionsSelecteds, setQuestionsSelecteds] = useState([])
    const [newRecordView, setNewRecordView] = useState(true)
    const navigation = useNavigate()

    useEffect(() => {
       
        rand()
        $('#more-info').draggable()

        const difficulty = localStorage.getItem('Difficulty_MyEnglish')
        const type = localStorage.getItem('Type_MyEnglish')

        if(difficulty === 'easy'){
            if (type === "dialogue") {
                setQuestionsSelecteds(easyQuestionsDialogue)
            }else if(type === 'translate'){
                setQuestionsSelecteds(easyQuestionsTranslate)
            }else if(type === 'listen and learning'){
                setQuestionsSelecteds(easyQuestionsLAL)
            }else if(type === 'images and learning'){
                setQuestionsSelecteds(easyQuestionsIAL)
            }else if(type === 'speak'){
                setQuestionsSelecteds(easyQuestionsSpeak)
            }else if( type === 'random'){
                setQuestionsSelecteds(easyQuestions)
            }
        }else if(difficulty === 'medium'){
            if (type === "dialogue") {
                setQuestionsSelecteds(mediumQuestionsDialogue)
            }else if(type === 'translate'){
                setQuestionsSelecteds(mediumQuestionsTranslate)
            }else if(type === 'listen and learning'){
                setQuestionsSelecteds(mediumQuestionsLAL)
            }else if(type === 'images and learning'){
                setQuestionsSelecteds(mediumQuestionsIAL)
            }else if(type === 'speak'){
                setQuestionsSelecteds(mediumQuestionsSpeak)
            }else if( type === 'random'){
                setQuestionsSelecteds(mediumQuestions)
            }

        }else if(difficulty === 'hard'){
            if (type === "dialogue") {
                setQuestionsSelecteds(hardQuestionsDialogue)
            }else if(type === 'translate'){
                setQuestionsSelecteds(hardQuestionsTranslate)
            }else if(type === 'listen and learning'){
                setQuestionsSelecteds(hardQuestionsLAL)
            }else if(type === 'images and learning'){
                setQuestionsSelecteds(hardQuestionsIAL)
            }else if(type === 'speak'){
                setQuestionsSelecteds(hardQuestionsSpeak)
            }else if( type === 'random'){
                setQuestionsSelecteds(hardQuestions)
            }
        }else if(difficulty === 'random'){
            setQuestionsSelecteds(randomQuestions)
        }
    }, [])

    function rand(min = 0, max = 10) {
        setQuestionNum(questionNum+1)
        if (selecteds.length >= 9) {
            setShowEnd('flex')
            setShowProgress('none')
            
        }

        val = val + 3.35
        setProgressValue(val + "%")

        while (selecteds.length < 10){
            const num = Math.random() * (max - min) + min
            let random = Math.floor(num)
            if (selecteds.indexOf(random) === -1) {
                selecteds.push(random)
                return  setCounterQuestions(random)
            }
        }

    }

    function setRecord(){
        const user = JSON.parse(localStorage.getItem('user_MyEnglish'))
        const difficulty = localStorage.getItem('Difficulty_MyEnglish')

        if(difficulty === 'easy'){
            if(pts > user.records.easy){
                if(newRecordView){
                    toast.info('🦄 Novo Recorde', {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    })
                    setNewRecordView(!newRecordView)
                }
                UsersService.updateRecords({id: user._id, records: {easy: pts, medium: user.records.medium, hard: user.records.hard, random: user.records.random}})
            }
        }else if(difficulty === 'medium'){
            if(pts > user.records.medium){
                if(newRecordView){
                    toast.info('🆕 Novo Recorde!', {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    })
                    setNewRecordView(!newRecordView)
                }
                UsersService.updateRecords({id: user._id, records: {easy: user.records.easy, medium: pts , hard: user.records.hard, random: user.records.random}})
            }

        }else if(difficulty === 'hard'){
            if(pts > user.records.hard){
                if(newRecordView){
                toast.info('🆕 Novo Recorde!', {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                })
                setNewRecordView(!newRecordView)
            }
                UsersService.updateRecords({id: user._id, records: {easy: user.records.easy, medium: user.records.medium , hard: pts, random: user.records.random}})
            }
        }else if(difficulty === 'random'){
            if(pts > user.records.random){
                if(newRecordView){
                    toast.info('☑️ Novo Recorde!', {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    })
                    setNewRecordView(!newRecordView)
                }
                UsersService.updateRecords({id: user._id, records: {easy: user.records.easy, medium: user.records.medium , hard: user.records.random, random: pts }})
            }
        }
    }

    function correct(){
        setPts(pts+100)
        setCorrectCounter(correctCounter+1) 
        setRecord() 

    }

    function correctMedium(){
        setPts(pts+200)   
        setCorrectCounter(correctCounter+1)  
        setRecord()

    }
    function correctHard(){
        setPts(pts+300) 
        setCorrectCounter(correctCounter+1)    
        setRecord()

    }
    function incorrect(){
        setIncorrectCounter(incorrectCounter+1)
    }


    function hideIntro() {
         setShowIntro('none')
         setShowProgress('normal')
    }

    function confirm(){
        if(showIntro === 'none'){
            let response = window.confirm('Deseja mesmo sair? Todo seu progresso será perdido')
            if(response){
                navigation('/')
            }else {
                return
            }
        }else {
            navigation('/')
        }
    }
  

    return (
       <div>
            <div className="icons-main">
                <Icons>
                    <div className="times" ><TimesCircle size={28} color={`${({theme})=>theme.icons};`} onClick={()=>confirm()}/></div>
                    <div className="palette"><ColorPalette size={28} color={`${({theme})=>theme.icons};`} onClick={switchTheme}/></div>
                    <div className="report"><ReportProblem size={28} color={`${({theme})=>theme.icons};`} /></div>
                </Icons>
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

            {questionsSelecteds.map((i, indice) => {
                if (showIntro === 'none') {
                    if (indice === counterQuestions) {
                        
                        while (selecteds.length < 10) {
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
                            }else if (i.type === "speaks" || i.type === "audio"){
                            
                                    return (
                                        <div>
                                            <Speaks item={i} rand={rand} correct={correct} correctMedium={correctMedium} correctHard={correctHard} incorrect={incorrect} />
                                        </div>
                                    )
                            
                            }

                        }
                    }
                    
                }
            })}

            <div className= "score-wrapper">
                <span className="score">{pts} pts</span>  
            </div>
        
            <IntroWrapper display={showIntro}>
                <ResponseArea>
                    <div className="responses-options">
                        <center><button type="button" class="btn btn-primary btn-block" onClick={hideIntro}>Começar a praticar</button></center>
                    </div>
                </ResponseArea>
            </IntroWrapper>

            <FinishWrapper display={showEnd}>
                <Final interval={interval} pts={pts} correct={correctCounter} incorrect={incorrectCounter} knowledgeQuestions={knowledgeQuestions}/>
            </FinishWrapper>

            </div>

    );
}