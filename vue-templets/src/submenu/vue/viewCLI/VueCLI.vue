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
          <h3 class="title">Vue CLI </h3>
          <p class="notice">
            CLI(Command-Line Interface)는 명령어를 통한 특정액션을 수행하는 도구
          </p>
        </article>
        <article>
          <h3>CLI 버전 체크</h3>
          <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%">node&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">-</span>v</div><div style="padding:0 6px; white-space:pre; line-height:100%">npm&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">-</span>v</div></pre></td></tr></table></div>
        </article>
        <article>
          <h3>CLI 설치</h3>
          <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><pre style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%">npm&nbsp;install&nbsp;<span style="color:#0086b3"></span><span style="color:#ff3399">-</span>g&nbsp;@vue<span style="color:#0086b3"></span><span style="color:#ff3399">/</span>cli</div></pre></td></tr></table></div>
        </article>
        <article>
          <h3> Vue CLI 사용법</h3>
          <table class="default-table">
            <caption class="sr-only">Vue CLI 사용법</caption>
            <colgroup>
                <col style="width: 25%" />
                <col style="width: 75%" />
            </colgroup>
            <tbody>
                <tr>
                    <th>vue 파일생성</th>
                    <td>
                      <ul>
                        <li>파일명은 두단어 이상 연결하여 사용</li>
                        <li>파스칼표기법 사용(PascalCase)</li>
                        <li>예) MainHeader</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                    <th>기본태그 생성</th>
                    <td>
                      <ul>
                        <li>"<span class="red">vue</span>" 입력 후 탭키 클릭 (4.x 버전)</li>
                      </ul>
                    </td>
                </tr>
            </tbody> 
        </table>
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