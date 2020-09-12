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
              <div class="option" @click="clickResponse">{{btn1}}</div>
              <div class="option" @click="clickResponse">{{btn2}}</div>
              <div class="option" @click="clickResponse">{{btn3}}</div>
              <div class="option" @click="clickResponse">{{btn4}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import questions from '../../src/sla'
import $ from 'jquery'
export default {
    name:'Game',
    data: function(){
        return {
            r1: '____',
            r2: '____',
            r3: '____',
            r4: '____',
            btn1: '',
            btn2: '',
            btn3: '',
            btn4: '',
            escolhido: [], 
            contadorQuestion: 0
        }
    },
    methods: {
        clickResponse(evt){
            if(this.r1 === "____"){
                if(evt.originalTarget.firstChild.data === 'fine'){
                    this.r1 = evt.originalTarget.firstChild.data
                    $('.response').html(this.r1)
                    return
                }else {
                    alert('errou tente novamente')
                    return
                }
            }

            if(this.r2 === "____"){
                if(evt.originalTarget.firstChild.data === 'old'){
                    this.r2 = evt.originalTarget.firstChild.data
                    $('.response2').html(this.r2)
                    return
                }else {
                    alert('errou tente novamente')
                    return
                }
            }

            if(this.r3 === "____"){
                if(evt.originalTarget.firstChild.data === 'I am'){
                    this.r3 = evt.originalTarget.firstChild.data
                    $('.response3').html(this.r3)
                    return
                }else {
                    alert('errou tente novamente')
                    return
                }
            }

            if(this.r4 === "____"){
                if(evt.originalTarget.firstChild.data === 'years'){
                    this.r4 = evt.originalTarget.firstChild.data
                    this.acertou()
                    $('.response4').html(this.r4)
                    return
                }else {
                    alert('errou tente novamente')
                    return
                }
            }

        },
        rand(min=0, max=4){
        while (this.escolhido.length < 4) {
                const num = Math.random() * (max - min) + min
                let aleatorio = Math.floor(num)
                
                if (this.escolhido.indexOf(aleatorio) === -1){
                    this.escolhido.push(aleatorio)
                    this.contadorQuestion = aleatorio
                    
                } 
            }
        },
        acertou(){
            if(this.r1 !== '____' && this.r2 !== '____' && this.r3 !== '____' && this.r4 !== '____' ){
                this.rand()
            }
        }
    },
    mounted(){
        this.rand(0, 1)
        
        console.log(this.escolhido)
        
        questions.map((i, indice)=>{
            
      
            if(indice === this.contadorQuestion ){
            $('.question-content').append(i.text1)
            $('.question-content').append(i.text2)
            $('.question-content').append(i.text3)
            $('.question-content').append(i.text4)
            $('.question-content').append(i.text5)
            this.btn1 = i.btn1
            this.btn2 = i.btn2
            this.btn3 = i.btn3
            this.btn4 = i.btn4
        }})
        $('.response').append(this.r1)
        $('.response2').append(this.r2)
        $('.response3').append(this.r3)
        $('.response4').append(this.r4)
    
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
    justify-content: space-around;
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
    padding: 10px
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
    border-bottom: 1px solid slategray;
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

</style>