<template>
  <div class="game-wrapper bg-dark">
      <div class="question-content">
          
      </div>

      <div class="responses-area">
          <div class="responses-options">
              <div class="option">Hi</div>
              <div class="option">I'm</div>
              <div class="option">name's</div>
              <div class="option">fine</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Game'
}
</script>

<style>
.game-wrapper{
    height: 100vh;
    width: 100%;
}
.responses-area{
    position: absolute;
    bottom:0px;
    width: 100%;
    height: 100px;
    background-color: rgba(92, 88, 88, 0.411);
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
    background-color: white;
    border-radius: 5%;
    width: 120px;
    height: 30px;

}
</style>