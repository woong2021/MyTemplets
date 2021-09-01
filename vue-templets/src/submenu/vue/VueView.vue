<template>
  <main>
    <h2>Vue.js</h2>
    <section id="container">
      <section id="lnb">
        <p>Vue.js</p>
        <ul>
          <li class="active"><router-link to="" class="active" title="초급(CDN)">초급(CDN)</router-link></li>
          <li><router-link to="" title="중급(CLI)">중급(CLI)</router-link></li>
          <li><router-link to="" title="고급">고급</router-link></li>
          <li><router-link to="" title="실전">실전</router-link></li>
        </ul>    
      </section>
      <section>
        <article>
          <h3 class="title">Vue.js 란? </h3>
          <p class="notice">
            웹 개발을 단순화하고 정리하기 위해 개발된 대중적인 자바스크립트 프론트엔드 프레임워크
          </p>
        </article>
        <article>
          <h3>Vue Router</h3>
          <p>
            Vue Router은 Vue.js 의 공식 라우터 입니다. 싱글 페이지 앱을 쉽게 만들 수 있도록 Vue.js의 코어와 긴밀히 통합되어 있습니다.
          </p>
          <section>
            <article>
              <h4>Vue Router 공식문서</h4>
              <div class="explanation">
                <a href="https://router.vuejs.org/installation.html#direct-download-cdn" title="Vue Router"> 공식문서 바로가기 </a>
              </div>
            </article>
          </section>
        </article>
        <article>
            <h3>네비게이션 가드 (차후 고급 메뉴로 이관)</h3>
            <p>
              네비게이션 가드(navigation guard)란 뷰 라우터로 특정 URL에 접근할 때 해당 URL의 접근을 막는 방법을 말합니다. 예를 들어, 사용자의 인증 정보가 없으면 특정 페이지에 접근하지 못하게 할 때 사용하는 기술입니다.
            </p>
            <section>
               <article>
                <h4>참고 문서</h4>
                <div class="explanation">
                  <a href="https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/" title="네비게이션 가드"> 참고문서 바로가기</a>
                </div>
              </article>
              <article>
                <h4>전역가드</h4>
                <div class="explanation">

                </div>
              </article>
            </section>
        </article>
        <article>
            <h3>API (차후 고급 메뉴로 이관)</h3>
            <p class="notice">
  
            </p>
            <section>
              <article>
                <h4>내부 API</h4>
                <div class="explanation">
                  <div  v-for="sample in test">
                    {{ sample.age }}
                  </div>
                </div>
              </article>
            </section>
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