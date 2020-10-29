import React from 'react';
import './content.css'
import presentation from '../../assets/imgs/presentation2.png'
import {Template} from '../../assets/styleds/global'
import {KeyboardVoice} from '@styled-icons/material/KeyboardVoice'
import {GTranslate} from '@styled-icons/material/GTranslate'
import {ChatDotsFill} from '@styled-icons/bootstrap/ChatDotsFill'
import {Headphone} from '@styled-icons/boxicons-regular/Headphone'
import {Images} from '@styled-icons/entypo/Images'
import voice from '../../assets/imgs/voice.jpg'


export default function Content() {
 return (
   <Template>
  <div className="content">
    <div className="container-content">
           
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
    <div className="container-content-2">
      <div>
        <KeyboardVoice size={40}/> - Reconhecimento de voz
        <p>Reconhecimento de voz, utilizado em questões de treinamento de fala e pronúncia. Este recurso é compatível somente com navegadores Chrome e Edge</p>
      </div>
      <div>
        <GTranslate size={40}/> - Tradução
        <p>Tradução é um tipo de questão onde o usuário deverá traduzir palavras ou frases escritras ou pronunciadas, utilizando-se das opções solicitadas para responder.</p>
      </div>
      <div>
        <ChatDotsFill size={40}/> - Simulação de Diálogos
        <p>Uma simulação de diálogo entre duas pessoas, com conversas e expressões do  dia-a-dia, contendo lacunas para o usuário preencher corretamente no contexto certo.</p>

      </div>
      <div>
      <Headphone size={40} /> - Audição 
        <p>Recurso de audição com tradução, o usuári oescuta um áudio com vvoz masculina ou feminina, que pronunciará palavras ou frases para o usuário transcrever ou traduzir.</p>

      </div>
      <div>
        <Images size={40}/> - Imagens 
        <p>Para o usuário é solicitado uma palavras e conforme a tradução e significado desta palavra o usuário deverá clicar na imagem correta, se acerte a palvra será pronunciada.</p>

      </div>
    
    </div>

  </div>
</Template>
 );
}