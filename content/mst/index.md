---
emoji: 💪
title: (알고리즘) Minimum Spanning Tree MST 알고리즘 - Kruskal 알고리즘
date: '2019-05-19 04:00:00'
author: 정진혁
tags: algorithm
categories: 알고리즘
---

## Minimum Spanning Tree란?

- Minimum Spanning Tree란 Undirected Graph 내에서 Cycle이 발생하지 않는 한도 내에서 모든 vertex가 연결되있는 tree 중 weight의 합이 가장 작은 tree를 의미한다.
- 그렇기 때문에 무조건 Edge의 갯수는 Vertex 갯수 - 1 개이다.

## 어떻게 찾지?

- 일단 edge의 set인 A를 만들자
- 처음에 A가 빈 상태에서 하나씩 넣은 거다.
- 여기서 중요한 것은 **safe edge**만 넣는다.
- Safe Edge란 A가 MST의 subset이라면 A를 추가해도 MST의 subset을 유지할 때의 Edge를 의미한다.

## Kruskal 알고리즘의 기본 개념

- 일단 Edge를 다 weight가 작은 순으로 나열한다.
- A라는 숲을 유지한 상태에서 safe edge를 찾아서 추가해준다.
- 즉 이 알고리즘은 **GREEDDDY**이다!!!

## Kruskal 알고리즘 스텝

1. edge을 weight 작은 순으로 sorting한다.
2. 가장 작은 애들을 하나씩 꺼내 cycle이 발생하면 제외, cycle이 안생기면 넣어준다.
3. edge 수가 V-1개 가 될 때까지 2번을 반복한다.

## Kruskal 알고리즘의 방법

- 일단 source, destination, weight이 담긴 vector를 sorting한다.
- Cycle이 생기는지 여부는 Union Find를 이용해서 찾도록 하자.

## Pseudo 코드

```cpp
MST-Kruskal(G,w)
    R = E;
    F = 0;
    While ( R is not empty)
        Remove the light edge, (u,v), from R;
        if((u,v) does not make a cycle in F) Add (u,v) to F;
    return F;
```

## C++ 코드

프로그래머스 고득점 kit 섬연결 문제 코드를 참고합시다.

## 느낀점

- 솔직히 별로 안어렵다고 생각했는데 Cycle 생기는지 여부구하는거 이해하려고 돌아돌아 Union Find까지 다녀왔다.
- 음 일단 많이 배울 수 있음에 감사하고 얼른 써먹어봐야겠다.
