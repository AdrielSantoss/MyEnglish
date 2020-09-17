<template>
  <div class="game-wrapper ">

      <div class="menu-icons">
          <div class="menu-wrapper">
            <i class="fa fa-times-circle"></i>
          <i class="fa fa-pencil-square" aria-hidden="true"></i>
          </div>
      </div>
      <div class="question-container">
          <div class="question-content">
              <div class="question-type">
                   Translate <i class="fa fa-comments-o" aria-hidden="true"></i>
              </div>
              <div class="image">
                <div class="text"></div>
              </div>

            
              <div class="translate-wrapper">
                  <div class="translate-title">
                       Traduza a {{fraseOrWord}} acima:
                  </div>
                  <div class="translate">
                      <div class="text1"></div>
                      <div class="text2"></div>
                      <div class="text3"></div>
                      <div class="text4"></div>
                  </div>
              </div>
          </div>
      </div>

      <div class="responses-area">
          <div class="responses-options">
              <div :class="{option:btn1}" @click="clickResponse">{{btn1}}</div>
              <div :class="{option:btn2}" @click="clickResponse">{{btn2}}</div>
              <div :class="{option:btn3}" @click="clickResponse">{{btn3}}</div>
              <div :class="{option:btn4}" @click="clickResponse">{{btn4}}</div>
              <div :class="{option:btn5}" @click="clickResponse">{{btn5}}</div>
              <div class="next" v-show="showNext">Continuar</div>
          </div>
      </div>
      
  </div>
</template>

<script>
import {translate} from '../translate'
import $ from 'jquery'
export default {
    name: 'ListenAndLerning',
      data: () => ({
            btn1: '',
            btn2: '',
            btn3: '',
            btn4: '',
            btn5: '',
            contadorWord: 0,
            r1: '',
            r2: '',
            r3: '',
            r4: '',
            r5: '',
            fraseOrWord: 'palavra',
            response1: '',
            response2: '',
            response3: '',
            showNext: false,
            escolhidoDois: [],
            contadorQuestion: 0,
            contadorTotal: []
    
        
    }),
    methods:{
        clickResponse(evt){
            if(this.r1 === "____ "){
                if(evt.originalTarget.firstChild.data === this.response1){
                    evt.originalTarget.className = 'disableButton'
                    this.r1 = evt.originalTarget.firstChild.data
                    $('.text1').html(this.r1)
                    let ultimo =  this.contadorTotal[this.contadorTotal.length-1];

                    if(this.r1 === ultimo){
                    this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    
                    return
                }else {
                   this.$toasted.global.defaultError()
                   return
                    
                }
            }
            if(this.r2 === "____ "){
                if(evt.originalTarget.firstChild.data === this.response2){
                    evt.originalTarget.className = 'disableButton'
                    this.r2 = evt.originalTarget.firstChild.data
                    $('.text2').html(this.r2)
                    
                let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                 if(this.r2 === ultimo){
                    this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        this.btn1 = ''
                        this.btn2 = ''
                        this.btn3 = ''
                        this.btn4 = ''
                        this.btn5 = ''
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    return
                }else {
                   this.$toasted.global.defaultError()
                   return
                    
                }
            }
            if(this.r3 === "____ "){
                if(evt.originalTarget.firstChild.data === this.response3){
                    evt.originalTarget.className = 'disableButton'
                    this.r3 = evt.originalTarget.firstChild.data
                    $('.text3').html(this.r3)

                let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                 if(this.r3 === ultimo){
                    this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        this.btn1 = ''
                        this.btn2 = ''
                        this.btn3 = ''
                        this.btn4 = ''
                        this.btn5 = ''
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    return
                }else {
                   this.$toasted.global.defaultError()
                   return
                    
                }
            }
            if(this.r4 === "____ "){
                if(evt.originalTarget.firstChild.data === this.response4){
                    evt.originalTarget.className = 'disableButton'
                    this.r4 = evt.originalTarget.firstChild.data
                    $('.text4').html(this.r4)

                let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                 if(this.r4 === ultimo){
                    this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        this.btn1 = ''
                        this.btn2 = ''
                        this.btn3 = ''
                        this.btn4 = ''
                        this.btn5 = ''
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    return
                }else {
                   this.$toasted.global.defaultError()
                   return
                    
                }
            }
            if(this.r5 === "____ "){
                if(evt.originalTarget.firstChild.data === this.response5){
                    evt.originalTarget.className = 'disableButton'
                    this.r5 = evt.originalTarget.firstChild.data
                    $('.text5').html(this.r5)

                let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                 if(this.r5 === ultimo){
                    this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        this.btn1 = ''
                        this.btn2 = ''
                        this.btn3 = ''
                        this.btn4 = ''
                        this.btn5 = ''
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    return
                }else {
                   this.$toasted.global.defaultError()
                   return
                    
                }
            }
          
            
                 
        }, rand(){
            translate.map((i, indice)=>{
                while(indice === this.contadorQuestion && this.escolhidoDois.indexOf(this.contadorQuestion) === -1){
                    this.escolhidoDois.push(this.contadorQuestion)

                    $('.text').html(i.text)
                    this.contarpalavra(i.text)
                    this.response = i.text

                    this.btn1 = i.btn1
                    this.btn2 = i.btn2
                    this.btn3 = i.btn3
                    this.btn4 = i.btn4
                    this.btn5 = i.btn5
                    this.response1 = i.t1
                    this.response2 = i.t2
                    this.response3 = i.t3

                    if(i.t1){
                        this.contadorTotal.push(i.t1)
                        if(i.t2){
                            this.contadorTotal.push(i.t2)
                            if(i.t3){
                                this.contadorTotal.push(i.t3)
                                if(i.t4){
                                    this.contadorTotal.push(i.t4)
                                    if(i.t5){
                                        this.contadorTotal.push(i.t5)
                                    }
                                }
                            }
                        }
                    }

                    for(i = 1; i <= this.contadorWord; i++){
                           if(i === 1){
                               this.r1 = '____ '
                               
                           }
                           if(i === 2){
                              this.r2 = '____ ' 
                              this.fraseOrWord = 'frase'
                           }

                           if(i === 3){
                              this.r3 = '____ ' 
                           }
                           if(i === 4){
                              this.r4 = '____ ' 
                           }
                           if(i === 5){
                              this.r5 = '____ ' 
                           }
                            
                    }
      
                    $('.text1').html(this.r1)
                    $('.text2').html(this.r2)
                    $('.text3').html(this.r3)
                    $('.text4').html(this.r4)
            }
            })
        },acertou(){
                this.contadorQuestion+=1
                this.showNext = !this.showNext
                this.rand()
            
        },
         contarpalavra(valor){         
            valor.replace(/(\r\n|\n|\r)/g," ").trim();
            
            var cont = valor.split(/\s+/g).length ;
                        
            
               this.contadorWord = cont
            
        }
    }, mounted(){
        this.rand()
    }
}
</script>

<style>
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
    align-items: center;
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
    font-size: 35px;
    background-color: rgba(0, 0, 0, 0.459);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
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
.translate-title{
    text-align: center;
}
.translate{
       font-size: 35px;
       display: flex;
}
.translate div {
    margin: 5px;
}
.disableButton{
    display: none;
}

</style>