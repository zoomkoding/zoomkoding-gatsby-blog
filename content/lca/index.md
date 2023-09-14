---
emoji: 💪
title: (알고리즘) LCA 알고리즘 + C++ 예제코드
date: '2019-07-27 03:00:00'
author: 정진혁
tags: algorithm LCA
categories: 알고리즘
---

## LCA란

- LCA란 Lowest Common Ancestor의 약자로 트리 속 두 노드의 가장 가까운 조상 노드를 의미한다.
- 이것을 BFS나 DFS를 이용해 모든 경로를 훑어봄으로써 두 노드 사이의 같은 조상을 찾을 수도 있겠지만 이를 더욱 빠르게 하기 위해 만든 알고리즘이 LCA 알고리즘이다.

## LCA 알고리즘

- 방법은 간단하다.
- 1.트리를 만들고 각 노드의 조상들을 저장한다.
- 2.두 노드의 깊이를 같게 깊이가 깊은 노드를 조상으로 업데이트 시켜준다.
- 3.두 노드를 조상으로 올리면서 가장 가까운 공통조상을 찾아준다.

## 트리 만들기 알고리즘

트리를 만드는 방법은 두가지가 있다.  
자세한 내용은 코드를 보면서 설명하고자 한다.

### BFS를 이용한 트리 만들기

```cpp
void build_tree(){
    queue<int> q;
    depth[1] = 1, ac[0][1] = 1;
    q.push(1);
    while(!q.empty()){
        u = q.front(); q.pop();
        for(int i = 0; i < ll[u].size(); i++){
            v = ll[u][i];
            if(depth[v] == 0){
                depth[v] = depth[u] + 1;
                ac[0][v] = u;
                q.push(v);
            }
        }
    }
}
void find_parent(){
    for(int i = 1; i < 17; i++){
        for(int j = 1; j < n + 1; j++)ac[i][j] = ac[i-1][ac[i-1][j]];
    }
}
```

- 위 코드에서 build_tree는 트리를 만들어주는 함수이다.
- 1번 노드를 기준으로 해서 트리를 뻗쳐나가고 그에 따라서 깊이인 level을 저장해주고 parent를 업데이트 시켜준다.(parent에 대한 내용은 좀있다 다시 설명하겠다.)

### DFS를 이용한 트리 만들기

```cpp
void getTree(int current, int parent){
    depth[current] = depth[parent] + 1;
    ac[current][0] = parent;
    for(int i = 1; i <= max_level; i++){
        temp = ac[current][i-1];
        ac[current][i] = ac[temp][i-1];
    }
    int len = ll[current].size();
    for(int i = 0; i < len; i++){
        int child = ll[current][i];
        if(child != parent) getTree(child, current);
    }
}
```

- BFS와 달리 부모노드에서 밑으로 뻗친 애들를 이용해 getTree를 다시 호출하며 트리를 만들어 간다.

### 조상 저장하기

- 이 모든 LCA 알고리즘의 핵심은 각 노드에서의 조상 값을 저장하는데 있다.
- 물론 각 노드의 모든 조상 값을 저장하면 좋겠지만 이것은 나중에 탐색할때 시간이 많이 걸린다.
- 따라서 이 알고리즘에서는 각 노드의 2^n번째 조상값을 ac라는 어레이에 저장해두었다.

#### DFS에서 조상 저장하기

- DFS에서는 각 노드를 발견하는 동시에 그 위로 있는 조상들을 확인한다.
- 여기서 temp는 2^(i-1)번째 조상이다.
- ac[current][i]는 temp의 2^(i-1)번째 조상이므로 이것은 current의 2^i번째 조상과 동일하다.
- 예를 들어, i가 1이라면 2^(1-1)번째의 2번째 즉 윗조상의 바로 윗조상인 2번째 위인 조상이다.
- i가 2라면 2^(2-1)번째의 2^(2-1)번째인 4번째 위인 조상을 의미한다.

```cpp
  for(int i = 1; i <= max_level; i++){
    temp = ac[current][i-1];
    ac[current][i] = ac[temp][i-1];
  }
```

- 여기서 맥스 레벨은 다음과 같은 식을 이용해 구한다.

```cpp
  max_level = (int)floor(log2(SIZE))
```

#### BFS에서 조상 저장하기

- BFS에서는 트리가 다 만들어진 후에 각 노드의 바로 윗 조상에 대한 정보만 가지고 한꺼번에 조상 어레이의 업데이트를 진행한다.
- 조상을 2의 곱으로 저장하는 방식은 동일하다.

```cpp
  void find_parent(){
    for(int i = 1; i < 17; i++){
        for(int j = 1; j < n + 1; j++)ac[i][j] = ac[i-1]ac[i-1][j]];
    }
  }
```

## 본격 최소 공통 조상 찾기

일단 코드를 보자.

```cpp
int find_LCA(int a, int b){

    //a와 b의 깊이 같게 하기(depth[b] > depth[a]일때)
    for(int i = max_level; i >= 0; i--){
        if(depth[a] <= depth[ac[b][i]]) b = ac[b][i];
    }
    if(a == b) return a;

    //공통 조상 찾기
    for(int i = max_level; i >= 0; i--){
        if(ac[a][i] != ac[b][i])a = ac[a][i], b = ac[b][i];
    }

    return ac[a][0];
}
```

### depth 같게 하기

```cpp
//a와 b의 깊이 같게 하기(depth[b] > depth[a]일때)
for(int i = max_level; i >= 0; i--){
    if(depth[a] <= depth[ac[b][i]]) b = ac[b][i];
}
```

