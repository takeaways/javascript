if(true){
  const name = "Sally";
  let age = 10;
  var friend = "brown";
}

// var a = 1;
// function fn(){
//   var a= 2;
//   return a;
// }

var a = 1;
var b = 10;
function outer(){
  //변수의 선언이 위로 올라가는 현상 --> 호이스팅이 발생한다
  var b = 2;
  return (function inner(){
    return a + b;
  })();
}


function outf(){


  function in1(){}
  var in2 = function(){}
  console.log(in1, in2);
}
