<template>
  <div class="home-wrapper">
      <Menu />
      <MenuContainer />
      <Content />
      <Footer />

  </div>
</template>

<script>
import Menu from './Menu'
import MenuContainer from './MenuContainer'
import Content from './Content'
import Footer from './Footer'
export default {
    name: 'Home',
    components: {
        Menu,
        MenuContainer,
        Content,
        Footer
    }
}
</script>

<style>

</style>