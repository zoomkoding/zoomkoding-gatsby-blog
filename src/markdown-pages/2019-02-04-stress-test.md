---
title: (HisTime) Nodejs 서버 테스트하기, Artillery 사용법 - 스트레스 테스트
layout: post
date: '2019-02-04 02:00:00'
author: 줌코딩
tags: artillery nodejs-test server-test 
cover: "/assets/instacode.png"
categories: nodejs histime
---

## 배경

이제 나름 끝났다 생각하고 서버에 올리면 다인 줄 알았다.

근데 막상 서버 올렸는데 터지면 어떡하지!? 하는 걱정이 생겨났다.

결국 민수형 도움으로 찾게 된 Artillery를 이용해 서버 스트레스 테스트하게 되었다.

## Artillery

Artillery는 Node.js로 작성된 스트레스 테스트 도구이다. 

테스트를 가볍게 진행할 수도 있고 아니면 클라이언트의 시나리오를 짜서 서버를 테스트 해볼 수도 있다.

테스트를 위해서 json 파일을 만들어서 해당 루틴을 따라서 진행할 수도 있다.

자세한 설명은 다음 링크를 참조하면 좋을 것 같다!!

<https://blog.outsider.ne.kr/1238>

## 테스트하기

다음은 내가 테스트하기 위해 짰던 test.json 코드이다.

    {
        "config": {
            "target": "http://203.252.99.231",
            "phases": [
                {"duration": 60, "arrivalRate": 200}
            ],
            "defaults": {
                "headers": {
                    "User-Agent": "Artillery"
                }
            }
        },
        "scenarios": [
            {
                "name": "유저테스트",
                "flow": [
                    {"post":
                        {
                            "url": "/api/login",
                            "json": {"id": "[아이디]", "password": "[비밀번호]" }
                        }
                    },
                    {"post":
                        {
                            "url": "/api/show",
                            "json": {"student_id": "[학번]" }
                        }
                    },
                    {"post":
                        {
                            "url": "/api/make/fav_list",
                            "json": {"student_id": "[학번]" }
                        }
                    },
                    {"post":
                        {
                            "url": "/api/make/search/name",
                            "json": {"course_name": "[학번]" }
                        }
                    }
                ]
            }
        ]
    }

여기서 target은 해당 ip고 duration은 테스트 시간, arrivalRate은 초당 테스트 수, scenarios의 flow는 테스트 진행 시나리오를 의미한다.

    artillery run test.json
    
테스트 시작!

## 일차 테스트 결과 및 대응

이를 진행하면서 여러가지 문제를 발견했다. 

일단 유저 두명 로그인에도 다음과 같은 에러를 보여주면서 서버가 꺼진다.

### 1. Directory Listing Denied

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-2.png)
￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-1.png)

여기서 말하는 **디렉토리 리스팅이란**

취약한 서버 설정으로 브라우징 하는 모든 파일들을 보여준다. 
많은 경우에 디렉토리의 목록을 보여주는 것이 보안에 직결되는 문제는 아니지만 만약 해당 파일 저장과 열람이 가능하다면 이에 대한 이야기는 달라질 것이다. 

개인정보 유출 및 스크립트 유츨의 위험이 매우 크다.

나무 위키에 의하면

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-3.png)

**예상**

즉, 우리가 너무 많은 리퀘스트를 보내면 수간적으로 우리 IP 대역이 디렉토리 리스팅을 시도하는 것으로 판단하고 차단 당하는 것이 아닐까 싶다!!

이를 막기 위한 수단이지 않을까 싶다.**(이 판단은 잘못되었다. 히즈넷은 초당 100개 request도 차단하지 않는다)**


### 2. RAM 메모리 부족

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-4.png)

서버가 에러로 꺼졌는데도 RAM이 점점 차오르는 것을 볼 수 있었다.

htop을 찍어보니 background에 계속해서 phantom-prebuilt 같은 친구들이 돌고 있었다.

**예상**

로그인 할 때 마다 쌓였기 때문에

Spookyjs에 object 생성 후 삭제되지 않아 매번 종료되지 않은 크롤링 object가 남아 있는 것이라 예상했다.

### 대응

Spookyjs를 포기하기로 했다. 

아무리 내가 마주한 문제들에 대해서 답도 없고 현재 모듈이 0.2 버전이고 4년 전에 유지보수를 중단한 모듈을 계속 사용할 수 없었다.

그래서 찾은 친구가 구글에서 만든 puppeteer이다. 

이 훌륭한 크롤러로 로그인 코드를 다시 짜기 시작했다.

## 이차 테스트 결과 및 대응

일단 로그인만 테스트 해보았다.

### 로그인 초당 5명 20초 일 때

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-5.png)

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-6.png)

로그인 실패하는 것 없이 꽤 무난하게 통과한다!!

### 로그인 초당 10명 20초 일 때

초반에는 버티는 듯했으나 시간이 갈 수록 터져버렸다.

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-7.png)

램 사용량이 터졌고

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-8.png)

이러한 메세지와 함께 피씨가 먹통이 되버렸다...

### 디비 쿼리 초당 200개 테스트

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-9.png)

￼![그림](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/stress-test-10.png)

무난히 성공!!

### 대응

동시 로그인이 문제인데 이를 위해서 RAM 메모리가 커지면 나을지 RAM을 추가로 달기로 했다.

## 후기

이 테스트를 진행하지 않았다면 정말 말도 안되는 성능으로 출시해버릴뻔 했다.

이러한 테스트를 미리 진행하는 것은 매우 중요하구나를 느끼면서 테스터를 만들어준 개발자에게 감사하다!

