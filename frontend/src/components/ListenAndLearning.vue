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
              <div class="image"></div>

              <div class="audio">
                   <audio controls>
                    <source src="horse.ogg" type="audio/ogg">
                    <source  class= "audioMp3" src="../assets/audios/VAPO VAPO VS POCOTÓ - MC PR - Fica de quatro nós bota sem dó (DJ Menor da B).mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio> 
              </div>

              <div class="text">
                  I am ___ thanks
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
export default {
    name: 'ListenAndLerning'
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
</style>