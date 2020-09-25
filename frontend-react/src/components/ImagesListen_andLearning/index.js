import React from 'react';
import './images-listen-and-learning.css'

export default function ImagesListen_andLearning() {
 return (
    <div>
    <div className="question-container">
        <div className="question-content">
            <div className="question-type">
                Images and learning <i className="fa fa-comments-o" aria-hidden="true"></i>
            </div>
            
            <div className="images-wrapper">
                <div className="images-learning">

                </div>
            </div>

            <div className="translate-wrapper">
                <div className="translate-title">
                    Traduza a frase acima:
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

    </div>
</div>
 );
}