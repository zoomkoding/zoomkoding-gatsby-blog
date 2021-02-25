---
title: (JS 다시 보기) 자바스크립트에서의 함수
layout: post
date: '2019-12-10 03:00:00'
author: 줌코딩
tags: javascript
cover: "/assets/instacode.png"
categories: javascript
---

## 함수 정의

함수를 정의하는 방법은 3가지가 있다. 예제를 통해 이해하면 빠르다.

### 1. 함수 선언문

함수명이 필수이며 함수명으로 함수를 호출한다.

    function add(x, y){
        return x + y;
    }

    console.log(add(3, 4)); //7

### 2. 함수 표현식

함수의 이름은 선택 사항이며, 보통 사용하지 않는다. 
해당 함수을 참조하는 함수 변수를 생성해준다. 호출시에는 함수 변수명으로 호출 가능하다. 이 때 유의할 점은 함수 이름으로는 호출이 불가능하다는 것이다.

    var add = function sum(x, y){
        return x + y;
    }

    console.log(add(3, 4)); //7
    console.log(sum(3, 4)); //Uncaught ReferenceError

함수 선언문으로 정의한 add()는 사실상 다음과 같은 형태로 변경된다.

    var add = function add(x, y){
        return x + y;
    }

### 3. Function() 생성자 함수로 함수 생성하기

Function()이라는 기본 내장 생성자로도 생성이 가능하다.

    var add = new Function('x', 'y', 'return x + y');
    console.log(add(3, 4)); //7

이건 잘 사용안되니 그냥 있다는 것만 알아두자.

### 함수 호이스팅

함수 호이스팅이란 **함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다는 것이다.**

    add(2,3); //5

    function add(x, y){
        return x + y;
    }

    add(3,4) //7

**호이스팅은 함수를 사용하기 전에 반드시 선언해야 한다는 규칙을 무시하므로 코드의 구조를 엉성하게 만들 수 있기 때문에 함수 표현식 사용을 권장한다.**

<br>

## 함수도 객체다

함수도 객체다. 객체이기 때문에 함수에 프로퍼티를 추가하는 것 또한 가능하다.

<br>

### 함수는 일급 객체이다.

일급객체란 다음과 같은 특징을 가지는 객체를 의미한다.

* 리터럴에 의해 생성
* 변수나 배열의 요쇼, 객체의 프로퍼티 등에 할당 가능
* 함수의 인자로 전달 가능
* 함수의 리턴값으로 리턴 가능
* 동적으로 프로퍼티를 생성 및 할당 가능

자바 스크립트에서 함수는 이러한 특징을 모두 가지는 입급 객체이다.

#### 변수나 프로퍼티의 값으로 할당

변수로 할당하는 것은 이미 경험해봤고 다음과 같이 프로퍼티 값이 될 수도 있다.

    var obj = {}
    obj.func = function(){
        return 200;
    }

#### 함수 인자로 전달

함수의 결과값으로 function을 전달할 수도 있다.

    var foo = function(func){
        func();
    };

    foo(function(){
        console.log("function passed as an argument");
    });

foo는 인자로 함수를 받는 함수이다. 위의 코드에서 foo를 호출할 때 익명함수를 인자로 넘겨주었다.

#### 리턴값으로 활용

함수는 다른 함수를 return 값으로 사용할 수 있다.

    var foo = function(){
        return function(){
            console.log("this function is used as a return value.")
        }
    }

위의 코드에서는 익명함수가 return 값으로 사용되었다.

<br>

### 함수 객체의 기본 프로퍼티

모든 함수의 부모 객체는 Function Prototype 객체이다.(크롬에서는 이 객체를 Empty() 함수라고 명하고 있다.)

이러한 Function 객체의 prototype은 모든 객체의 조상 격인 Object.prototype 객체를 가르키고 있는 것을 볼 수 있다.

#### length 프로퍼티

함수 객체에서 length는 인자의 개수를 의미한다.

#### prototype 프로퍼티

[[Prototype]]과 prototype 프로퍼티는 다르다.  
prototype 프로퍼티는 연결된 함수를 가르키고 있다. 이는 함수 생성시 만들어지고 프로토타입 객체의 constructor 프로퍼티는 자신과 연결된 함수를 가르킨다.
그리고 constructor 프로퍼티는 함수 객체를 가르키고 있어 서로 밀접하게 관련되어 있다.

## 함수의 다양한 형태

### 콜백 함수

이벤트 핸들러 용도로 많이 쓰인다.

    window.onload = function(){
        alert('This is the callback function.');
    };

