---
emoji: 💪
title: (알고리즘) Knapsack 알고리즘 Greedy, DP + 코드
date: '2019-04-11 02:00:00'
author: 정진혁
tags: algorithm
categories: 알고리즘
---

## Knapsack 문제란?

배낭에 담을 수 있는 무게의 최댓값이 정해져 있고, **일정 가치와 무게가 있는 짐들을 배낭에 넣을 때,**
**가치의 합이 최대가 되도록 짐을 고르는 방법을 찾는 문제를 말한다.**

크게 두가지 종류의 문제로 나뉘는데

- 물건을 쪼갤 수 있다면 Fractional Knapsack Problem
- 물건을 쪼갤 수 없다면 0-1 Knapsack Problem 이라고 한다.

**모든 문제에서 일단 item이라는 struct를 사용했다.**

```cpp
struct item{
    int benefit;
    int weight;
    float value;
};
```

## 쪼갤 수 있다면? (Greedy)

- 만일 쪼갤 수 있다면 말그대로 가치( **value/weight** )가 제일 높은 애들을 최대한 담고
- 공간이 부족하다면 하나를 쪼개서 부분적으로 넣고 끝내면 된다.

즉, 제일 좋은 것을 취해가는 **Greedy Algorithm**을 이용하면 된다.

**Greedy Algorithm 활용 코드**

```cpp
void greedy(struct item* array, int n, int w){
    quick_sort(array, 0, 9);
    for(int i = 0; i < n; i++) printf("%d번째 benefit: %d, weight: %d, v/w: %f\n", i,array[i].benefit, array[i].weight, array[i].value);
    float benefit = 0;
    int left = w;
    for(int i = 0; i < n; i++) {
        //만약 원소가 넘겨버리면 쪼개서 넣어
        if(array[i].weight > left) {
            benefit += array[i].value * left;
            break;
        }
        //안넘기면 다 넣어
        else{
            left -= array[i].weight;
            benefit += array[i].benefit;
            if(left == 0) break;
        }
    }
    printf("best benefit : %f\n", benefit);
}
```

## 0-1 Knapsack Problem

**DP 되나?**

- Subproblem으로 문제를 쪼개서 부분의 답이 전체의 답이 되는지를 먼저 확인해보자
- 만일 Max weight이 20이고
- 원소(무게, 가치)가 각각 (2, 3), (3, 4), (4, 5), (5, 8), (9, 10)이라고 했을 때
- 1번 원소부터 4번 원소까지의 최적의 해는 **모든 원소를 챙긴 경우**로 weight이 14이고 max benefit은 20이다.
- 하지만 1~5번 원소까지로 보면 1, 3, 4, 5번 원소를 더한 경우로 weight가 20이고 max benefit은 26이다.
- **즉, subproblem의 solution이 전체 문제 solution의 부분이 아니다.**

다른 접근이 필요하다.

**Redefine DP problem**

- 이번에는 가로를 n(원소갯수), 세로를 W(냅색 무게)로 하는 어레이를 준비한다.
- 냅색 무게를 조금씩 채워가면서 해당 무게 일 때 가장 최선의 방법을 찾아서 그것을 적어 놓는다.
- 그렇게 weight를 기준으로 Subproblem을 찾아나가다 보면 제일 최적의 경우를 발견해 나갈 수 있다.

**Recursive Formula for subproblems**

- 만약 지금 인덱스의 weight가 subproblem의 weight보다 크다면 그 원소를 넣기 이전 값을 넣어준다.
- 그 외의 경우에는 지금 원소를 넣었을 때의 가치와 이전 가치를 비교해서 더 높은 것을 넣어준다.

**DP 활용 코드**

```cpp
void dp(struct item* array, int n, int W){
    int ** B;
    B = (int**) malloc ((n+1) * sizeof(int*));
    for(int i = 0; i < n+1; i++) B[i] = (int*) malloc (W * sizeof(int));

    for(int i = 0; i < W; i++)B[0][i] = 0;
    for(int i = 1; i < n + 1; i++){
        B[i][0] = 0;
        for(int w = 1; w < W; w++){
            int _w = array[i-1].weight;
            int _b = array[i-1].benefit;
            if(_w <= w){
            if(_b+B[i-1][w-_w]>B[i-1][w]) B[i][w] = _b+B[i-1][w-_w];
            else B[i][w] = B[i-1][w];
            }
            else B[i][w] = B[i-1][w];
        }
    }

    printf("best benefit : %d\n", B[n][W-1]);
}

```

- Line 6: index가 0인 원소는 없기 때문에 해당 칸을 0으로 채워준다. (원소는 1~n까지 있다)
- Line 8: 무게가 0인 곳에는 아무 원소도 못들어가기 때문에 0으로 채워준다.
- Line 12: 해당 index의 weight(\_w)이 현재 subproblem의 weight(w)보다 작으면
- Line 13: 현재 index의 value(\_b)에 현재 subproblem에서 현재 index의 무게를 뺀 곳의 benefit을 더한게 i-1의 값보다 크다면 그 값을 넣어줘라.
- Line 14: 현재 인덱스 꺼를 넣어준 값이 시원찮으면 걍 바로 i-1의 값을 넣어줘라.
- Line 15: 현재 index의 weight가 subproblem의 weight보다 크면 못들어가니까 그냥 i-1의 값과 동일하게 해줘라.
- Line 20: 제일 좋은 값은 B\[n\][W-1]에 있게 된다.

## 느낀점

- DP에는 진짜 subproblem의 정의하는 것이 중요하다.
- 아직 나는 능력치가 부족해서 잘 못하지만 계속 노력하다보면 할 수 있게 될 것 같다.
- 시험기간이지만 일단 코딩 화이팅하자:)
