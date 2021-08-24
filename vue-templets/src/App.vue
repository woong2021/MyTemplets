<template>
  <div id="app">
    <gnb-menu></gnb-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import GnbMenu from './components/GnbMenu.vue';

export default {
  components: {
    GnbMenu,
  }
}
</script>

<style>

</style>
