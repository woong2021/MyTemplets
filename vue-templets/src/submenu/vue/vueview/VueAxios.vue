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
          <h3>엑시오스 설치</h3>
          <p>
            프로젝트에 엑시오스를 설치하는 방법은  CDN 방식가 NPM 방식 2가지가 있다.
          </p>
          <section>
            <article>
              <h4>Axios 설치방법 (CDN)</h4>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script&nbsp;src<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span><span style="color:#ffd500">"https://unpkg.com/axios/dist/axios.min.js"</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></pre></td></tr></table></div>
            </article>
            <article>
              <h4>Axios 활용예제</h4>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"app"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">button</span>&nbsp;<span style="color:#a8ff58">v-on:click</span>=<span style="color:#ffd500">"getData"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span>Get&nbsp;User<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">button</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{users}}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>

              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script&nbsp;src<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span><span style="color:#ffd500">"https://cdn.jsdelivr.net/npm/vue/dist/vue.js"</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script&nbsp;src<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span><span style="color:#ffd500">"https://unpkg.com/axios/dist/axios.min.js"</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#ff3399">new</span>&nbsp;Vue({</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;el:<span style="color:#ffd500">'#app'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;data:{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;users:&nbsp;[]</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;methods:{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getData:&nbsp;<span style="color:#ff3399">function</span>(){</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">var</span>&nbsp;vm&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;<span style="color:#4be6fa">this</span>;</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;axios.get(<span style="color:#ffd500">'https://jsonplaceholder.typicode.com/users/'</span>)</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then(<span style="color:#ff3399">function</span>(response){</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">console</span>.log(response.data);</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vm.users&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;response.data;</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span style="color:#ff3399">catch</span>(<span style="color:#ff3399">function</span>(error){</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">console</span>.log(error);</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;})</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">&lt;</span><span style="color:#aaffaa"></span><span style="color:#ff3399">/</span>script<span style="color:#aaffaa"></span><span style="color:#ff3399">&gt;</span></div></pre></td></tr></table></div>
            </article>
          </section>
        </article>
      </section>
    </section>
  </main>
</template>