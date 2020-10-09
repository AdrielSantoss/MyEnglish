import React, { useState, useEffect, useContext } from 'react';
import './listenAndLearning.css'
import { knowledgeQuestions } from '../../data/knowledgeQuestions.js'
import { easyQuestions } from '../../data/easy/easyQuestions.js'
import { mediumQuestions } from '../../data/medium/mediumQuestions.js'
import { hardQuestions } from '../../data/hard/hardQuestions.js'
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
import {ResponseArea} from '../../assets/styleds/global'
import ThemeContext from '../../config/theme'
import UsersService from '../../config/services';
import {toast} from 'react-toastify'


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

    useEffect(() => {
        timer()
        rand()
        $('#more-info').draggable()

        const difficulty = localStorage.getItem('Difficulty_MyEnglish')
        const type = localStorage.getItem('Type_MyEnglish')

        if(difficulty === 'easy'){
            setQuestionsSelecteds(easyQuestions)
        }else if(difficulty === 'medium'){
            setQuestionsSelecteds(mediumQuestions)

        }else if(difficulty === 'hard'){
            setQuestionsSelecteds(hardQuestions)

        }else if(difficulty === 'random'){
            setQuestionsSelecteds(knowledgeQuestions)
      
        }

        if (type === "dialogue") {
            setTitle('Diálogos')
            setText('Diálogos')
        }else if(type === 'translate'){
            setTitle('Tradução')
            setText('Traduzir frases e ou palavras')
        }else if(type === 'listen and learning'){
            setTitle('Ouvir e traduzir')
            setText('Ouvir audios e traduzir')
        }else if(type === 'images and learning'){
            setTitle('Tradução através de imagens')
            setText('selecionar a imagem correta conforme a palavra solicitada')
        }else if(type === 'speak'){
            setTitle('Fala e pronúncia')
            setText('pronunciar palavras e frases em ingles')
        }else if( type === 'random'){
            setTitle('Todos os tipos')
            setText('Todos os tipos de questões selecionadas em ordem aleatória')
        }

    }, [])

    function rand(min = 0, max = 6) {
        setQuestionNum(questionNum+1)
        if (selecteds.length >= 5) {
            setShowEnd('flex')
            setShowProgress('none')
            
        }

        val = val + 3.35
        setProgressValue(val + "%")

        while (selecteds.length < 6){
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
       <div>
            <div className="icons-main">
                <Icons>
                    <div className="times" ><TimesCircle size={28} color={`${({theme})=>theme.icons};`} /></div>
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
                        
                        while (selecteds.length < 6) {
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
                            }else if (i.type === "speaks"){
                                return (
                                    <div>
                                          <Speaks  />
                                    </div>
                                )
                            }

                        }
                    }
                    
                }
            })}
        
            <IntroWrapper display={showIntro}>
                <ResponseArea>
                    <div className="responses-options">
                        <center><button type="button" class="btn btn-primary btn-block" onClick={hideIntro}>Começar a praticar</button></center>
                    </div>
                </ResponseArea>
            </IntroWrapper>

            <FinishWrapper display={showEnd}>
                <Final time={time} interval={interval} pts={pts} correct={correctCounter} incorrect={incorrectCounter} knowledgeQuestions={knowledgeQuestions}/>
            </FinishWrapper>


            </div>

    );
}