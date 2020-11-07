# Generator

1. 중간에 멈췄다가 이어서 실행할 수 있는 함수
2. yield에서 반환값을 넘겨준다.

```js
function* generator() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
}

const gen = generator();
gen.next();
gen.next();
gen.next();
```

# 비동기 처리

```js
const ajaxCalls = () => {
  const r1 = fetch.get("https://api.github.com/users?since=1000");
  const r2 = fetch.get("https://api.github.com/users?since=1000");
};
const m = ajaxCalls();
/*
server request 보내고,
server response옵니다. 응답시간은 천차 만별

res1에는 request를 하자마자 바로 결과가 담긴다. 즉, response된 결과가 담기는게 아니라, 불필요한 데이터가 담긴다.

*/
```

```js
const fetchWrapper = (gen, url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => gen.next(res));

function* getUserInfo() {
  const [gen, from, nth] = yield;
  const req1 = yield fetchWrapper(
    gen,
    `https://api.github.com/users?since=${from || 0}`
  );

  const userId = req1[nth - 1 || 0].id;
  const req2 = yield fetchWrapper(gen, `https://api.github.com/user/${userId}`);
  console.log(req2);
}

const runGenerator = (generator, ...rest) => {
  const gen = generator();
  gen.next();
  gen.next([gen, ...rest]);
};
runGenerator(getUserInfo, 1000, 4);
/*


*/
```
