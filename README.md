<h1 align="center">
  Zoomkoding Gatsby Blog
</h1>

<p align="center">
  <a href="https://github.com/zoomkoding/zoomkoding-gatsby-blog/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-0BSD-blue.svg" alt="Zoomkoding Gatsby Blog is released under the 0BSD license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="contributions welcome" />
</p>

**Demo Websites**: [**English**](https://zoomkoding.netlify.app) | [**Korean**](https://www.zoomkoding.com)

[**English README.md**](https://github.com/zoomkoding/zoomkoding-gatsby-blog/blob/master/README.en.md)

## 👋 소개

블로그를 직접 운영하면서 조금씩 그려봤던 이상적인 개발 블로그 테마를 Gatsby를 통해 만들어보게 되었습니다.  
이 테마가 블로그를 운영하고자 하시는 분들에게 자신의 이야기를 잘 담을 수 있는 공간이 되었으면 좋겠습니다.🙌

블로그 테마가 맘에 드셨다면 아래 과정을 통해 자신의 블로그를 만들어보시길 바랍니다!

> 혹시 만드시는 과정에서 궁금하신 점이나 어려움이 있으시다면 [이슈](https://github.com/zoomKoding/zoomkoding-gatsby-blog/issues/new)를 통해 문의 남겨주세요!  
> 최대한 빠르게 답변 드리겠습니다! 😀

## ✨ 기능

- 😛 미모지와 문자 애니메이션를 통한 자기 소개
- 🌘 다크모드 지원
- 💅 코드 하이라이팅 기능
- 🔍 글 목차 자동 생성(ToC)
- 👀 글 조회수 표시
- 💬 Utterances 댓글 기능 지원
- ⚙️ meta-config를 통한 세부 설정 가능
- 👨‍💻 About Page 내용 변경 가능
- 📚 Posts Page 자동 생성
- 🛠 sitemap.xml, robots.txt 자동 생성
- 📈 Google Analytics 지원
- 🧢 Emoji 지원
- 𝑓 Mathjax 지원

## 🚀 시작하기

Github Page나 Netlify 중 원하시는 배포 환경에 따라 다음 과정을 진행하시면 빠르게 블로그를 만드실 수 있습니다.

### 🦖 GitHub Page로 만들기

깃헙 페이지를 통해 블로그를 만드시다면 아래 글을 참고해주세요!  
[Gatsby 테마로 GitHub Blog 만들기](https://www.zoomkoding.com/gatsby-github-blog/)

### 🔧 Netlify로 만들기

아래 버튼을 활용하면 개인 계정에 `zoomkoding-gatsby-blog`를 사용하고 있는 Repository 생성과 Netlify에 배포를 동시에 진행할 수 있습니다. 이후에, 생성된 Repository를 clone합니다.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zoomkoding/zoomkoding-gatsby-blog)

### 🏃‍♀️ 실행하기

아래 명령어를 실행하여 로컬 환경에 블로그를 실행합니다.

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

<br/>

위 명령어가 문제 없이 실행됐다면 [http://localhost:8000](http://localhost:8000)에서 블로그를 확인하실 수 있습니다.

## ⚙️ 블로그 정보 입력하기

위의 과정을 다 진행하셨다면 배포와 개발 환경이 세팅이 끝났습니다! 🙌  
이제 블로그 정보를 입력하게 되면 나만의 블로그가 만들어지게 됩니다. 이를 위해 `gatsby-meta-config.js`에 있는 여러값들을 변경해줍니다.

### 1. 블로그 기본 정보

```js
title: '' // zoomkoding.com
description: '' // 줌코딩의 개발일기
language: 'ko', // 'ko', 'en' (영어 버전도 지원하고 있습니다.)
siteUrl: '' // https://www.zoomkoding.com
ogImage: '/og-image.png', // 공유할 때 보이는 미리보기 이미지로 '/static' 하위에 넣고 싶은 이미지를 추가하시면 됩니다.
```

### 2. 댓글 설정

블로그 글들에 댓글을 달 수 있길 원하신다면 utterances를 통해서 이를 설정하실 수 있습니다.

> 🦄 utterances 사용방법은 [링크](https://utteranc.es/)를 참고해주세요!

```js
comments: {
    utterances: {
        repo: '' // zoomkoding/zoomkoding-gatsby-blog
    },
}

```

### 3. 글쓴이 정보

글쓴이(author)에 입력하신 정보는 홈페이지와 about 페이지 상단에 있는 글쓴이를 소개하는 섹션인 bio에서 사용됩니다. **description**에 자신을 설명하는 문구들을 넣으면 애니메이션으로 보여지게 됩니다. bio에 들어가는 이미지를 바꾸시려면 `assets`에 원하시는 파일을 추가하시고 파일의 이름을 **thumbnail**에 넣어주시면 됩니다.(gif도 지원합니다!)

> 🤖 위에서 설정한 언어에 따라 description의 포맷이 달라집니다.

```js
author: {
    name: '정진혁',
    bio: {
      role: '개발자',
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: `zoomkoding.gif`,
    },
    social: {
      github: 'https://github.com/zoomKoding',
      linkedIn: 'https://www.linkedin.com/in/jinhyeok-jeong-800871192',
      email: 'zoomkoding@gmail.com',
    },
},
```

## 👤 about page 만들기

about 페이지 또한 gatsby-meta-config.js를 통해 생성됩니다. about 하위에 있는 timestamps와 projects에 각각 정보를 입력하시면 about 페이지가 자동 생성됩니다.

### 1. timestamps

아래와 같이 각 timestamp 정보를 배열로 제공해주시면 입력하신 순서에 맞춰서 timestamps section에 보여지게 됩니다.

> links에 해당 정보가 없다면 생략해도 됩니다.

```js
{
    date: '2019.12 ~ 2020.06',
    activity: '스타트업 인턴 진행 및 Picky 앱 개발',
    links: {
        post: '/start-up-app-development',
        googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
        appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
    },
},
```

### 2. projects

마찬가지로 각 project 정보를 배열로 제공해주시면 입력하신 순서에 맞춰서 projects section에 보여지게 됩니다.

```js
{
    title: '2020 우아한테크캠프 참여',
    description:
        '스타트업에서 앱 개발을 하면서 좋은 개발에 대한 갈증이 매우 크던 중에 좋은 기회를 잡게 되어 참여하게 되었습니다. 2달 간 몰입해서 좋은 사람들과 웹 개발을 경험하며, 많이 배우고 성장할 수 있었던 시간이었습니다.',
    techStack: ['react', 'nodejs'],
    thumbnailUrl: 'woowa-tech.png',
    links: {
        post: '/woowa-tech-camp-final',
        github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        demo: 'http://www.timetable.college',
    },
},
```

<br/>

그렇게 내용을 문제 없이 입력하셨다면 나만의 블로그가 탄생한 것을 확인하실 수 있습니다.🎉

> 변동사항을 실행 중인 블로그에서 확인하시려면 `npm start`를 통해 재실행해주세요!

## ✍️ 글 쓰기

본격적으로 블로그에 글을 쓰려면 `/content` 아래에 디렉토리를 생성하고 `index.md`에 markdown으로 작성하시면 됩니다.

> 이 때, 폴더의 이름은 경로를 생성하는데 됩니다.

### ℹ️ 메타 정보

index.md 파일의 상단에는 아래와 같이 emoji, title, date, author, tags, categories 정보를 제공해야 합니다.

> emoji는 글머리에 보여지게 되며, categories는 띄어쓰기로 나누어 여러개를 입력할 수 있습니다.

```
---
emoji: 🧢
title: Getting Started
date: '2021-03-22 23:00:00'
author: 줌코딩
tags: tutorial
categories: tutorial
---
```

### 🖼 이미지 경로

글에 이미지를 첨부하고 싶으시다면 같은 디렉토리에 이미지 파일을 추가하셔서 아래와 같이 사용하시면 됩니다.

```
![사진](./[이미지 파일명])
```

### 🔍 목차 생성

글의 우측에 목차가 보이기를 원하신다면 `index.md` 파일 맨 아래에 다음 내용을 추가하시면 자동으로 목차가 생성됩니다.

    ```toc
    ```

### 💡 버그 리포트 & 문의

만일 블로그 테마를 적용하시면서 도움이 필요하시거나 궁금하신 점이 있으시다면 [이슈](https://github.com/zoomKoding/zoomkoding-gatsby-blog/issues/new)로 남겨주시면 최대한 빠르게 답변 드리도록 하겠습니다!🙋‍♂️

```toc

```
