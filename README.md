# gatsby-starter-zoomkoding
<p>
  <img alt="Version" src="https://img.shields.io/github/v/release/zoomKoding/zoomkoding.dev?include_prereleases&sort=semver&label=version">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/zoomkoding/zoomkoding.dev.svg?color=08CE5D&label=%E2%AC%86%20commits&style=flat-square">
  <img alt="React" src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&logo=React&logoColor=white&color=61dafb">
  <img alt="GitHub" src="https://img.shields.io/github/license/zoomkoding/zoomkoding.dev?style=flat-square&label=%F0%9F%93%9C%20license&color=08CE5D">
</p>

## 🤓 소개
Jekyll 테마로 만든 블로그를 커스터마이징 하거나 기능을 추가하는 것은 한계를 느끼게 되었습니다. 자연스럽게 블로그를 직접 디자인해보고 만들어보고 싶은 마음을 가지게 되었고 Gatsby를 활용하여 블로그 테마를 만들게 되었습니다. 이 블로그 테마가 여러분의 스토리를 풀어갈 좋은 공간이 될 수 있기를 바랍니다!

## 🚀 시작하기

아래 과정을 진행하면 현재 블로그를 로컬 환경에서 실행할 수 있습니다. **Github Page**나 **Netlify**에 배포하는 방법은 아래 [배포하기](#-배포하기)를 참고해주세요.

### 🔧 설치하기
먼저, 터미널에 아래 명령어를 입력해 gatsby-starter-zoomkoding을 clone합니다.

```bash
# Clone this repository
$ git clone https://github.com/cobidev/gatsby-starter-zoomkoding

# Go into the repository
$ cd gatsby-starter-zoomkoding

# Remove current origin repository
$ git remote remove origin
```
<br/>

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
블로그의 title, description, author, social 정보를 입력합니다. (**title**은 블로그 상단에 보이는 블로그 이름을 나타냅니다.)

```js
module.exports = {
    title: '', // zoomkoding.dev
    description: '', // 줌코딩의 개발일기
    author: '', // zoomkoding
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
**description**은 자신을 설명하는 문구를 여러개 넣을 수 있습니다. bio에서 사용하는 **동영상을 수정**하고 싶다면 `src/assets/author.mp4`에 동영상을 삽입하면 됩니다.

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
            repo: '' // zoomkoding/gatsby-starter-zoomkoding
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

> **위 과정을 진행하시면서 실행하고 있는 프로그램에 변동사항이 바로 반영이 되지 않을 것이므로 재실행하셔서 결과를 확인해주세요!**
