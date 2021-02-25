---
title: (프로그래머스) 2018 윈터코딩 Level 2 스킬트리
layout: post
date: '2019-06-19 02:00:00'
author: 줌코딩
tags:
cover: "/assets/instacode.png"
categories: 프로그래머스
---

## 문제

선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

**제한 조건**
>* 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
>* 스킬 순서와 스킬트리는 문자열로 표기합니다.
>* 예를 들어, C → B → D 라면 CBD로 표기합니다
>* 선행 스킬 순서 skill의 길이는 2 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
>* skill_trees는 길이 1 이상 20 이하인 배열입니다.
>* skill_trees의 원소는 스킬을 나타내는 문자열입니다.
>* skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.

**입출력 예**

| skill | skill_trees | return |
|:--------|:--------|:--------|
| CBD | [BACDE, CBADF, AECB, BDA] | 2 |

**입출력 예 설명**

BACDE: B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트립니다.
CBADF: 가능한 스킬트리입니다.
AECB: 가능한 스킬트리입니다.
BDA: B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트리입니다.

## 어떻게 접근할 것인가?
>* 일단 list로 skill의 각 원소가 실제 존재하는 index를 저장한다.
>* 만일 index가 존재하지 않으면 맥스 값을 준다.
>* 이 list가 sorting 되어있다면 answer의 값을 하나 추가해주어라.

### 코드

    def solution(skill, skill_trees):
        answer = 0

        for s in skill_trees :
            l = []
            for i in range(0, len(skill)) :
                index = s.find(skill[i])
                if index == -1 : l.append(1000)
                else : l.append(index)

            hello = False
            for i in range(1, len(l)) :
                if l[i] < l[i-1] : 
                    hello = True
                    break
            if hello == False : answer+=1
        return answer


    
## 느낀점
>* 파이썬을 배워서 처음으로 문제를 풀고 해결했다!
>* 파이썬의 여러 자료형과 용법이 익숙하지는 않지만 무언가 만들어낼 수 있음에 감사했다!
>* 좀더 익숙해질 때 까지 계속 파이썬으로 문제를 풀어봐야겠다!

