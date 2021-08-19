<template>
    <div class="header">
        <router-link to="/html">HTML5</router-link> |
        <router-link to="/sass">SASS</router-link> | 
        <router-link to="/git">Git</router-link>|
         <router-link to="/jquery">Jquery</router-link> | 
        <router-link to="/vue">Vue</router-link>|
    </div>
</template>
<style scoped> 
    .header{
       background-color: #42b883;
       padding: 8px;
       color: white; 
    }

    .header .router-link-exact-active{
        color: #35495e;
    }

    .header a {
        color: white;
    }
</style>