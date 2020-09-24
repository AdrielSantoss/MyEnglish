import React, {useState, useEffect} from 'react';
import './listenAndLearning.css'
import {knowledgeQuestions} from '../../data/knowledge.js'
import Dialog from '../Dialog'
import Translate from '../Translate'
import ListenAnd_learning from '../ListenAnd_learning'
import {TimesCircle} from '@styled-icons/fa-solid/TimesCircle'
import {ColorPalette} from '@styled-icons/ionicons-sharp/ColorPalette'
import {ReportProblem} from '@styled-icons/material/ReportProblem'
import {InfoCircle} from '@styled-icons/boxicons-solid/InfoCircle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ListenAnd_Learning() {

    const [selecteds, setSelecteds] = useState([])
    const [counterQuestions, setCounterQuestions] = useState(0)

    useEffect(()=>{
        rand()
    },[])

    function rand(min=0, max=6){

        while (selecteds.length < 6) {
            const num = Math.random() * (max - min) + min
            let random = Math.floor(num)
            
                
            if (selecteds.indexOf(random) === -1){
                selecteds.push(random)
                console.log(selecteds)
                return setCounterQuestions(random)
            } 
        }
              
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
    <ToastContainer/>

    {knowledgeQuestions.map((i,indice)=>{

        if(indice === counterQuestions){
            while(selecteds.length < 6){
                if(i.type === 'dialog'){
                    return (
                        <div>
                            <Dialog item={i} rand={rand}/>
                        </div>
                    )
                }else if(i.type === 'translate'){
                    return (
                        <div>
                            <Translate item={i} rand={rand}/>
                        </div>
                    )
                }else if(i.type === 'listen-and-learning'){
                    return (
                        <div>
                            <ListenAnd_learning item={i} rand={rand}/>
                        </div>
                    )
                }

            }
        }
    })}
</div>
 );
}