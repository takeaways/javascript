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
       - 렌터링 엔지
         - 실제로 화면을 표현을 하는 부분
         - HTML해석, JS 해석기, 통신
         - How Browser works... 자료 읽고 분석 10년 전, 모던 웹 브라우저 들여다보기