- 이 과정은 조금 헷갈릴 수 있으니 집중해서 코드를 보기 바란다.
- 먼저 해야하는 것은 깊이를 같게 해주는 과정이다.
- 더 깊이 있는 노드(b)의 조상을 맨 위부터 확인하면서 a보다 깊거나 같으면 해당 조상으로 업데이트 한다.
- 이 때 차이가 홀수리먄 아땋게 같게 되나하고 도착 못하지 않나 하고 의문이 들 수 있다.
- 하지만 모든 수는 2진수로 표현할 수 있다는 것을 기억하길 바란다.
- 이 과정이 끝나면 자연스럽게 그 차이가 줄어들게 된다.

### 공통 조상 찾기

```cpp
//공통 조상 찾기
for(int i = max_level; i >= 0; i--){
    if(ac[a][i] != ac[b][i])a = ac[a][i], b = ac[b][i];
}
```

- 이 과정 또한 depth를 같게하는 과정과 유사하게 진행된다.
- 이 과정의 목표는 두 점의 맨위 조상부터 시작해서 공통분모가 달라지는 최초지점을 찾는 것이 목표이다.
- 그리고 각 노드는 그 조상값으로 업데이트 한다.
- 즉, 업데이트한 친구의 바로 윗 조상이 공통 분모가 되는 것이다!
- 이 과정에서도 탐색을 통해 홀수번째 조상도 방문하게 되어있다.

## DFS 최종 코드

```cpp
#include <queue>
#include <vector>
#include <cstdio>
#include <cmath>

#define INF 1000000000
#define SIZE 50020

using namespace std;

vector<vector<int> > ll;
int ac[SIZE][17], depth[SIZE];
int n, m, v, w, u, max_level, temp, child;

void getTree(int current, int parent){
    depth[current] = depth[parent] + 1;
    ac[current][0] = parent;
    for(int i = 1; i <= max_level; i++){
        temp = ac[current][i-1];
        ac[current][i] = ac[temp][i-1];
    }
    int len = ll[current].size();
    for(int i = 0; i < len; i++){
        int child = ll[current][i];
        if(child != parent) getTree(child, current);
    }
}

int find_LCA(int a, int b){
    for(int i = max_level; i >= 0; i--){
        if(depth[a] <= depth[ac[b][i]]) b = ac[b][i];
    }
    if(a == b) return a;
    for(int i = max_level; i >= 0; i--){
        if(ac[a][i] != ac[b][i])a = ac[a][i], b = ac[b][i];
    }
    return ac[a][0];
}

int main(){
    scanf("%d", &n);
    ll = vector<vector<int> >(n + 1);
    for(int i = 1; i < n; i++){
        scanf("%d %d", &v, &u);
        ll[v].push_back(u);
        ll[u].push_back(v);
    }
    depth[0] = -1;
    max_level = (int)floor(log2(SIZE));
    getTree(1, 0);
    scanf("%d", &m);
    while(m--){
        scanf("%d %d", &v, &u);
        printf("%d\n", depth[v] < depth[u] ? find_LCA(v, u) : find_LCA(u, v));
    }
}
```

## BFS 최종 코드

```cpp
#include <queue>
#include <vector>
#include <cstdio>
#define INF 1000000000

using namespace std;

vector<vector<int> > ll;
int ac[17][50020], depth[50020];
int n, m, v, w, u;

int find_LCA(int chd, int par){
    int diff = depth[chd] - depth[par];
    for(int i = 16; i >= 0; i--){
        if((1<<i) <= diff){
            chd = ac[i][chd];
            diff -= (1<<i);
        }
    }
    if(chd == par) return chd;
    for(int i = 16; i >= 0; i--){
        if(ac[i][chd] != ac[i][par]){
            chd = ac[i][chd];
            par = ac[i][par];
        }
    }
    return ac[0][chd];
}

void build_tree(){
    queue<int> q;
    depth[1] = 1, ac[0][1] = 1;
    q.push(1);
    while(!q.empty()){
        u = q.front(); q.pop();
        for(int i = 0; i < ll[u].size(); i++){
            v = ll[u][i];
            if(depth[v] == 0){
                depth[v] = depth[u] + 1;
                ac[0][v] = u;
                q.push(v);
            }
        }
    }
}
void find_parent(){
    for(int i = 1; i < 17; i++){
        for(int j = 1; j < n + 1; j++)ac[i][j] = ac[i-1][ac[i-1][j]];
    }
}

int main(){
    scanf("%d", &n);
    ll = vector<vector<int> >(n + 1);
    for(int i = 1; i < n; i++){
        scanf("%d %d", &v, &u);
        ll[v].push_back(u);
        ll[u].push_back(v);
    }
    build_tree();
    find_parent();

    scanf("%d", &m);
    while(m--){
        scanf("%d %d", &v, &u);
        printf("%d\n", depth[v] < depth[u] ? find_LCA(v, u) : find_LCA(u, v));
    }
}
```

## 느낀점

- 조상을 2의 곱으로 저장해서 탐색하는 사람들의 발상은 진짜 대박인거 같다.
- 아무리 두 점의 깊이 차이가 크더라도 max_level번의 iteration 만에 조상을 같게 만들 수 있고 LCA를 찾아낼 수 있다.
- 이런걸 짜낸 사람도 대단하지만 일단 2주째 묵혀놨던 LCA를 드디어 제대로 이해하고 정리한 나도 잘했다 해주고 싶다.
- 고생했다!
