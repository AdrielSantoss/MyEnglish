<template>
  <div class="game-wrapper ">
      <div class="menu-icons">
            <i class="fa fa-times-circle"></i>
          <i class="fa fa-pencil-square" aria-hidden="true"></i>
      </div>

      <div class="question-container">
          <div class="question-content">
              <div class="question-type">
                   Dialog <i class="fa fa-comments-o" aria-hidden="true"></i>
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
              <div :class="{option:btn6}" @click="clickResponse">{{btn6}}</div>
              <div class="next" v-show="showNext">Continuar</div>
          </div>
      </div>
  </div>
</template>

<script>
import {dialogs} from '../../src/sla'
import $ from 'jquery'
export default {
    name:'Dialog',
    data: function(){
        return {
            r1: '',
            r2: '',
            r3: '',
            r4: '',
            r5: '',
            r6: '',
            r7: '',
            r8: '',
            btn1: '',
            btn2: '',
            btn3: '',
            btn4: '',
            btn5: '',
            btn6: '',
            contadorQuestion: 0,
            escolhidoDois: [],
            contadorTotal: [],
            evts: [],
            resposta1: '',
            resposta2: '',
            resposta3: '',
            resposta4: '',
            resposta5: '',
            resposta6: '',
            resposta7: '',
            resposta8: '',
            showNext: false
    
    
        }
    },
    methods: {
        clickResponse(evt){

            if(this.r1 === "____"){
                if(evt.originalTarget.firstChild.data === this.resposta1){
                    evt.originalTarget.className = 'disableButton'
                    this.evts.push(evt)
                    this.r1 = evt.originalTarget.firstChild.data
                    $('.response').html(this.r1)
                    
                    return
                }else {
                   this.$toasted.global.defaultError()
                   return
                    
                }
            }

            if(this.r2 === "____"){
                if(evt.originalTarget.firstChild.data === this.resposta2){
                    this.r2 = evt.originalTarget.firstChild.data
                    evt.originalTarget.className = 'disableButton'
                    this.evts.push(evt)
                    $('.response2').html(this.r2)
                    return
                }else {
                    evt.originalTarget.className = 'errorBtn'
                    this.$toasted.global.defaultError()
                    return
                }
            }

            if(this.r3 === "____"){
                if(evt.originalTarget.firstChild.data === this.resposta3){
                    this.r3 = evt.originalTarget.firstChild.data
                    evt.originalTarget.className = 'disableButton'
                    this.evts.push(evt)
                    $('.response3').html(this.r3)
                    return
                }else {
                    evt.originalTarget.className = 'errorBtn'
                    this.$toasted.global.defaultError()
                    return
                }
            }

            if(this.r4 === "____"){
                if(evt.originalTarget.firstChild.data === this.resposta4){
                    this.r4 = evt.originalTarget.firstChild.data
                    evt.originalTarget.className = 'disableButton'
                    this.evts.push(evt)
                    $('.response4').html(this.r4)
                    let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                    if(this.r4 === ultimo){
                        this.showNext = !this.showNext
                        $('.next').click(()=>{
                            this.acertou()
                        })
                        this.$toasted.global.defaultSuccess()
                        
                    }
                    return
                }else {
                    evt.originalTarget.className = 'errorBtn'
                   this.$toasted.global.defaultError()
                    return
                }
            }

            if(this.r5 === "____"){
                if(evt.originalTarget.firstChild.data === this.resposta5){
                    this.r5 = evt.originalTarget.firstChild.data
                    evt.originalTarget.className = 'disableButton'
                    this.evts.push(evt)
                    $('.response5').html(this.r5)
                    let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                    if(this.r5 === ultimo){
                        this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    return
                }else {
                    evt.originalTarget.className = 'errorBtn'
                    this.$toasted.global.defaultError()
                    return
                }
            }

            if(this.r6 === "____"){
                if(evt.originalTarget.firstChild.data === this.resposta6){
                    this.r6 = evt.originalTarget.firstChild.data
                    evt.originalTarget.className = 'disableButton'
                    this.evts.push(evt)
                    $('.response6').html(this.r6)
                    let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                    if(this.r6 === ultimo){
                        this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    return
           
                }else {
                    evt.originalTarget.className = 'errorBtn'
                    this.$toasted.global.defaultError()
                    return
                }
            }

            if(this.r7 === "____"){
                if(evt.originalTarget.firstChild.data === this.resposta7){
                    this.r7 = evt.originalTarget.firstChild.data
                    evt.originalTarget.className = 'disableButton'
                    this.evts.push(evt)
                    $('.response7').html(this.r7)
                    let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                    if(this.r7 === ultimo){
                        this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    return
           
                }else {
                    evt.originalTarget.className = 'errorBtn'
                    this.$toasted.global.defaultError()
                    return
                }
            }

            if(this.r8 === "____"){
                if(evt.originalTarget.firstChild.data === this.resposta8){
                    this.r8 = evt.originalTarget.firstChild.data
                    evt.originalTarget.className = 'disableButton'
                    this.evts.push(evt)
                    $('.response8').html(this.r8)
                    let ultimo =  this.contadorTotal[this.contadorTotal.length-1];
                    if(this.r8 === ultimo){
                        this.$toasted.global.defaultSuccess()
                        this.showNext = !this.showNext
                        $('.next').click(()=>{
                            this.acertou()
                        })
                    }
                    return
           
                }else {
                    evt.originalTarget.className = 'errorBtn'
                    this.$toasted.global.defaultError()
                    return
                }
            }

    
        },
        rand(){
                dialogs.map((i, indice)=>{
                while(indice === this.contadorQuestion && this.escolhidoDois.indexOf(this.contadorQuestion) === -1){
                    this.escolhidoDois.push(this.contadorQuestion)
                    $('.question-content').append(i.text1)
                    $('.question-content').append(i.text2)
                    $('.question-content').append(i.text3)
                    $('.question-content').append(i.text4)
                    $('.question-content').append(i.text5)
                    $('.question-content').append(i.text6)
                    $('.question-content').append(i.text7)
                    $('.question-content').append(i.text8)
                    $('.question-content').append(i.text9)
                    $('.question-content').append(i.text10)
                    $('.question-content').append(i.text11)
                    this.r1 = "____"
                    this.r2 = "____"
                    this.r3 = "____"
                    if(i.r4){
                        this.r4 = "____"
                        this.contadorTotal.push(i.r4)
                        if(i.r5){
                            this.r5 = "____"
                            this.contadorTotal.push(i.r5)
                            if(i.r6){
                                this.r6 = "____"
                                this.contadorTotal.push(i.r6)
                                if(i.r7){
                                    this.r7 = "____"
                                    this.contadorTotal.push(i.r7)
                                    if(i.r8){
                                        this.r8 = "____"
                                        this.contadorTotal.push(i.r8)
                                    }
                                }
                            }
                        }
                    }

                    $('.response').html(this.r1)
                    $('.response2').html(this.r2)
                    $('.response3').html(this.r3)
                    $('.response4').html(this.r4)
                    $('.response5').html(this.r5)
                    $('.response6').html(this.r6)
                    $('.response7').html(this.r7)
                    $('.response8').html(this.r8)
                    this.resposta1 = i.r1
                    this.resposta2 = i.r2
                    this.resposta3 = i.r3
                    this.resposta4 = i.r4
                    this.resposta5 = i.r5
                    this.resposta6 = i.r6
                    this.resposta7 = i.r7
                    this.resposta8 = i.r8
                    this.resposta9 = i.r9
                    this.resposta10 = i.r10
                    this.btn1 = i.btn1
                    this.btn2 = i.btn2
                    this.btn3 = i.btn3
                    this.btn4 = i.btn4
                    this.btn5 = i.btn5
                    this.btn6 = i.btn6
                
            }
            })
        },
        acertou(){
            if(this.r1 !== '____' && this.r2 !== '____' && this.r3 !== '____' && this.r4 !== '____' ){
                $('.question-content').html('<div class="question-type">Dialog <i class="fa fa-comments-o" aria-hidden="true"></i></div>')
                this.evts.map(i => i.originalTarget.className = 'option')
                this.contadorQuestion+=1
                this.showNext = !this.showNext
                this.rand()
            }
        }
    },
    mounted(){
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
;
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
.response {
    color: slategray;
    font-weight: 800;
}
.response2 {
    color: slategray;
    font-weight: 800;
}
.response3 {
    color: slategray;
    font-weight: 800;
}
.response4 {
    color: slategray;
    font-weight: 800;
}
.response5 {
    color: slategray;
    font-weight: 800;
}
.disableButton{
    display: none;
}
.left {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;

}
.right{
    display: flex;
    width: 100%;
    justify-content: right;
    align-items: center;
    margin-right: 35px;
    right: 0px;
}
.man-perfil{
    width: 50px;
    height: 45px;
    background-color: purple;
    border-radius: 50%;
    background-image: url('../assets/imgs/man.jpg');
    background-position: center;
    margin-right: 5px;
}
.oldman-perfil{
    width: 50px;
    height: 45px;
    background-color: purple;
    border-radius: 50%;
    background-image: url('../assets/imgs/oldman.jpg');
    background-position: center;
    margin-right: 5px;
}
.woman-perfil{
    position: relative;
    width: 50px;
    height: 45px;
    background-color: purple;
    border-radius: 50%;
    background-image: url('../assets/imgs/woman.jpg');
    background-position: center;
    margin-left: 5px;
}
.womanTwo-perfil{
    position: relative;
    width: 50px;
    height: 45px;
    background-color: purple;
    border-radius: 50%;
    background-image: url('../assets/imgs/woman2.jpg');
    background-position: center;
    margin-left: 5px;
}
.errorBtn{
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
    border: 3px solid red;
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

</style>