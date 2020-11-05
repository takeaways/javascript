# You Don't Know Javascript

## 정체되지 않는 프론트엔드 개발자의 일하는 방식

1. 좋은 커밋 메세지 작성법
2. n npm // node version 관리
3. 좋거나 나쁘다 평가하지 않는다.
4. 무엇을 사용할지 고민인 된다면 많은 사람이 사용하는 것을 고르는 것도 자료찾기가 싶고 나름 괜찮은 방법이 될 수 있습니다.
5. 변수를 줄이고, 컴포넌트로 나눈다.
   - 하나의 컴포넌트는 하나의 기능만 한다.
6. 작성된 프로젝트를 망가트려 보려고 노력해본다. 사용자가 어떤 행위를 할지 모르기 때문에!

## 프레임보다 기본기

1. 정확한 용어
   - 영어 원문, 발음
2. 명확한 근거
   - 구체적은 근거를 한다
     - React vs Jquery
     - SSR..
     - 도입과 선택한 이유!
3. Web + HTML + CSS +JS
   - Web 브라우저
     - window:beforeunload
     - redirect - 서버에서 보내는 신호
     - AppCache - DNS -TCP (Network)
     - 💥 Process (domInteractive domComplete - readystatechange +
       domContentLoadedEvent - DOMContentLoaded 돔에 접근이 가능 + Load (window:load) - Image)
     - 브라우저 주요 구성 요소
       - 사용자 인터페이스
         - 웹 페이지를 제외 하는 나머지
           - 주소창, 뒤로가기 버튼, 북마크 등..
       - 브라우저 엔진
         - 사용자 인터페이스와 렌터링 엔진의 다리.
       - 렌터링 엔진
         - 실제로 화면을 표현을 하는 부분
         - HTML해석, JS 해석기, 통신
         - How Browser works... 자료 읽고 분석 10년 전, 모던 웹 브라우저 들여다보기
4. 렌터링 엔진의 동작과정 [점진적으로 보여준다. - 조금씩 자료를 보여주면서 사용자 경험을 높이고자 한다.] 한꺼번에 받아서!! 하는게 좋아!
   - HTML CSS JS파싱
     - 문서를 읽어 브라우저가 문법을 분석, 코드를 이해한다. DOM을 컨트롤 할 수 있기 때문에.
   - DOM CSSOM
     - 브라우저에서 사용할 수 있는 구조(객체)로 변환한다.
   - 🟢 렌터 트리 구축
     - DOM + CSSOM을 결합하여 화면에 그려낼 내용을작성한다. 즉, 어떤 엘리먼트에 어떤 스타일을 적용할 것인지 정해진다.
   - 🔴 렌터 트리 배치
     - Layout단계 각 요소의 크기와 위치를 계산한다.
   - 🟠 렌터 트리 그리기
     - Paint단계 요서를 실제 픽셀로 변환하여 그린다.
   - Composition 조합

### HTML

- 버전이 없는 Livin Standard로 변화
- 시대에 발맞추어 계속 변화함
- 의미를 가진 태그 대거 추가
  - section, header, footer, main, article, nav등
- 의미를 기술하기 위한 Microdata도 포한.

1. Semantically
   - HTML 엘리먼트와 속성, 속성값은 특정한 의미를 지니도록 정의되어있다.
2. Documents
