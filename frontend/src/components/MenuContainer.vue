<template>
  <div class="menuContainer-wrapper">
      <div class="menu-container">
      <router-view name="b"></router-view>
      </div>
  </div>
</template>

<script>
export default {    
    name:'MenuContainer'
}
</script>

<style>
.menuContainer-wrapper{
    width: 100%;
    height: 700px;
    background-image: url('../assets/imgs/office.jpg');
   background-repeat: no-repeat;
   background-size: 100%;
   background-position: center;
}
.menu-container{
    display: flex;
    justify-content: left;
    color: white;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

}

</style>