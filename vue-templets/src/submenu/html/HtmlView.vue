<template>
  <main>
    <h2>HTML5 &#38; CSS</h2>
    <section id="container">
      <section id="lnb">
        <p>HTML5 &#38; CSS</p>
        <ul>
          <li><router-link to="/Guide" title="가이드라인">가이드라인</router-link></li>
          <li class="active"><router-link to="/html" class="active" title="html">HTML5</router-link></li>
          <li><router-link to="" title="css3">CSS3</router-link></li>
          <li><router-link to="/sass" title="sass">SASS</router-link></li>
          <li><router-link to="" title="활용">활용</router-link></li>
        </ul>      
      </section>
      <section id="content">
        <article>
          <h3 class="title">HTML 이란 !? </h3>
          <p class="notice">
            HTML (Hypertext Markup Language,하이퍼텍스트 마크업 언어)는 프로그래밍 언어는 아니고, 우리가 보는 웹페이지가 어떻게 구조화되어 있는지 브라우저로 하여금 알 수 있도록 하는 마크업 언어입니다.
          </p>
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