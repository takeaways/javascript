/*
프로토타입

자바스크립트는 클래스가 아닌 프로토타입 기반의 객체지향 언어입니다.

설계도(클래스) ====> 인스턴스 (프로토 타입 공유한다)
+ 총이 어디있는지 적어둔다.
\
\
\
 [총] (프로토 타입)
*/


//생성자 함수
function Sally(){
  this.dream = "지구정복";
  //프로토 타입 constructor에 Sally 를 가지고 있다
}

Sally.prototype.weapon = "총";
var sally1 = new Sally();
/*
프로토 타입 체인

*/

//원시형 데이터는 생성자에서 ㅊ초기화를 해주고
//메서드는 변화가 별로 없는 부분이기 때문에 프로토 타입에 정의 해준다
function Brown(){}
Brown.prototype.method = function(){}

var b1 = new Brown();
var b2 = new Brown();





///상속하기위해서
function Person(){
  this.dream ="지구정복";
}

Person.prototype.weapon = "광선검"

function Gom(){
  Person.apply(this);
  this.mask = "mask";
}
