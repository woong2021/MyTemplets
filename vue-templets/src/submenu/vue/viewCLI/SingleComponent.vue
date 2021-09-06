<template>
  <main>
    <h2>Vue.js</h2>
    <section id="container">
      <section id="lnb">
        <p>Vue.js</p>
        <nav>
          <ul>
            <!-- <li @click="toggle" :class="{on : isActive}"> -->
            <li v-on:click="toggle" :class="{on : isActive}">
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
             <li v-on:click="toggle" :class="{on : isActive}">
              <router-link to="" title="Fundamentals (Middle class)">Vue.js (Middle class)</router-link>
              <ul>
                <li><router-link to="/vueCLI" title="VuE CLI">Vue CLI</router-link></li>
                <li><router-link to="/singleFile" title="Single-file Component">Single-File Component</router-link></li>
              </ul>
            </li>
            <li><router-link to="" title="고급">고급</router-link></li>
            <li><router-link to="/practice" title="실전">실전</router-link></li>  
          </ul>
        </nav>    
      </section>
      <section id="content">
        <article>
          <h3 class="title">Single-File Component (CLI)</h3>
          <p class="notice">
            싱글 파일 컴포넌트 체계는 .vue 파일로 프로젝트 구조를 구성하는 방식을 말함
          </p>
        </article>
        <article>
          <h3>CLI 에서 script 사용법</h3>
          <p>CLI에서 사용하는 script 방법을 설명 (cdn 방식으로 하면 에러 발생)</p>
          <h4>HTML</h4>
          <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span>&#123; &#123;&nbsp;str&nbsp; &#125; &#125;<span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>
          <h4>Script</h4>
          <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;data:&nbsp;<span style="color:#ff3399">function</span>(){</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ff3399">return</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;str&nbsp;:&nbsp;<span style="color:#ffd500">'hi'</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">}</div></pre></td></tr></table></div>
        </article>
        <article>
          <h3>CLI 에서 컴포넌트 등록하기</h3>
          <h4>HTML</h4>
          <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">app-header</span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">app-header</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>
          <h4>Script</h4>
          <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">import</span>&nbsp;AppHeader&nbsp;<span style="color:#ff3399">from</span>&nbsp;<span style="color:#ffd500">'./components/AppHeader.vue'</span>;</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">export</span>&nbsp;<span style="color:#ff3399">default</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;components:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd500">'app-header'</span>&nbsp;:&nbsp;AppHeader</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">}</div></pre></td></tr></table></div>
        </article>
      </section>
    </section>
    </main>
</template>

<script>

</script>

<style>

</style>