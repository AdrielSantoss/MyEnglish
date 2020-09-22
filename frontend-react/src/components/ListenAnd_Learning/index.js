import React, {useState} from 'react';
import './listenAndLearning.css'

export default function ListenAnd_Learning() {

    const [btn1, setBtn1] = useState('')
    const [btn2, setBtn2] = useState('')
    const [btn3, setBtn3] = useState('')
    const [btn4, setBtn4] = useState('')

 return (
    <div className="game-wrapper ">

    <div className="menu-icons">
          <i className="fa fa-times-circle"></i>
        <i className="fa fa-pencil-square" aria-hidden="true"></i>
    </div>
    <div className="question-container">
        <div className="question-content">
            <div className="question-type">
                 Listen and learning <i className="fa fa-comments-o" aria-hidden="true"></i>
            </div>
            <div className="image">
            </div>
            <div className="audio">
                 <button >ouvir</button>
            </div> 
          

            <div className="text"></div>
            
        </div>
    </div>

    <div className="responses-area">
        <div className="responses-options">
            <div className="option" >{btn1}</div>
            <div className="option" >{btn2}</div>
            <div className="option" >{btn3}</div>
            <div className="option" >{btn4}</div>
            <div className="next">Continuar</div>
        </div>
    </div>
    
</div>
 );
}