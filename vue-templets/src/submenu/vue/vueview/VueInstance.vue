<template>
  <main>
    <h2>Vue.js</h2>
    <section id="container">
      <section id="lnb">
        <p>Vue.js</p>
                <nav>
          <ul>
            <!-- <li @click="toggle" :class="{on : isActive}"> -->
            <li>
              <router-link to="/vue"  title="Fundamentals(beginner)">Vue.js (beginner)</router-link>
              <!-- <ul v-if="show"> -->
              <ul>
                <li><router-link to="/vueInstance" title="Vue Instance">Instance</router-link></li>
                <li><router-link to="/vueTemplate" title="Vue Template">Template</router-link></li>
                <li><router-link to="/vueComponents" title="Vue Components">Components</router-link></li>
                <li><router-link to="/VueRouter" title="Vue Router">Router</router-link></li>
                <li><router-link to="/Vueaxios" title="HTTP 통신 라이브러리">axios</router-link></li>
              </ul>
            </li>
             <li>
              <router-link to="" title="Fundamentals (Middle class)">Vue.js (Middle class)</router-link>
              <ul>
                <li><router-link to="/VueCLI" title="VuE CLI">VuE CLI</router-link></li>
              </ul>
            </li>
            <li><router-link to="" title="고급">고급</router-link></li>
            <li><router-link to="/practice" title="실전">실전</router-link></li>  
          </ul>
        </nav>
      </section>
      <section id="content">
        <article>
          <h3 class="title">Vue.js 란? </h3>
          <p class="notice">
            웹 개발을 단순화하고 정리하기 위해 개발된 대중적인 자바스크립트 프론트엔드 프레임워크
          </p>
        </article>
        <article>
            <h3>Vue Instance</h3>
            <p>
              뷰로 개발할 때 필수로 생성해야하는 코드
            </p>
            <section>
              <article>
                <h4>인스턴스 생성</h4>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">new</span>&nbsp;Vue();</div></pre></td></tr></table></div>
                <p>
                  인스턴스를 생성하고 나면 아래와 같이 인스턴스 안에 어떤 속성과 API가 있는지 콘솔 창에서 확인할 수 있음
                </p>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">var</span>&nbsp;vm&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#ff3399">new</span>&nbsp;Vue();</div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#4be6fa">console</span>.log(vm);</div></pre></td></tr></table></div>
              </article>
              <article>
                <h4>인스턴스의 속성, API들</h4>
                <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">new</span>&nbsp;Vue({</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;el:&nbsp;,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;template:&nbsp;,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;data:&nbsp;,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;methods:&nbsp;,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;created:&nbsp;,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;watch:&nbsp;,</div><div style="padding:0 6px; white-space:pre; line-height:100%">});</div></pre></td></tr></table></div>
                <div class="explanation">
                  <ul>
                    <li>el : 인스턴스가 그려지는 화면의 시작점</li>
                    <li>template : 화면에 표시할 요소</li>
                    <li>data : 뷰의 반응성이 반영된 데이터 속성</li>
                    <li>methods : 화면의 동작과 이벤트 로직을 제어하는 메서드</li>
                    <li>created : 뷰의 라이프 사이클과 관련된 속성</li>
                    <li>watch : data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성</li>
                  </ul>
                </div>
              </article>
            </section>
        </article>
      </section>
    </section>
  </main>
</template>

<script>
</script>

<style>
</style>