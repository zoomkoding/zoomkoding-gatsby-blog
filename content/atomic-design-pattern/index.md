---
emoji: 💅
title: Atomic Design Pattern이 뭐지?
date: '2020-07-09 20:00:00'
author: 정진혁
tags: javascript 디자인패턴 우아한테크캠프 atomicdesign
categories: 웹공부
---

## 🤔 목적

**Atomic Design Pattern을 본격적으로** 적용하기에 앞서 글을 적어보려고 한다.

이 패턴을 설명하는 여러 블로그글을 가볍게 훑어보고 글들 마다 있는 아래 그림을 보면서 작은 단위의 컴포넌트인 원자를 잘 만들어서 개발하는 느낌이구나하고 넘어갔다.

![Atomic-design-pattern-1](./atomic-design-pattern-1.png)

하지만 막상 구현하기 앞서 여러 글들을 진득하게 앉아서 읽어보니 중점적으로 신경써야하는 부분이 있었다.

**그리고 가장 많이 생각 났던 것은 [피키](https://zoomkoding.github.io/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85/%ED%9A%8C%EA%B3%A0/2020/03/25/start-up-app-development.html)를 개발할때 디자이너님과 함께 적용시켜봤으면 너무 좋았을 것 같은 방식이었다.**

우아한테크캠프의 프로젝트를 진행하면서 잘 배워서 언젠가 하게 될 **또 다른 피키**에 잘 적용시켜보자.

## 📒 참고 글

Brad Frost의 개념적인 내용에 Danilo Woznica의 글을 참고에서 개발에 필요한 구체적인 내용을 담아보았다.

- [atomic design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Atomic Design and ReactJS by Danilo Woznica](https://danilowoz.com/blog/atomic-design-with-react)

## ⚛️ Atomic Design Pattern

> _Atomic Design helps to build consistent, solid and reusable design systems._

이 개발 방식은 사실 개발에만 적용되는 개념이 아니라 디자인에도 적용되는 설계 패턴이다.

말 그래도 작은 단위의 컴포넌트를 재사용성이 강하고, 단단하게 잘 설계함으로서 점진적으로 지속적으로 개발하기 용이하게 하는 방식이다.

웹 프론트 개발에 가장 많이 쓰이는 프레임워크인 Vue, React 모두 컴포넌트 단위로 개발을 진행하기 때문에 이러한 컴포넌트 중심 설계 패턴이 더욱 주목 받게 되었다.(Flutter 또한 마찬가지이다!)

그렇다면 각 컴포넌트의 역할은 무엇이고 구체적으로 어떤 부분에 집중해서 개발해야 할지 보도록 하자.

### 🍅 Atom(원자)

- #Generic #Abstract
- 원자은 진짜 말그대로 가장 작은 단위의 컴포넌트이다.
- 원자는 어떠한 context가 주어지든지 이에 해당하는 컴포넌트가 생성될 수 있어야 한다.
- 때문에 다양한 state를 다양하게 가지고 있어야하며 추상적이지만 최대한 포용할 수 있게 되어야 설계 되어야 한다. Ex) button: disabled, hover, different sizes, etc.
- **원자는 마진이나 위치값을 가지고 있지 않는다.**

### 🥫 Molecule(분자)

- #LittleComplex
- 원자를 엮어 조금 복잡한 단위의 분자가 생성된다.
- 분자는 분자만의 프로퍼티를 가지고 있을 수 있고 이를 활용해 원자에 기능을 만들어 줄 수도 있다.
- **분자가 원자의 위치값을 지정하기도 한다.**

### 🍝 Organism(유기체)

- #MoreComplex
- 유기체는 분자를 엮어 만들어서 생성되고 **때로는 분자가 되지 않은 원자가 엮이기도 한다**.
- 유기체가 완성되면 컴포넌트가 최종 모습을 가지게 된다.
- **하지만 여전히 contents에 따라 최대한 재사용성 높게 개발하는 것이 중요하다!**
- **유기체는 분자와 원자의 위치값을 조정한다!**

### 📄 Template(템플릿)

- #Layout #NoStyling
- 템플릿은 만들어진 유기체와 컴포넌트의 **positions, placements**을 정해주는 역할을 한다.
- 단, 템플릿에는 Styling이나 Color는 들어가지 않는다.
- **템플릿의 역할은 페이지의 그리드를 정해주는 역할 뿐이다.**

### 🍱 Page(페이지)

- #Final
- 페이지는 템플릿을 이용해서 각 그리드에 컴포넌트를 그려서 디스플레이한다.

## 🤓 특징

- 개발만 이렇게 진행되서는 안된다.(디자인도 이 원칙에 맞춰서 진행되어야 한다!)
- 잘만 구현된다면 계속 가져다 쓸 수 있는 정말 좋은 Legacy Code가 생겨나게 된다!
- 리액트를 사용한다면 [스토리북](https://storybook.js.org/)을 함께 적용하게 되면 더 큰 효과를 낳을 수 있다.
- 초기 개발 시간이 길지 모르기만 작은 단위의 Component를 잘 설계해놓으면 중장기적으로 개발 기간을 단축할 수 있다 😎

## 👹 적용기

구조와 사용 방법은 비슷했으나 내부 코드가 똥이 많았다..💩ㅋㅋ

이번 프로젝트는 자바스크립트만 사용하다보니 컴포넌트화 하는데 어려움이 조금 있었다.

이를 위해 [How I converted my React app to VanillaJS](https://medium.com/hackernoon/how-i-converted-my-react-app-to-vanillajs-and-whether-or-not-it-was-a-terrible-idea-4b14b1b2faff)를 참고 했다.

다음 프로젝트에는 css와 javascript에 대해 좀더 공부해서 내부 코드도 잘짜봐야겠다.

## 📽️ 프로젝트 깃헙 레포지토리

[[우아한테크캠프] 배민상회 회원가입/로그인 구현 프로젝트](https://github.com/woowa-techcamp-2020/market-8/tree/develop/client/src/components)

```toc

```
