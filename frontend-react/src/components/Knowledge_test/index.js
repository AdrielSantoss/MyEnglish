import React, {useState, useEffect} from 'react';
import './listenAndLearning.css'
import {knowledgeQuestions} from '../../data/knowledge.js'
import Dialog from '../Dialog'
import $ from 'jquery'



export default function ListenAnd_Learning() {

    const [btn1, setBtn1] = useState('')
    const [btn2, setBtn2] = useState('')
    const [btn3, setBtn3] = useState('')
    const [btn4, setBtn4] = useState('')
    const [selecteds, setSelecteds] = useState([])
    const [counterQuestions, setCounterQuestions] = useState(0)
    const [text, setText] = useState('')
    const [counterWords, setCounterWords] = useState(0)
    useEffect(()=>{
        rand()
        setQuestion()
        contarpalavra()
    },[])

    function rand(min=0, max=3){

        while (selecteds.length < 3) {
            const num = Math.random() * (max - min) + min
            let random = Math.floor(num)
            
                
            if (selecteds.indexOf(random) === -1){
                selecteds.push(random)
                console.log(selecteds)
                return setCounterQuestions(random)
            } 
        }
              
    }

    function setQuestion(){
        knowledgeQuestions.map((i,indice)=>{
            if(i.type === 'translate'){
                setText(i.text)

            }
        })
        
    }

    function contarpalavra(){         
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

    

 return (
    <div className="game-wrapper ">

    <div className="menu-icons">
          <i className="fa fa-times-circle"></i>
        <i className="fa fa-pencil-square" aria-hidden="true"></i>
    </div>

    {knowledgeQuestions.map((i,indice)=>{
        if(indice === counterQuestions){
            while(selecteds.length < 3){
                if(i.type === 'dialog'){
                    return (
                        <div>

                            <Dialog item={i}/>

                        </div>
                    )
                }else if(i.type === 'translate'){
                    return (
                        <div>
                        <div className="question-container">
                            <div className="question-content">
                                <div className="question-type">
                                    Translate <i className="fa fa-comments-o" aria-hidden="true"></i>
                                </div>
                                <div className="image">
                                <div className="text" >{text}</div>
                                </div>

                                
                                <div className="translate-wrapper">
                                    <div className="translate-title">
                                        Traduza a palavra acima:
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
                                    <div className="option" >{i.btn1}</div>
                                    <div className="option" >{i.btn2}</div>
                                    <div className="option" >{i.btn3}</div>
                                    <div className="option" >{i.btn4}</div>
                                    <div className="next">Continuar</div>
                                </div>
                            </div>
                        </div>
                    )
                }else if(i.type === 'listen-and-learning'){
                    return (
                        <div>
                        <div className="question-container">
                                <div className="question-content">
                                    <div className="question-type">
                                        Listen and Learning <i className="fa fa-comments-o" aria-hidden="true"></i>
                                    </div>
                    
                                </div>
                            </div>
                            <div className="responses-area">
                                <div className="responses-options">
                                    <div className="option" >{i.btn1}</div>
                                    <div className="option" >{i.btn2}</div>
                                    <div className="option" >{i.btn3}</div>
                                    <div className="option" >{i.btn4}</div>
                                    <div className="next">Continuar</div>
                                </div>
                            </div>
                        </div>
                    )
                }

            }
        }
    })}



    
</div>
 );
}