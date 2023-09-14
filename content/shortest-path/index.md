---
emoji: 💪
title: (알고리즘) Shortest Path 찾기 - Bellman-Ford, DAG, Dijkstara 알고리즘
date: '2019-05-09 02:00:00'
author: 정진혁
tags: algorithm
categories: 알고리즘
---

## Shortest Path

최단경로를 찾는 문제의 특징은 다음과 같다.

- Input : directed graph G = (V, E) with weight function w : E -> R
- S에서 D까지의 minimum weight을 가지는 path를 찾는 문제이다.
- Weight w(p) of path p : p로 가는 길에 있는 모든 edge weight의 합이다.
- u부터 v 까지의 shortest-path weight은 다음으로 표현한다
- S(u,v) = if path가 있으면 u부터 v까지 오는 path 중의 min . 없으면 무한대

## Variants

최단거리를 찾는 문제는 크게 4종류가 있다.

1. Single-source shortest path : 하나의 S에서 모든 vertex까지 최단거리
2. Single-destinations : 모든 vertex에서 하나의 D까지의 최단거리
3. Single-pair : 하나의 S로 부터 모든 하나의 D까지의 최단거리
4. All-pair : 모든 vertex의 서로간의 최단거리

1~3번 : Bellman-Ford, DAG, Dijkstara 알고리즘
4번 : Floyd 알고리즘

## 문제 특징

- Optimal substructure이 존재한다! 그러므로 Greedy Algorithm으로 접근 가능!
- Negative Cycle이 존재하면 절대 안돼! 왜냐하면 그럼 그 Cycle을 계속 돌면서 음의 무한대로 값이 떨어질 것이기 때문이다!

### shortest path란?

S(u,v) <= S(u,x) + S(x, v) 이다.
즉, 한번 거쳐가는 게 무조건 크거나 같다.

Shortest path는 Cycle이 없다.

## Single Source Shortest Path

먼저 하나의 Source를 가지는 문제를 풀어보자.

- 1개의 s에 대해서 모든 vertex v로 가는 최단경로를 찾는 문제이다.
- d[v] = S[s, v]를 의미
- 초기에 d[v]는 무한대인데 알고리즘을 돌면서 값이 줄어들 것이다.
- p[v] = 바로 이전 vertex를 의미한다.
- p를 이용해서 shortest-path tree를 만들 수 있다.

그럼 이번에는 코드를 봐보자

## 초기화 코드

```cpp
INIT-SINGLE-SOURCE(V, s)
    for each v <- V
        do d[v] = INFINITE
            p[v] = NIL
    d[s] = 0
```

모든 V에 있는 vertext까지의 거리를 무한대로 만들어주고 P를 초기화해준다.
그리고 시작점인 s의 거리만 0으로 만들어준다.

## Relaxation(짧은 길 찾기)

이것이 사실상 핵심이다!! 더 짧은 길이 발견되면 바로 환승하는 과정이다.

```cpp
Relax(u,v,w){
    if(d[v] > d[u] + w)
        then d[v] = d[u]+w;
                p[v] = u;
}
```

- u는 s와 v 사이에 vertex이고 w는 u와 v 사이의 weight이다.
- 만일 v까지 현재 최단 경로 d[v]보다 d[u]를 거치고 가는게 더 빠르면 환승한다.

## Bellman-Ford algorithm

이 알고리즘은 edge weight가 음수여도 할 수 있다.
그래도 여전히 negative-weight cycle은 안돼!!

일단 코드를 봅시다.

```cpp
BELLMAN-FORD(V, E, w, s)
1.  INIT-SINGLE-SOURCE(V,s)
2.  for i = 1 to |V| - 1
3.      do for each edge (u,v) <- E
4.          do RELAX(u,v,w)
5.  for each edge (u,v) <- E
6.      do if(d[v] > d[u] + w(u,v))
7.          then return FALSE
8.  return TRUE
```

- Line 1 : 초기화
- Line 2 : vertex 수 - 1 번 반복해
- Line 3,4 : edge를 하나씩 꺼내가지고 Relax시켜
- Line 5,6 : 또 edge에서 하나씩 꺼내서 Relax시켜봐
- Line 7,8 : Relax 또 되면 negative cycle이 있는거여 return False

이 코드는 모든 E를 훑는 과정을 V-1번 반복하기 때문에 시간은 O(VE) 가 걸린다.

## in DAG(Directed Acycling Graph)

사이클이 없다는 전제하에 이 알고리즘을 쓸 수 있다.
Topological sort를 이용하면 Bellman-Ford의 V-1번 반복하는 과정을 하나로 줄일 수 있다.

```cpp
DAG-SHORTEST-PATHS(V,E,w,s)
    topologically sort the vertices
    INIT-SINGLE-SOURCE(V,s)
    for each vertex u, take in topologically sorted order
        do for each vertex v <- Adj[u]
            do RELAX(u,v,w)
```

이렇게 진행하면 타임이 O(V+E)로 확 줄게 된다!!

잠깐!! 여기서 Topological Sort 뭔지 정확히 집고 넘어가자.

### Topological Sort

DFS를 이용해서 모든 vertex의 Finish Time을 다 구한 다음에 Finish Time이 큰 순서대로 Sorting하는 거를 말한다.

옷 입는 순서와 같이 앞에 꺼가 끝나지 않으면 일이 진행되지 않을 때 일의 순서를 정하는데 사용된다.

## Dijkstra Algorithm(다익스트라 알고리즘)

- negative edge가 없는 경우에만 사용된다.
- BFS를 이용해서 vertex를 priority queue(pq)에 넣고 tree를 확장해나간다.

2개의 Vertex set이 존재해서 S는 최종, Q는 vertex가 담겨져있는 pq이다.
Q에서 하나씩 꺼내기를 반복하면서 최단거리를 찾고 꺼낸 vertex를 S에 넣는다.

```cpp
DIJKSTRA(G,w,s)
1.  INIT-SINGLE-SOURCE(G,s)
2.  S <- NULL
3.  Q <- V[G]
4.  while Q != NULL
5.  do u <- EXTRACT-MIN(Q)
6.      S <- S + U
7.      for each vertex v <- Adj[u]
8.          do RELAX(u,v,w)
```

즉, pq에서 하나씩 꺼내면서 꺼낸 vertex와 근접한 원소를 relax시켜주고 꺼낸 원소를 S에 넣는다.
