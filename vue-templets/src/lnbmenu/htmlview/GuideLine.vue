<template>
  <main>
    <h2>HTML5 &#38; CSS</h2>
    <section id="container">
      <section id="lnb">
        <p>HTML5 &#38; CSS</p>
        <ul>
          <li class="active"><router-link to="/GuideView" class="active">가이드라인</router-link></li>
          <li><router-link to="/html">HTML5</router-link></li>
          <li><router-link to="/sass">CSS3</router-link></li>
          <li><router-link to="/vue">활용</router-link></li>
        </ul>    
      </section>
      <section>
        <article>
          <h3>가이드라인 </h3>
          <p class="notice">
            해당 가이드라인은 주관적인 것이며 본인 스타일로 제작되었습니다.
          </p>
        </article>
        <article>
          <div>
            <h4>TITLE</h4>
          </div>
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

<style lang="scss">
  html{}
</style>