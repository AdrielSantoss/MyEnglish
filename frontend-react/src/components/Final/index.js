import React from 'react';
import {Times} from '@styled-icons/fa-solid/Times'
import {useNavigate} from 'react-router-dom'
import './final.css'


export default function Final() {

    const navigation = useNavigate()

 return (
   <div className="final-template">
       <div className="final-wrapper">
       <div className="left-times">
                <Times size={30} onClick={()=>{navigation('/start')}}/>
        </div>
        <div className="bye">
        <span className="icon icon--circle">
              <svg width="30" height="30" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#uk-flag)"><path d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z" fill="#fff"></path><path d="M5.788 10.953a27.898 27.898 0 00-4.823 9.743H15.53l-9.743-9.743zM55.035 20.696a27.901 27.901 0 00-4.823-9.743l-9.743 9.743h14.566zM.965 35.304a27.9 27.9 0 004.823 9.743l9.743-9.742H.965zM45.047 5.788A27.9 27.9 0 0035.304.965V15.53l9.743-9.743zM10.953 50.212a27.9 27.9 0 009.743 4.823V40.47l-9.743 9.743zM20.696.965a27.9 27.9 0 00-9.743 4.823l9.743 9.743V.965zM35.304 55.035a27.9 27.9 0 009.743-4.823l-9.743-9.743v14.566zM40.47 35.304l9.742 9.743a27.9 27.9 0 004.823-9.742H40.47z" fill="#154CCF"></path><path d="M55.763 24.348h-24.11V.237a28.28 28.28 0 00-7.305 0v24.11H.237a28.28 28.28 0 000 7.305h24.11v24.111a28.285 28.285 0 007.305 0v-24.11h24.111a28.285 28.285 0 000-7.305z" fill="#E74A3F"></path><path d="M35.304 35.304L47.8 47.8a28.082 28.082 0 001.646-1.797L38.748 35.303h-3.444zM20.696 35.304L8.2 47.8a28.077 28.077 0 001.798 1.646l10.697-10.697v-3.444zM20.696 20.696L8.2 8.2a28.07 28.07 0 00-1.646 1.798l10.697 10.697h3.444zM35.304 20.696L47.8 8.2a28.068 28.068 0 00-1.797-1.646L35.304 17.253v3.443z" fill="#E74A3F"></path><path d="M55.5 28c0 15.188-12.312 27.5-27.5 27.5S.5 43.188.5 28 12.812.5 28 .5 55.5 12.812 55.5 28z" stroke="#000" stroke-opacity=".1" fill="none"></path></g><defs><clipPath id="uk-flag"><path fill="#fff" d="M0 0h56v56H0z"></path></clipPath></defs></svg>
          </span>
          <h1 className="bye-title">knowledge test</h1>
        </div>
        <center>Teste realizado com sucesso!</center>
        <hr/>
        <div className="description">
            <center>Você realizou seu teste de conhecimento para saber seu nível de sabedoria na língua inglesa, e qual o nível de dificuldade recomendado pelo sistema para você. </center>
        </div>
        <center>
        <div className="icons-description">
            <div className="icon-content">
                <div className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i><strong>Tempo:</strong></div>  3 minutos
            </div>
            <div className="icon-content">
                <div className="icon"><i className="fa fa-bar-chart" aria-hidden="true"></i> <strong>Dificuldade:</strong></div>  Variado - Aleatório
            </div>
            <div className="icon-content">
                <div className="icon"><i className="fa fa-star-half-o" aria-hidden="true"></i> <strong>Recorde:</strong></div> 200 pts
            </div>
        </div>
        <div className="icons-description">
            <div className="icon-content">
                <div className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i><strong>Tempo realizado:</strong></div>  10 minutos
            </div>
            <div className="icon-content">
                <div className="icon"><i className="fa fa-bar-chart" aria-hidden="true"></i> <strong>Score:</strong></div>  100 pts
            </div>
            <div className="icon-content">
                <div className="icon"><i className="fa fa-star-half-o" aria-hidden="true"></i> <strong>Acertou:</strong></div> 15 de 30
            </div>
            <div className="icon-content">
                <div className="icon"><i className="fa fa-star-half-o" aria-hidden="true"></i> <strong>Errou:</strong></div> 15 de 30
            </div>
        </div>
        </center>
        <div>
          <div className="recomended"> Nível Recomendado: <div className="level">Intermediário</div></div> 
        </div>

       </div>
   </div>
 );
}