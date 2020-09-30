import React from 'react';
import './more-info.css'

export default function More_info() {
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
                            <div className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i><strong>Tempo:</strong></div>  <span className="ml-2">72.5s</span>
                        </div>
                        <div className="icon-content">
                            <div className="icon"><i className="fa fa-bar-chart" aria-hidden="true"></i> <strong>Questão:</strong></div>  <span className="ml-3">16</span>
                        </div>
                        <div className="icon-content">
                            <div className="icon"><i className="fa fa-star-half-o" aria-hidden="true"></i> <strong>Dificuldade:</strong></div> <span className="ml-3">Medium</span>
                        </div>
              </div>
        <div className="icons-description">
                        <div className="icon-content">
                            <div className="icon"><i className="fa fa-clock-o" aria-hidden="true"></i><strong>Tipo:</strong></div>  <span className="ml-1">Dialogue</span>
                        </div>
                        <div className="icon-content">
                            <div className="icon"><i className="fa fa-bar-chart" aria-hidden="true"></i> <strong>Recorde:</strong></div>  1200pts
                        </div>
                        <div className="icon-content">
                            <div className="icon"><i className="fa fa-star-half-o" aria-hidden="true"></i> <strong>Pontos:</strong></div><span className="ml-2">800pts</span>
                        </div>
              </div>
  
   </div>
 );
}