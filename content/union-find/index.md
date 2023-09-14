---
emoji: 💪
title: (알고리즘) Disjoint Set 구조와 Union Find 알고리즘
date: '2019-05-19 02:00:00'
author: 정진혁
tags: algorithm
categories: 알고리즘
---

## Disjoint-set 구조와 Union-Find 알고리즘이란?

- Disjoint set 이란 연결이 끊어진 원소들의 집합을 의미 한다.
- 이 데이터 구조를 위해서 Union-Find 알고리즘이 2가지 주요한 operation을 제공한다.

1. Find : 어떤 원소가 어느 집합에 있는지 찾아준다. 주로 두개의 element가 같은 집합에 있는지 확인하는데 사용된다.
2. Union : 2개의 집합을 하나의 집합으로 합쳐준다.

**이 알고리즘은 Cycle을 찾는데 아주 용이하다.**

## Union-Find의 활용 코드 (사이클 찾기)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/union-find-1.png)

위와 같은 그래프 일 때 사이클 여부를 Union-find를 이용해서 확인해보자!

```cpp
//각 Edge의 정보가 담긴 struct이다.
struct Edge{
    int src, dest;
};

//각 Graph의 정보가 담긴 struct이다.
struct Graph{
    int V, E;
    struct Edge* edge;
};

//Graph를 생성해서 반환해주는 역할을 하는 함수이다.
//V는 vertex 개수, E는 edge의 개수를 의미한다.
struct Graph* createGraph(int V, int E){

    //그래프 공간 할당!
    struct Graph* graph = (struct Graph*) malloc( sizeof ( struct Graph));

    //그래프의 크기를 주어진 정보를 이용해 정해준다.
    graph->V = V;
    graph->E = E;

    //그래프의 edge 개수만큼 Edge의 공간을 할당해준다.
    graph->edge = (struct Edge*) malloc ( graph -> E * (struct Edge));

    //만든 그래프를 반환해준다.
    return graph;
}

//해당 vertex가 어느 집합에 속했는지 확인시켜주는 노드이다.
//두개의 vertex가 같은 집합에 있다면 find의 결과 값이 같을 것이다.
int find(int parent[], int i){

    //계속 타고 타고 가서 지금 parent가 없는 친구를 찾아보자(즉 그래프의 child node)
    if(parent[i] == -1) return i;
    return find(parent, parent[i]);
}

//만약 두개의 child node가 다르다면 두 노드를 이어줍시다. 하나의 그래프가 다른 그래프 밑으로 쏙 들어가게 된다.
void union(int parent[], int x, int y){

    //둘의 childnode를 찾고 다르면 하나가 다른 하나를 먹자.
    int xset = find(parent, x);
    int yset = find(parent, y);
    if(xset != yset){
        parent[xset] = yset;
    }
}

//Cycle을 확인해주는 함수
int isCycle(struct Graph* graph){

    //parent라는 어레이 변수를 생성하고 초기 값을 -1, 즉 부모가 없는 상태로 두자
    int *parent = (int*) malloc( graph->V * sizeof(int) );
    memset(parent, -1, sizeof(int) * graph->V);

    //그래프의 Edge를 쭉 훑어봅시다.
    for(int i = 0; i < graph->E; ++i)
    {
        //Edge의 src와 dest node가 같은 graph에 속해있나 봅시다.
        int x = find(parent, graph->edge[i].src);
        int y = find(parent, graph->edge[i].dest);

        //같으면 Cycle이 있는겁니다.
        if (x == y) return 1;

        //아니면 두 그래프를 합쳐요!
        Union(parent, x, y);
    }
    return 0;
}

int main(){
    int V = 3, E = 3;
    struct Graph* graph = createGraph(V, E);

    // add edge 0-1
    graph->edge[0].src = 0;
    graph->edge[0].dest = 1;

    // add edge 1-2
    graph->edge[1].src = 1;
    graph->edge[1].dest = 2;

    // add edge 0-2
    graph->edge[2].src = 0;
    graph->edge[2].dest = 2;

    if(isCycle(graph)) printf("사이클 있어요~");
    else printf("사이클 없어요~");
}
```

주석을 확인하면 훨씬 이해가 빠를 것이다.

## 헷갈림 주의!!

union을 하게 되면 같은 집합에 있는 원소의 child node가 같아지게 된다. 밑에 그림을 참고하자:)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/union-find-2.jpeg)

## 느낀점

- 내가 bfs로 짰을 때보다 훨씬 효율적인지는 모르겠지만 일단 굉장히 직관적이다.
- 두개의 집합을 합치는 방법도 어떻게 하지 했는데 child node를 이어주는 것 만으로 이것이 가능해다는 발상도 너무 좋다.
- 아직 확실히 감은 안오지만 한번 도전해볼만 하다.
