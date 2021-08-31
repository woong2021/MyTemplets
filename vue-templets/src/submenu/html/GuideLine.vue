<template>
  <main>
    <h2>HTML5 &#38; CSS</h2>
    <section id="container">
      <section id="lnb">
        <p>HTML5 &#38; CSS</p>
        <ul>
          <li class="active"><router-link to="/GuideView" class="active">가이드라인</router-link></li>
          <li><router-link to="/html">HTML5</router-link></li>
          <li><router-link to="">CSS3</router-link></li>
          <li><router-link to="">활용</router-link></li>
        </ul>    
      </section>
      <section>
        <article>
          <h3 class="title">가이드라인 </h3>
          <p class="notice">
            해당 가이드라인은 주관적인 것이며 본인 스타일로 제작되었습니다.
          </p>
        </article>
        <article>
            <h3>VS CODE 세팅</h3>
            <section>
              <article>
                <h4>실시간 라이브 셋팅</h4>
                <div class="explanation">
                  상단 파일메뉴에서 <span class="red">" 자동저장 " </span>체크
                </div>
              </article>
               <article>
                <h4>탐색기 On / Off 단축키</h4>
                <div class="explanation">
                  <kbd>Ctrl</kbd> +
                  <kbd>B</kbd>
                </div>
              </article>
               <article>
                <h4>Full Reload 방지</h4>
                <div class="explanation">
                  하단 설정아이콘 클릭 후 설정 메뉴에서 <span class="red">" 확장 > Live Server Config > Settings: Full Reload " </span>체크
                </div>
              </article>
               <article>
                <h4>Extension</h4>
                <div class="explanation">
                  "htmltagwrap" 설치 후 영역 지정 후 <kbd>Ctrl</kbd> + <kbd>W</kbd> 로 사용
                </div>
              </article>
               <article>
                <h4>화면 텍스트 크기 변경</h4>
                <div class="explanation">
                  <ol>
                    <li>하단 설정아이콘 클릭 후 설정메뉴에서 <span class="red">"zoom"</span>검색</li>
                    <li><span class="red">"Mouse Wheel Zoom"</span> 체크</li>
                    <li>"<kbd>Ctrl</kbd> + 마우스 휠"로 텍스트 크기 변경</li>
                  </ol>
                </div>
              </article>
              <article>
                <h4>자동 줄바꿈</h4>
                <div class="explanation">
                  <ol>
                    <li>하단 설정아이콘 클릭 후 설정메뉴에서 <span class="red">"wordwrap"</span>검색</li>
                    <li>"wordwrap"를 <span class="red">On</span>으로 변경</li>
                  </ol>
                </div>
              </article>
            </section>
        </article>
        <article>
          <h3>HTML 표기법</h3>
          <table class="default-table">
            <caption class="sr-only">HTML 표기법 설명</caption>
            <colgroup>
              <col style="width: 25%" />
              <col style="width: 75%" />
            </colgroup> 
            <tbody>
              <tr>
                <th scope="row">Id 속성</th>
                <td>
                  <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">id</span>=<span style="color:#ffd500">"defaultTable"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span><span style="color:#f0f0f0">&lt;</span><span style="color:#f0f0f0">/</span><span style="color:#ff3399">div</span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                  <p>단어연결시 카멜케이스기법 사용</p>
                </td>
              </tr>
              <tr>
                <th>Class 속성</th>
                <td>
                  <div class="colorscripter-code" style="color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#272727;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#f0f0f0;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:100%"><div style="padding:0 6px; white-space:pre; line-height:100%"><span style="color:#f0f0f0">&lt;</span><span style="color:#ff3399">div</span>&nbsp;<span style="color:#a8ff58">class</span>=<span style="color:#ffd500">"default-table"</span><span style="color:#a8ff58"></span><span style="color:#f0f0f0">&gt;</span></div></div></td></tr></table></div>
                  <p>단어연결시 대쉬 사용</p>
                </td>
              </tr>
              <tr>
                <th> &lt; br &gt; 태그</th>
                <td>&lt;br&gt;태그는 사용을 자제 (<span class="red">반응형에 취약</span>)</td>
              </tr>
            </tbody>
          </table>
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