<template>
  <header>
    <h1>What to do!?</h1>
    <nav class="header">
      <router-link to="/html">HTML5</router-link>
      <router-link to="/sass">SASS</router-link>
      <router-link to="/git">Git</router-link>
      <router-link to="/jquery">Jquery</router-link>
      <router-link to="/vue">Vue</router-link>
    </nav>
  </header>
</template>
<style scoped> 
  .header .router-link-exact-active{
    color: #35495e;
  }

  .header a {
    color: white;
  }
</style>