# CLASS

1. 객체 지향 프로그래밍의 대명사
   - 객체지향 프로그래밍 언어 (OOP)

- OOP에서 Object(객체)는
  - 자바스크립트의 Object가 아닙니다.
  - 개념적, 사상적 접근입니다.
  - 형체, 실체가 없습니다.
- 행위와 속성으로 객체의 특성을 표현합니다.
- 행위
  - 먹다, 마시다와 같은 동적인 모습입니다.
- 속성
  - 밥을 먹다, 물을 마시다와 같은 행위의 대상이 속성입니다.

2. 객체의 구체화

- 객체를 코드로 구체화하면
- 객체는 클래스가 된다.
- 행위는 메소드가 되며
- 속성은 프로퍼티가 됩니다.

- 클래스에
  - 메소드와 프로퍼티를 작성합니다.
  - 클래스 자체로는 사용할 수 없으며
  - 인스턴스로 생성해야 사용할 수 있습니다.

![Class](https://github.com/nomadGeonilJang/javascript/blob/master/Class/Images/class.png?raw=true)

## Class 선언문

1. Syntax

```js
class Point {
  getPoint() {
    return 100;
  }
}
const obj = new Point();
console.log(obj.getPoint());
```

## Class 작성기준

1. strict모드가 기본이다.
2. function 키워드를 사용하지 않고 메소드 작성

### computed name

1. 메소드 이름을 조합하여 사용

```js
const name = "Point";
class Point {
  ["get" + name](add) {
    return add ? 100 : 50;
  }
}
log(Point["get" + name](true));
```

2. prototype sharing

- **proto** 를 이용찬 참조가 계속 이루어 진다.

### constructor, constructor 반환

1. new 연잔사를 통해 class의 constructor를 호출 한다.

### getter, setter, static, 호이스팅

1. getter는 메소드를 호출하여 값을 구합니다.

- 메소드를 호출할 떄는 name()처럼 소괄호를 작성하지만
- getter는 소괄호를 작성하지 않고 name만 작성합니다.
- 파라미터를 사용할 수 없습니다.

```js
class Point {
  constructor(point) {
    this.point = point;
  }
  get getPoint() {
    return this.point;
  }
}
const obj = new Point(100);
console.log(obj.getPoint); // 100
```

2. setter 메소드를 호출하여 값을 구합니다.

- 메소드를 호출할 떄는 name()처럼 소괄호를 작성하지만
- setter 소괄호를 작성하지 않고 name만 작성합니다.
- 파라미터를 사용할 수 없습니다.

```js
class Point {
  set setPoint(point) {
    this.point = point;
  }
}
const obj = new Point(100);
obj.setPoint = 1000;
```

3. static 메소드를 호출하여 값을 구합니다.
4. 호이스팅

- 클래스는 호이스팅 되지 않습니다.

### 상속 extends, 메소드 오버라이딩

1. 포함시킨 클래스의 메소드와 프로퍼티를 내 것처럼 사용할 수 있습니다.

- super, sub
