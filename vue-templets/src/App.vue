<template>
  <div id="app">
    <gnb-menu></gnb-menu>
    <lnb-menu></lnb-menu>
    <router-view></router-view>
    <footer-area></footer-area>
  </div>
</template>

<script>
import GnbMenu from './components/GnbMenu.vue';
import FooterArea from './components/FooterArea.vue';

export default {
  components: {
    GnbMenu,
    FooterArea
  }
}
</script>

<style>

</style>
