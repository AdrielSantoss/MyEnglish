import React from 'react';
import './content.css'
import presentation from '../../assets/imgs/presentation.png'
import {Template} from '../../assets/styleds/global'
export default function Content() {
 return (
   <Template>
  <div className="content">

     
          <img src={presentation}  alt="" srcset="" className="img"/>
      
      
      <div className="feedbacks">
          <div className="feedback-title ">
            MELHOR SOFTWARE DE PRÁTICA DE INGLÊS COM O AUXILIO DE INÚMERAS METODOLOGIAS DE FIXAÇÃO DE CONTEÚDO.
          </div>
          <div className="review">
              <div className="review_stars">★ ★ ★ ★ ★</div>
              <div className="review_text">“É excelente, a dinâmica é bem interessante, você pratica seu inglês na medida que vai aprendendo palavras novas.”</div>
              <div className="review_name">-Marcos</div>
            </div>
            <div className="review">
                <div className="review_stars">★ ★ ★ ★ ★</div>
                <div className="review_text">“estou aprendendo muito, principalmente a minha leitura que tenho mais dificuldade!”</div>
                <div className="review_name">-Wanessa</div>
            </div>
            </div>
            
         
    
      
  </div>
</Template>
 );
}