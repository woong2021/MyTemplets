<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
  body{
    margin: 0;
    padding: 0;
  }

  .header{
    display: flex;
    padding: 8px;
    background-color: #42b883;
    color: white;
  }

  .header .router-link-exact-active {
    color: #35495e;
  }

  .header a{
    color: white;
  }
</style>