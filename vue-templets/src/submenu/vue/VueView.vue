<template>
  <main>
    <h2>Vue.js</h2>
    <section id="container">
      <section id="lnb">
        <p>Vue.js</p>
        <ul>
          <li class="active"><router-link to="" class="active">초급</router-link></li>
          <li><router-link to="">중급</router-link></li>
          <li><router-link to="">고급</router-link></li>
          <li><router-link to="">실전</router-link></li>
        </ul>    
      </section>
      <section>
        <article>
          <h3 class="title">Vue.js 란? </h3>
          <p class="notice">

          </p>
        </article>
        <article v-for="sample in test">
          {{ sample.age }}
        </article>
      </section>
    </section>
  </main>
</template>

<script>
// 내부 API

import test from '../../assets/json/sample.json';
export default {
  data() {
    return{
      test
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>