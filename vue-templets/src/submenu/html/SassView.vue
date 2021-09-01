<template>
  <main>
    <h2>HTML5 &#38; CSS</h2>
    <section id="container">
      <section id="lnb">
        <p>HTML5 &#38; CSS</p>
        <ul>
          <li><router-link to="/Guide" title="가이드라인">가이드라인</router-link></li>
          <li><router-link to="/html" title="html">HTML5</router-link></li>
          <li><router-link to="" title="css3">CSS3</router-link></li>
          <li class="active"><router-link to="/sass" class="active" title="sass">SASS</router-link></li>
          <li><router-link to="" title="활용">활용</router-link></li>
        </ul>      
      </section>
      <section>
        <article>
          <h3 class="title">SASS 란 무엇인가! </h3>

        </article>
      </section>
    </section>
  </main>
</template>
<script>

</script>
<style lang="scss">
  html{}
</style>