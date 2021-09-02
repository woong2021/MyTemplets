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
          <h3 class="title">실전 </h3>
          <p class="notice">
            모르는 문법이 나왔을 때 공식문서 참조 : <a href="https://vuejs.org/" title="vue 공식문서" class="red">바로가기</a>
          </p>
        </article>
        <article>
          <h4>INPUT</h4>
          <p>
            TODO : INPUT BOX를 만들고 입력된 값을 p 태그에 출력
          </p>
          <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"app"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#999999">&lt;!--&nbsp;TODO&nbsp;:&nbsp;INPUT&nbsp;BOX를&nbsp;만들고&nbsp;입력된&nbsp;값을&nbsp;p&nbsp;태그에&nbsp;출력--&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">input</span>&nbsp;<span style="color:#a8ff58">type</span>=<span style="color:#ffd500">"text"</span><span style="color:#a8ff58"></span>&nbsp;<span style="color:#a8ff58">v-model</span>=<span style="color:#ffd500">"message"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span>Message&nbsp;is:&nbsp;{{&nbsp;message&nbsp;}}<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">p</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>
          <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script&nbsp;src<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span><span style="color:#ffd500">"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#ff3399">new</span>&nbsp;Vue({</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;el:&nbsp;<span style="color:#ffd500">'#app'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message:&nbsp;<span style="color:#ffd500">''</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;})</div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></pre></td></tr></table></div>
          <div class="explanation">

          </div>
        </article>
      </section>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style>

</style>