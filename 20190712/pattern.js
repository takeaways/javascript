/*
메서드 빌리기

함수도 값이기 때문에 다른객체에서 메서드를 가져와 자신의 것처럼 사용할 수 있습니다.

몽키패치!! 다른 함수를 빌릴때를 말한다.
믹스인! 한 객체의 멤버를 다른 객체에게 넘겨주거나 두개의 객체를 하나로
        합치는 것을 믹스인 이라고 합니다.
         mixin = {...obj1, ...obj2};


덕타이핑,
네임스페이스
모둘
체이너블 메서드를


*/

function Mother(){
  this.string = 100;
}

Mother.prototype.smash = function(){
  console.log("smash!!!");
}

function Father(){
  this.int = 100;
}

Father.prototype.fire = function(){
  console.log("Fire!!");
}

function Son(){
  Mother.call(this);
  Father.call(this);
}

Son.prototype = {...Mother.prototype, ...Father.prototype};
