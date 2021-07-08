---
emoji: 🧢
title: 예쁜 Gatsby 테마로 나만의 개발 블로그 만들기
date: '2021-03-22 23:00:00'
author: 줌코딩
tags: blog gatsby theme
categories: 블로그
---

## 👋 소개

예쁘고 깔끔한 개발 블로그를 만들고 싶으신 개발자분들을 위해 만들게 된 블로그 테마입니다.🏅

## ✨ 기능

- 😛 미모지와 문자 애니메이션를 통한 자기 소개
- 💅 코드 하이라이팅 기능
- 🔍 글 목차 자동 생성(ToC)
- 💬 Utterances 댓글 기능 지원
- ⚙️ meta-config를 통한 세부 설정 가능
- 👨‍💻 About Page 내용 변경 가능
- 📚 Posts Page 자동 생성
- 🛠 sitemap.xml, robots.txt 자동 생성
- 📈 Google Analytics 지원
- 🧢 Emoji 지원
- 𝑓 Mathjax 지원

## 🚀 시작하기

아래 과정을 진행하면 블로그 테마를 로컬 환경에서 실행하고 배포할 수 있습니다.

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

## ⚙️ 기본 정보 입력하기

gatsby-meta-config.js라는 파일의 내용을 수정하면 블로그의 여러 내용을 변경할 수 있습니다!

### 1. default

블로그의 title, description, author, siteUrl, ogImage, social 정보를 입력합니다. (**title**은 블로그 상단에 보이는 블로그 이름을 나타냅니다.)

```js
module.exports = {
    title: '', // zoomkoding.dev
    description: '', // 줌코딩의 개발일기
    author: '', // zoomkoding

    siteUrl: '', // https://zoomkoding-gatsby-blog.netlify.com
    ogImage: '', // 공유할 때 보이는 미리보기 이미지
    social: {
        github: '', // https://github.com/zoomKoding
        linkedIn: '', // https://www.linkedin.com/in/jinhyeok-jeong-800871192
        email: '', // zoomkoding@gmail.com
    },
    ...
}
```

### 2. bio

**bio**는 홈페이지에 글쓴이를 소개하는 섹션에서 사용됩니다. 현재 영어와 한국어 두개 다 지원을 합니다.
**description**은 자신을 설명하는 문구를 여러개 넣을 수 있습니다. bio에서 사용하는 **미모지를 수정**하고 싶다면 `src/assets/author.mp4`에 동영상을 삽입하면 됩니다.

> 🤖 언어에 따라 description의 포맷이 달라지니 마음에 드시는 형태에 맞게 description을 작성해주세요.

```js
module.exports = {
    ...

    bio: {
        language: 'ko', // ko, en 선택 가능(영어 선택시 어순이 변경됩니다.)
        name: '', // 줌코딩
        description: ['이로운 것을 만드는', '배움을 좋아하는', '글로 나누길 좋아하는'],
    },
    ...
}
```

### 3. comments

**comments**는 포스팅에 댓글 기능을 제공할 서비스의 정보를 받습니다. 현재는 github 계정으로 댓글을 작성할 수 있는 utterances만 지원합니다.

> 🦄 utterances 사용방법은 [링크](https://utteranc.es/)를 참고해주세요!

```js
module.exports = {
    ...

    comments: {
        utterances: {
            repo: '' // zoomkoding/zoomkoding-gatsby-blog
        },
    },
    ...
}
```

## 👤 about page 만들기

about 페이지 또한 gatsby-meta-config.js를 통해 생성됩니다. about 하위에 있는 timestamps와 projects에 각각 정보를 입력하시면 about 페이지가 자동 생성됩니다.

### 1. timestamps

아래와 같이 각 timestamp 정보를 배열로 제공해주시면 입력하신 순서에 맞춰서 timestamps section에 보여지게 됩니다.

> links에 해당 정보가 없다면 생략해도 됩니다.

```js
module.exports = {
    ...

    about: {
        timestamps: [
            {
                date: '', // 기간
                activity: '', // 활동
                links: { // 링크가 없다면 지우셔도 됩니다.
                    post: '', // 블로그 포스팅 링크
                    googlePlay: '', // 구글플레이 링크
                    appStore: '' // 앱스토어 링크
                    github: '' // 깃헙링크
                },
            }
            ...
        ],
        ...
    },
    ...
}
```

### 2. projects

마찬가지로 각 project 정보를 배열로 제공해주시면 입력하신 순서에 맞춰서 projects section에 보여지게 됩니다.

```js
module.exports = {
    ...

    about: {
        ...

        projects: [
            {
                title: '', // 프로젝트 제목,
                description: '', // 설명,
                techStack: ['flutter', 'nodejs'], // 기술 스택
                thumbnailUrl: '', // 썸네일 이미지 주소
                links: { // 링크가 없다면 지우셔도 됩니다.
                    post: '', // 블로그 포스팅 링크
                    googlePlay: '', // 구글플레이 링크
                    appStore: '' // 앱스토어 링크
                    github: '' // 깃헙링크
                },
            },
            ...
        ],
        ...
    },
    ...
}
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

```toc

```