### 즉시 실행 함수

함수를 정의함과 동시에 실행돠는 함수로 최초 한번의 실행만을 필요로 하는 초기화 코드 부분 등에 사용할 수 있다. 또, 즉시 실행 함수를 이용하면 함수 내부의 매개변수와 변수들의 유효범위를 지정할 수 있어서 jQuery에서 많이 사용된다고 한다.

    (function(name){
        console.log('This is the immediate function -> ' + name);
    })('foo');

### 내부 함수

함수 내부에 존재하는 함수를 의미한다. 내부 함수를 이용하면 함수 외부로 부터 접근을 막고 독립적인 헬퍼 함수를 구현하는 용도 등으로 사용된다.

내부함수는 **스코프 체이닝** 덕분에 자신을 둘러싼 외부 함수의 변수에 접근이 가능하다.

실행이 끝난 부모 함수의 변수를 참조하는 함수를 **클로저**라고 한다.

스코프와 클로저는 5장에서 다룰 예정이다.

<br>

## 함수 호출과 this

### arguments 객체

자바스크립트에서 인자 개수에 민감하게 반응하지 않는다. 원하는 인자보다 적게 호출할 수도 있고 많게 호출할 수도 있다.(적을 때는 남은 인자를 undefined로 두고 많을 때는 무시한다.)

인자 개수에 맞춰서 반응해줘야햘 때도 있는데 이를 가능하게 하는 것이 arguments 객체이다.

arguments는 **유사 배열 객체**이며 프로퍼티로 callee, length, 0, 1, ... 등을 가지고 있다.
이를 이용하면 arguments에 동적으로 반응할 수 있는 함수 구현이 가능하다.

    function sum(){
        var result = 0;
        for(var i = 0; i < arguments.length; i++){
            result += arguments[i];
        }
        return result;
    }

### 호출 패턴과 this 바인딩

함수에서 this를 사용할 때 this가 어떤 값과 바인딩 되는지 유의해야한다.

두 경우로 나누고 생각하면 된다.

1. 객체의 프로퍼티인 경우 : this = 객체
2. 그냥 메서드 호출인 경우 : this = window(전역)

**객체의 프로퍼티인 함수의 내부함수에서의 this도 메서드 호출로 보기 때문에 window와 바인딩 된다.**(이 문제를 해결하기 위해서는 프로퍼티 함수의 this를 다른 변수에 받아서 사용해야 한다. ex. var that = this)

### 생성자 함수를 호출할 때 this 바인딩

생성자 함수는 **대문자로 시작**한다. 기존 함수에 **new 연산자를 붙여서 호출**하면 해당 함수는 생성자로 동작한다.  
생성자 함수에서 this는 새로 생성될 빈 객체를 가르킨다. 생성자 함수는 따로 리턴 값이 없어도 만들어진 객체를 리턴한다.

객체 리터럴로 만든 객체와 생성자 함수로 만든 객체는 __proto__의 값이 다르다. 그 이유는 생성하는데 사용된 프로토타입 객체가 다르기 때문이다.

여기서 주의할 점은 **생성자 함수는 반드시 new**로 시작해야한다는 것이다.

new를 붙이고 안붙이고의 실수를 확인하기 위해 this가 함수에 속한 instance인지 확인해주기도 한다.

    function A(arg){
        if(!(this instanceof A)) return new A(arg);
        this.value = arg ? arg : 0;
    }

### call과 apply 메서드를 이용한 명시적인 this 바인딩

apply 함수를 이용하면 this를 특정 객체에 바인딩이 가능하다.

    function.apply(thisArg, argArray);

위의 함수 형태와 같이, 첫번째 인자로 오는 thisArg를 function의 this와 바인딩하고 argument를 배열의 형태로 입력 받는다.

    function Person(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    var foo = {};

    Person.apply(foo, ['zoomkoding', 26, 'man']);

call은 apply와 같은데 argument를 배열의 형태가 아닌 각각의 인자로 넘긴다.

    Person.call(foo, 'zoomkoding', 26, 'man');

### 함수 리턴

**자바스크립트에서 함수는 무조건 리턴 값이 있다.** 리턴 문이 없다면 undefined 값을 리턴한다. 생성자 함수에서 리턴이 없는 경우 생성자로 리턴한다.
다른 객체를 리턴하는 리턴문이 있다면 리턴문의 객체가 리턴된다. 하지만 리턴이 객체가 아닌 숫자, 불린, 문자열의 경우에는 무시된다.

참고서적 : 인사이드 자바스크립트 by 송형주, 고현준
