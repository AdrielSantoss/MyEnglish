import React from 'react';
import './more-info.css'
import $ from 'jquery'

export default function More_info(props) {

    function translateDifficulty(){
        if(props.difficulty === 'easy'){
            return 'Fácil'
        }else if(props.difficulty === 'medium'){
            return 'Médio'
        }else if(props.difficulty === 'hard') {
            return 'Difícil'
        }
    }

  function translateType(){
      if(props.type === 'dialog'){
          return 'Diálogo'
      }else if(props.type === 'translate'){
          return 'Tradução'
      }else if(props.type === 'listen-and-learning'){
          return 'Ouvir e aprender'
      }else if(props.type === 'images-listen-and-learning'){
          return 'ver, escutar e aprender'
      }
  }


    return (
        <div className="info-wrapper">

            <div className="history">
                <span className="correct">Questão 12 - acertou</span>
                <span className="incorrect">Questão 13 - errou</span>
                <span className="correct">Questão 14 - acertou</span>
                <span className="incorrect">Questão 15 - errou</span>
                <span className="correct">Questão 14 - acertou</span>
                <span className="incorrect">Questão 15 - errou</span>
            </div>

            <div className="icons-description">
                <div className="icon-content">
                    <div className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i><strong>Tempo:</strong></div>  <span className="ml-2">{props.time.toFixed(2)}s</span>
                </div>
                <div className="icon-content">
                    <div className="icon"><i className="fa fa-bar-chart" aria-hidden="true"></i> <strong>Questão:</strong></div>  <span className="ml-3">{props.question}</span>
                </div>
                <div className="icon-content">
                    <div className="icon"><i className="fa fa-star-half-o" aria-hidden="true"></i> <strong>Dificuldade:</strong></div> <span className="ml-3">{translateDifficulty()}</span>
                </div>
            </div>
            <div className="icons-description">
                <div className="icon-content">
                    <div className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i><strong>Tipo:</strong></div>  <span className="ml-1">{translateType()}</span>
                </div>
                <div className="icon-content">
                    <div className="icon"><i className="fa fa-bar-chart" aria-hidden="true"></i> <strong>Recorde:</strong></div>  1200pts
                        </div>
                <div className="icon-content">
                    <div className="icon"><i className="fa fa-star-half-o" aria-hidden="true"></i> <strong>Pontos:</strong></div><span className="ml-2">{props.pts}</span>
                </div>
            </div>

        </div>
    );
}