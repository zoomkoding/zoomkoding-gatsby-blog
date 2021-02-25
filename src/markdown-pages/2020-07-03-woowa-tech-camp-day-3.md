---
title: (우아한테크캠프 3기) Day3 JS 객체 지향형 프로그래밍 & 비동기 우아한 카페 만들기
layout: post
date: '2020-07-03 23:00:00'
author: 줌코딩
tags: 우아한테크캠프 OOP 카페만들기
cover: "/assets/instacode.png"
categories: web 우아한테크캠프
---

출근 시간이 9시가 아니라 9시 반이었기에 30분 더 자고 넉넉히 출발했다 ㅎㅎ

## 객체 지향형 프로그래밍

크롱님이 두시간 안에 끝내버렸던 객체 지향형 프로그래밍의 주 포인트는 세가지 였다.

- 의존성을 최대한 낮춰라
    - 의존성이 낮다는 말은 역할을 잘 분리 시켜놔야 한다는 말이다.
- 좋은 인터페이스를 구현해놔야한다. 그래야 나중에 호환이 좋다.
- 호출관계를 잘 정의하라
    - 연결은 되어있지만 최대한 느슨하게 해라

그리고 무엇보다 중요한 것은 개발 전에 노트북을 덮고 설계에 집중해야 한다는 것이다. 바로 개발에 들어가면 시행착오 속에서 엄청난 비용이 발생할 수 있다!

객체 지향을 좀 더 공부하고 싶다면 좋은 책을 한권 읽어 보는 것을 추천한다. (ex. 객체지향 프로그래밍에 대한 오해와 진실)

## 객체 지향형 프로그래밍 미션

[ClassifierAlpha과 PrimeAlpha 클래스 소스코드](https://gist.github.com/crongro/61d3126778c34c0667a5ed81af5d1a17)

두개의 클래스를 클래스가 아닌 함수로 구성하는 문제였다.

그리고 최대한 중복은 제거하고 코드를 개선할 수 있는 부분은 개선시켜야 했다.

### 내 과제 코드

```jsx
function isFactor (number, potentialFactor) {
    return number % potentialFactor == 0;
}
    
function factors (number) {
    const factorSet = new Set();
    for (let pod = 1; pod <= Math.sqrt(number); pod++ ) {
        if (isFactor(number, pod)) {
            factorSet.add(pod);
            factorSet.add(number / pod);
        }
    }
    return factorSet;
}

function equalSet (aset, bset) {
    if (aset.size!== bset.size) return false;
    for (const a of aset) if (!bset.has(a)) return false;
    return true;
}

function getPrime (number) {
    const primeSet = new Set([1, number]);
    return number > 1 && equalSet(factors(number), primeSet) ? 'prime' : '';
}

function getClass (number) {
    const currentFactor = factors(number);
    const sumWithoutNumber = sum(currentFactor) - number;
    if(sumWithoutNumber == number) return 'perfect';
    else if(sumWithoutNumber > number) return 'abundant';
    else return 'deficient';
}

function sum (factors) {
    return Array.from(factors).reduce((a, b) => a + b, 0);
}

function classify (number = 0) {
    return `${number} : ${getClass(number)}, ${getPrime(number)}\n`;
}

const result = [2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((a, b) => a + classify(b), '');
console.log(result);
```

### 회고

OOP 과제였는데 함수형 코드를 짜보라 하셨다. 크롱님은 모든 경우에 OOP가 좋은 것은 아니라고 하셨다. 상황에 맞춰 설계할 수 있는 능력을 키워야겠다. 

아직 객체 지향형에 대해서 익숙치 않은데 말씀 해주신 대로 책을 한번 읽어보자!

## 비동기

오후 시간 동안에는 비동기에 대해 배워보았다. 

비동기를 이해하고 있다면 다음 코드가 진행되면서 콜스택, 콜백큐와 이벤트 루프가 어떻게 동작하는지  구두로 설명할 수 있어야 한다고 말씀하셨다.

```jsx
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout(() => {
       setTimeout(() => {
         console.log("cb 2");
         fn(i)
        },1000);
       console.log("cb 1");
     }, 1000);
   });
}

asyncRun(baseData, idx =>console.log(idx))
```

이 부분의 설명이 어렵다면 [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) 를 보면 도움이 진짜 많이 될 것이다.

## 비동기 카페 만들기

비동기 동작 원리를 이해하기 위해 카페를 구현해보는 과제를 내주셨다. 

금요일 6시 안에는 얕은 수준의 설계 정도만 가능했기에 토요일을 써서 완성했다.

### 목표

- [구현 요구 사항](https://github.com/woowa-techcamp-2020/Woowa-Cafe/issues/1)대로 구현하기
- **최대한 설계를 잘해보고 설계대로 구현**해보자

### 클래스 관계도 그림

![그림](/assets/woowa-tech-camp-day-3-diagram.HEIC)

### 초기 클래스와 이벤트 설계

- [초기 클래스](https://github.com/woowa-techcamp-2020/Woowa-Cafe/issues/3)
- [초기 이벤트](https://github.com/woowa-techcamp-2020/Woowa-Cafe/issues/2)

### 결과물

[Woowa Cafe Repository](https://github.com/woowa-techcamp-2020/Woowa-Cafe)

### 회고

- 같이 설계하다 보니 낯선 부분이 있어서 깊이 몰입해서 설계하는데 어려움이 있었던 것 같다.
- 잘 설계해보고 싶었으나 구현하다보니 예상하지 못했던 변경 점들이 발견됐고 그것에 맞춰서 초기 설계가 많이 바뀌었다.
- 이벤트의 종류는 잘 정의된 것 같은데 Event Driven 하게 짜는게 익숙하지 못해서 짜기 전까지는 잘 동작이 그려지지 않았던 것 같다.
- 전반적인 그림을 그리며 각 클래스에 필요한 것들을 정의한 건 도움이 많이 됐던 것 같다.
- 다음 주 프로젝트 때는 같이 설계하는 과정이 조금 익숙해졌으면 좋겠다!ㅠㅎㅎ