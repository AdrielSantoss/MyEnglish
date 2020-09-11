<template>
  <div class="content">
      <img src="../assets/imgs/presentation.png"  alt="" srcset="">
      <div class="feedbacks">
          <div class="feedback-title">
            5 ANOS CONSECUTIVOS
            PC MAGAZINE EDITOR'S CHOICE WINNER:
            MELHOR SOFTWARE DE APRENDIZADO DE IDIOMAS
          </div>
          <div class="review">
              <div class="review_stars">★ ★ ★ ★ ★</div>
              <div class="review_text">“É excelente, a dinâmica é bem interessante, você pratica seu inglês na medida que vai aprendendo palavras novas.”</div>
              <div class="review_name">-Marcos.</div>
            </div>
            <div class="review">
                <div class="review_stars">★ ★ ★ ★ ★</div>
                <div class="review_text">“estou aprendendo muito, principalmente a minha leitura que tenho mais dificuldade!”</div>
                <div class="review_name">-Wanessa</div>
            </div>
      </div>
  </div>
</template>

<script>

export default {
    name: 'Content'
}
</script>

<style>
.content{
    display: flex;
    justify-content: center;
}
.review{
    font-size: 14px;
line-height: 1.5;
margin: 20px auto 0;
padding-left: 15px;
padding-bottom: 15px;
padding-right: 15px;
text-align: center;
}
.review_name{
    font-weight: 800;
}
.feedbacks {
    margin-top: 80px;
    width: 800px;
}
.feedback-title{
    font-weight: bolder;
    font-size: 25px;
}
</style>