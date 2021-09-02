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
          <h3>Vue Components</h3>
          <p>
            컴포넌트는 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능, 컴포넌트 기반으로 화면을 개발하게 되면 코드의 재사용성이 올라가고 빠르게 화면을 제작할 수 있음
          </p>
          <section>
            <article>
              <h4>컴포넌트 생성코드 형식</h4>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%">Vue.component(<span style="color:#ffd500">'app-header'</span>,&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;template:&nbsp;<span style="color:#ffd500">'&lt;h1&gt;Header&nbsp;Component&lt;/h1&gt;'</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">});</div></pre></td></tr></table></div>
              <p>위에서 등록한 컴포넌트를 화면에서 표시하ㅕ면 아래와 같이 컴포넌트 태그(컴포넌트 이름)을 추가</p>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"app"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">app-header</span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">app-header</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>
            </article>
            <article>
              <h4>컴포넌트 등록방법 (전역 컴포넌트)</h4>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">//&nbsp;전역&nbsp;컴포넌트&nbsp;등록</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">Vue.component(<span style="color:#ffd500">'app-header'</span>,&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;template:&nbsp;<span style="color:#ffd500">'&lt;h1&gt;Header&nbsp;Component&lt;/h1&gt;'</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">});</div></pre></td></tr></table></div>
            </article>
            <article>
              <h4>컴포넌트 등록방법 (지역 컴포넌트)</h4>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">//&nbsp;지역&nbsp;컴포넌트&nbsp;등록</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">var</span>&nbsp;appHeader&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;template:&nbsp;<span style="color:#ffd500">'&lt;h1&gt;Header&nbsp;Component&lt;/h1&gt;'</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">new</span>&nbsp;Vue({</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;components:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd500">'app-header'</span>:&nbsp;appHeader</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">})</div></pre></td></tr></table></div>
            </article>
          </section>
          <h3>컴포넌트 통신 방식</h3>
          <p>
            뷰 컴포넌트는 각각 고유한 데이터 유효 범위를 갖습니다. 따라서, 컴포넌트 간에 데이터를 주고 받기 위해서는 규칙이 존재
          </p>
          <section>
            <article>
              <h4>컴포넌트 통신 규칙</h4>
              <div class="explanation">
                <ul>
                  <li>프롭스 속성 : 상위에서 하위로 데이터를 내려줌</li>
                  <li>이벤트 발생 : 하위에서 상위로 이벤트를 올려줌</li>
                </ul>
              </div>
            </article>
          </section>  
          <h3>Props 속성</h3>
          <p>
            컴포넌트 간에 데이터를 전달할 수 있는 컴포넌트 통신 방법, 프롭스 속성을 기억할 때는 상위 컴포넌트에서 하위 컴포넌트로 내려보내는 데이터 속성으로 기억하면 쉬움
          </p>
          <section>
            <article>
              <h4> 프롭스 속성(props)</h4>
              <p>
                props 속성을 사용하기 위해서는 하위 컴포넌트의 컴포넌트 내용과 상위 컴포넌트의 템플릿에 각각 코드를 추가해줘야 함
              </p>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">//&nbsp;하위&nbsp;컴포넌트의&nbsp;내용</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">var</span>&nbsp;childComponent&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;props:&nbsp;[<span style="color:#ffd500">'프롭스&nbsp;속성&nbsp;명'</span>]</div><div style="padding:0 6px; white-space:pre; line-height:100%">}</div></pre></td></tr></table></div>

              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">&lt;!--&nbsp;상위&nbsp;컴포넌트의&nbsp;템플릿&nbsp;--&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"app"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">child-component</span>&nbsp;<span style="color:#a8ff58">v-bind:프롭스</span>&nbsp;<span style="color:#a8ff58">속성</span>&nbsp;<span style="color:#a8ff58">명</span>=<span style="color:#ffd500">"상위&nbsp;컴포넌트의&nbsp;data&nbsp;속성"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">child-component</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>
            </article>
            <article>
              <h4>props 속성 코드 예시</h4>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">//&nbsp;하위&nbsp;컴포넌트&nbsp;:&nbsp;childComponent</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">var</span>&nbsp;childComponent&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;props:&nbsp;[<span style="color:#ffd500">'propsdata'</span>],</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;template:&nbsp;<span style="color:#ffd500">'&lt;p&gt;{{&nbsp;propsdata&nbsp;}}&lt;/p&gt;'</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">//&nbsp;상위&nbsp;컴포넌트&nbsp;:&nbsp;root&nbsp;컴포넌트</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">new</span>&nbsp;Vue({</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;el:&nbsp;<span style="color:#ffd500">'#app'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;components:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd500">'child-component'</span>:&nbsp;childComponent</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;data:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;message:&nbsp;<span style="color:#ffd500">'hello&nbsp;vue.js'</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">})</div></pre></td></tr></table></div>

              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"app"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">child-component</span>&nbsp;<span style="color:#a8ff58">v-bind:propsdata</span>=<span style="color:#ffd500">"message"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">child-component</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#999999">&lt;!--&nbsp;위의&nbsp;출력&nbsp;결과는&nbsp;hello&nbsp;vue.js&nbsp;--&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>
            </article>
          </section>
          <h3>이벤트 발생</h3>
          <p>
            이벤트 발생은 컴포넌트의 통신 방법 중 하위 컴포넌트에서 상위 컴포넌트로 통식하는 방법
          </p>
          <section>
            <article>
              <h4> 이벤트 발생 코드 형식</h4>
              <p>하위 컴포넌트의 메서드나 라이프 사이클 훅과 같은 곳에 아래와 같이 코드를 추가</p>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">//&nbsp;하위&nbsp;컴포넌트의&nbsp;내용</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#4be6fa">this</span>.$emit(<span style="color:#ffd500">'이벤트&nbsp;명'</span>);</div></pre></td></tr></table></div>
              <p>그리고 나서 해당 이벤트를 수신하기 위해 상위 컴포넌트의 템플릿에 아래와 같이 구현</p>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">&lt;!--&nbsp;상위&nbsp;컴포넌트의&nbsp;템플릿&nbsp;--&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"app"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">child-component</span>&nbsp;<span style="color:#a8ff58">v-on:이벤트</span>&nbsp;<span style="color:#a8ff58">명</span>=<span style="color:#ffd500">"상위&nbsp;컴포넌트의&nbsp;실행할&nbsp;메서드&nbsp;명&nbsp;또는&nbsp;연산"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">child-component</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>
            </article>
            <article>
              <h4>이벤트 코드 예시</h4>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">//&nbsp;하위&nbsp;컴포넌트&nbsp;:&nbsp;childComponent</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">var</span>&nbsp;childComponent&nbsp;<span style="color:#aaffaa"></span><span style="color:#ff3399">=</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;methods:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;sendEvent:&nbsp;<span style="color:#ff3399">function</span>()&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">this</span>.$emit(<span style="color:#ffd500">'update'</span>);</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#999999">//&nbsp;상위&nbsp;컴포넌트&nbsp;:&nbsp;root&nbsp;컴포넌트</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#ff3399">new</span>&nbsp;Vue({</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;el:&nbsp;<span style="color:#ffd500">'#app'</span>,</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;components:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd500">'child-component'</span>:&nbsp;childComponent</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;},</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;methods:&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;showAlert:&nbsp;<span style="color:#ff3399">function</span>()&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#4be6fa">alert</span>(<span style="color:#ffd500">'event&nbsp;received'</span>);</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:100%">})</div></pre></td></tr></table></div>
              <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"app"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%">&nbsp;&nbsp;<span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">child-component</span>&nbsp;<span style="color:#a8ff58">v-on:update</span>=<span style="color:#ffd500">"showAlert"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">child-component</span><span style="color:#f0f0f0">&gt;</span></div><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></pre></td></tr></table></div>
            </article>
            <p>
              설명: 하위 컴포넌트인 "childComponent"에서 "sendEvent()" 메서드가 실행되면 "update"라는 이벤트가 발생되고, 이를 상위 컴포넌트인 루트 컴포넌트의 "v-on" 디렉티브로 이벤트를 받아 "showAlert()" 메서드를 실행
            </p>
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