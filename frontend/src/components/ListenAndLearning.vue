<template>
  <div class="game-wrapper ">

      <div class="menu-icons">
            <i class="fa fa-times-circle"></i>
          <i class="fa fa-pencil-square" aria-hidden="true"></i>
      </div>
      <div class="question-container">
          <div class="question-content">
              <div class="question-type">
                   Listen and learning <i class="fa fa-comments-o" aria-hidden="true"></i>
              </div>
              <div class="image">
              </div>
              <div class="audio">
                   <button >ouvir</button>
              </div> 
        
              <div class="text"></div>
              
          </div>
      </div>

      <div class="responses-area">
          <div class="responses-options">
              <div :class="{option:btn1}" @click="clickResponse">{{btn1}}</div>
              <div :class="{option:btn2}" @click="clickResponse">{{btn2}}</div>
              <div :class="{option:btn3}" @click="clickResponse">{{btn3}}</div>
              <div :class="{option:btn4}" @click="clickResponse">{{btn4}}</div>
              <div class="next" v-show="showNext">Continuar</div>
          </div>
      </div>
      
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {ListenAndLearning} from '../listenAndLearning'
import $ from 'jquery'
export default {
    name: 'ListenAndLerning',
      data: () => ({
            btn1: '',
            btn2: '',
            btn3: '',
            btn4: '',
            resposne: '',
            r: '____',
            contadorQuestion: 0,
            escolhidoDois: [],
            audio: 'lets-play-soccer',
            file: '../assets/audios/poct.mp3',
            img: 'http://picsum.photos/200/300',
            showNext: false,
    
    
        
    }), 
    computed: mapState(['question']),
    methods:{
        clickResponse(evt){

                if(this.r === "____"){
                    if(evt.originalTarget.firstChild.data === this.response){
                        this.r = evt.originalTarget.firstChild.data
                        $('.response').html(this.r)
                        this.btn1 = ''
                        this.btn2 = ''
                        this.btn3 = ''
                        this.btn4 = ''
                        this.showNext = !this.showNext
                        this.$toasted.global.defaultSuccess()
                        $('.next').click(()=>{
                            this.acertou()
                        })
                        return
                    }else {
                        alert('erro')
                        return
                    }
                }
                 
        },
        rand(){
     
                ListenAndLearning.map((i, indice)=>{
                while(indice === this.contadorQuestion && this.escolhidoDois.indexOf(this.contadorQuestion) === -1){
                    this.escolhidoDois.push(this.contadorQuestion)
                    this.r = "____"

                    $('.text').html(i.text)
                    $('.response').html(this.r)
    
                    this.response = i.r
                    this.img = i.img
                    this.audio = i.audio
                
                    this.btn1 = i.btn1
                    this.btn2 = i.btn2
                    this.btn3 = i.btn3
                    this.btn4 = i.btn4
                
            }
            })
        },acertou(){
            if(this.r !== '____'){
                this.contadorQuestion+=1
                this.showNext = !this.showNext
                $('.audio').html('')
                $('.audio').append('<audio class="audioPlay" controls><source id="audio" src="../assets/audios/very-rich.mp3"  type="audio/mpeg"/></audio>')
        
                this.rand()
                
            }
        }
    },
    mounted(){
        this.rand()
    }
}
</script>

<style >
.game-wrapper{

    height: 100vh;
    width: 100%;
    background-color: rgb(123, 140, 158);
}
.responses-area{
    position: absolute;
    bottom:0px;
    width: 100%;
    height: 100px;
    background-color: rgb(123, 140, 158);
    border-top: 1px solid slategray;
    box-shadow: 0 10px 20px 0 rgba(33,33,33,.9);
}
.responses-area{
    display: flex;
    justify-content: center;
}
.responses-options{
    display: flex;
    width: 1000px;
    justify-content: center;
    align-items: center;
}
.option{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    color: black;
    background-color: white;
    border-radius: 5%;
    width: 120px;
    height: 35px;
    margin: 50px;
    cursor: pointer;
}
.menu-icons{
    width: 300px;
    display: flex;
    justify-content: center;
}
.menu-icons i{
    margin: 15px;
}
.fa.fa-times-circle{
    font-size: 30px;
}
.fa.fa-pencil-square{
    font-size: 30px;
}
.fa.fa-user-circle{
    font-size: 30px;
}
.fa.fa-user-circle-o{
    font-size: 30px;
}
.fa.fa-user-circle-o{
    font-size: 30px;
}
.fa.fa-comments-o{
    font-size: 30px;
    margin-left: 10px;
}
.question-container{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.question-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 600px;
    border-radius: 1%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 80px;
    padding-right: 80px;

}
.question-content span{
    margin: 10px ;
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.question-type{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    height: 30px;
    margin-bottom: 10px;
    padding: 20px;
}
.image{
    width: 530px;
    height: 300px;
     background-image: url('../assets/imgs/ListenAndLerning1.jpg');
    background-repeat: no-repeat;
    background-position: center;
}

audio{
    display: block;
    width: 530px;
    height: 35px;
    background-color: rgb(54, 54, 131);
    border-radius: 3%;
}


.text{
    margin-top: 15px;
    font-size: 35px;
}
.next{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: green;
    border-radius: 5%;
    width: 120px;
    height: 35px;
    margin: 50px;
    cursor: pointer;
  
}
.response {
    color: slategray;
    font-weight: 800;
    
}
</style>