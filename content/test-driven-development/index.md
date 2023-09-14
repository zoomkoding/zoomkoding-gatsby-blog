---
emoji: 🛠
title: Test Driven Development란?
date: '2020-07-10 20:00:00'
author: 정진혁
tags: tdd 우아한테크캠프
categories: 웹공부
---

## 🧪 TDD란

Test Driven Development : 말그대로 **테스트가 이끌어 나가는 개발을 의미**한다.

개발을 진행하기 앞서 테스트를 먼저 만들거 테스트를 통과하기 위한 것들을 구현한다.

## 📒 참고글

[[Agile] TDD(테스트 주도 개발)란](https://gmlwjd9405.github.io/2018/06/03/agile-tdd.html)

[[번역]쉬운 테스트 주도 개발과 단위 테스트를 위한 5단계 방법론](https://medium.com/@cmygray/%EB%B2%88%EC%97%AD-%EC%89%AC%EC%9A%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A3%BC%EB%8F%84-%EA%B0%9C%EB%B0%9C%EA%B3%BC-%EB%8B%A8%EC%9C%84-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EC%9C%84%ED%95%9C-5%EB%8B%A8%EA%B3%84-%EB%B0%A9%EB%B2%95%EB%A1%A0-b82fea6c8d90)

## ❓ TDD는 언제 해야할까?

처음해보는 프로그램 주제일 때(나의 불확실성)

고객 요구조건이 바뀔 수 있는 프로젝트인 경우(외부적인 불확실성)

즉 불확실성이 높으면 테스트를 짠다.

결과가 명확하다면 TDD를 적용하지 않는게 좋다.

## 🤩 TDD를 잘하는 법

1. 도구나 규칙에 집착하지 말아라(TDD는 어떤 도구가 아니다.)
2. 상황에 맞게 적응적으로 진화적으로 접근하라
   1. 어떻게 하면 피드백을 더 많이 받을까를 계속해서 고민해보라
   2. 테스트 자체가 처음부터 완벽할 수 없다!
   3. 상황에 맞게 반복적으로 개선해나가자

## 🧠 테스트 코드를 잘 짜는 사고법

**비밀번호 강도 측정**이라는 예를 통해 과정을 살펴보자

### 1. 입력 출력 결정하기

구현을 고려하기 전에 입출력부터 생각해보자.

- 입력값: 비밀번호
- 출력값: Boolean(강도가 세면 true 아니면 false)

### 2. 함수 시그니처 선택하기

함수의 매개변수와 반환값을 정의한다.

```jsx
var strong = isStrongPassword('password string goes here');
```

### 3. 기능상 아주 작은 하나의 관점으로 판단하기

목표에 아주 조금 다가가기 위해 필요한, 최대한 **간단한 동작에 집중하라.**

내부 구현을 최대한 신경쓰지 말고 어떻게 동작하는지에만 집중하라.

비밀번호 강도를 생각해보면, 특수문자, 숫자, 길이, 등등 다양한 규칙들이 있을 것이다. 이 모든 것을 포함하는 테스트를 생각하는 건 당연히 어렵다!

비밀번호 강도에 관해 가장 단순한 규칙은 빈 문자열이다. 이건 매우 쉽다

**비밀번호가 비어있다면 출력값은 언제나 false여야 한다.**

### 4. 테스트 구현

함수의 한줄 한줄을 모른채 테스트 코드 만을 작성해보자.

```jsx
describe('isPasswordStrong', function () {
  it('should give negative result for empty string', function () {
    var password = '';
    var result = isPasswordStrong(password);
    expect(result).to.be.false;
  });
});
```

### 5. 코드 구현

이제 테스트를 통과할 수 있는 최소한의 코드만 작성한다.

```jsx
function isPasswordStrong(password) {
  if (!password) {
    return false;
  }
}
```

계속해서 비밀번호 강도 측정 함수를 개발하고 싶다면 3번부터 5번까지의 과정을 반복하면 된다.

이렇게 작은 절차를 반복하다보면 결국에는 좋은 결과에 이를 수 있을 것이다.

## 프로젝트 적용 가능 지점

다 적용하기 힘들것 같고 일단 일부분만 TDD하게 생각하면서 구현해보는 건 어떨까?

- Form Validation Func
- Login Validation Func

```toc

```
