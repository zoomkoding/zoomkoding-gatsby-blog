---
emoji: 💪
title: (알고리즘) Knapsack 알고리즘 2 Branch and Bound, Heap + 코드
date: '2019-04-20 02:00:00'
author: 정진혁
tags: algorithm knapsack
categories: 알고리즘
---

## Branch and Bound?

Branch(가지)와 Bound(범위)를 이용한 방법으로 최적의 해를 찾기 위해 어느 정도의 범위를 정해두고 범위를 벗어난 값들을 가지치기 하는 방법을 의미한다.

BFS를 이용해 뎁스를 늘려가며 최선의 값을 찾는다고 했을 때 모든 리프까지 가지 않고 어느정도의 바운더리를 정하고 바운더리 밖에 있는 친구들을 제하는 방법을 의미한다.

### Knapsack에 어떻게 적용해?

- 각 원소를 넣는 경우와 안 넣는 경우로 두 경우로 가지(Branch)를 쳐가는데
- 현재 원소의 최대치로 넣었을 때의 경우(bound)가 현재 찾은 최대 가치(max_benefit)을 넘지 못하면 더 이상 볼 가치가 없는 친구이므로 더이상 뻗지 않는다.(queue에서 넣지 않는다.)
- 여기서 queue를 priority queue로 하면 맥스 근처 값을 더 빨리 찾을 수 있기 때문에 가치가 없는 친구들을 더 많이 걸러낼 수 있다!

가치가 없다고 여기는 경우는 두가지이다.

1. bound <= max_benefit (이 가지로 뻗쳤을 때 최대 기대가치가 현재 맥스보다 작을때 pass)
2. weight > W (현재 아이템을 넣으면 냅색 용량이 최가된다면 pass)

그렇다면 코드를 한번 보자

**Branch and Bound 코드**

```cpp
typedef struct NodeStruct
{
  int weight;
  int benefit;
  int index;
  float bound;
} Node;

#define MAX_SIZE 10000

Node heap[MAX_SIZE];
int size;

void heap_init() {
    size = 0;
}

void heap_swap(Node *a, Node *b) {
    Node tmp = *a;
    *a = *b;
    *b = tmp;
}

int push(Node value) {
    if (size + 1 > MAX_SIZE) {
        return 0;
    }

    heap[size] = value;

    int current = size;
    int parent = (size - 1) / 2;

    while (current > 0 && heap[current].bound > heap[parent].bound) {
        heap_swap(&heap[current], &heap[parent]);
        current = parent;
        parent = (parent - 1) / 2;
    }

    size++;

    return 1;
}

Node pop() {
    if (size <= 0) {
        Node temp;
        temp.benefit = -1;
        return temp;
    }

    Node ret = heap[0];
    size--;

    heap[0] = heap[size];
    int current = 0;
    int leftChild = current * 2 + 1;
    int rightChild = current * 2 + 2;
    int maxNode = current;

    while (leftChild < size) {
        if (heap[maxNode].bound < heap[leftChild].bound) {
            maxNode = leftChild;
        }
        if (rightChild < size && heap[maxNode].bound < heap[rightChild].bound) {
            maxNode = rightChild;
        }

        if (maxNode == current) {
            break;
        }
        else {
            heap_swap(&heap[current], &heap[maxNode]);
            current = maxNode;
            leftChild = current * 2 + 1;
            rightChild = current * 2 + 2;
        }
    }

    return ret;
}


float bandb(Item* array, int n, int w){
    heap_init();
    float max_benefit = 0.0;
    int weight = 0;
    //queue 사이즈 할당해주기
    Node root;
    //root node 넣어줘
    root.weight = 0;
    root.benefit = 0;
    root.index = 0;
    for(int i = 0; i < n; i++){
        if(weight+array[i].weight > w){
            root.bound += (w-weight)*array[i].value;
            break;
        }
        else {
            root.bound += array[i].benefit;
            weight += array[i].weight;
        }
    }
    push(root);

    //q에서 꺼낸 원소가 -1이 아니라면 반복
    while(1){
        Node temp = pop();
        Node child[2];
        if(temp.benefit == -1) break;


        int index = temp.index + 1;


        if(temp.bound < max_benefit) continue;

        if(temp.index == n-1)continue;

        child[0].weight = temp.weight + array[index-1].weight;
        child[0].benefit = temp.benefit + array[index-1].benefit;
        child[1].weight = temp.weight;
        child[1].benefit = temp.benefit;

        //넣기로 하고 하나는 안넣기로해서 두번 작업해
        //꺼낸 원소의 weight과 w를 비교해서 넘으면 continue
        for(int i = 0; i < 2; i++){

            child[i].index = index;
            child[i].bound = child[i].benefit;

            if(w < child[i].weight) continue;

            //꺼낸 원소의 bound를 구하고
            weight = child[i].weight;
            for(int j = index; j < n; j++){
                if(weight+array[j].weight > w){
                    child[i].bound += (w-weight)*array[j].value;
                    break;
                }
                else {
                    child[i].bound += array[j].benefit;
                    weight += array[j].weight;
                }
            }
            //max_benefit보다 작으면 continue
            if(child[i].bound < max_benefit) continue;

            //benefit을 구하고 max_benefit 보다 크면 max_benefit 업데이트
            if(child[i].benefit > max_benefit)max_benefit = child[i].benefit;
            //push 해줘
            push(child[i]);

        }
    }

    //다돌았으면 결과 리턴해
    return max_benefit;

}
```

- Heap을 구현해서 사용했다.
- 최초 root 값을 만들어서 넣어준다.
- heap에서 하나씩 꺼내서 child를 만들어서 heap에 넣어주기를 반복한다.
- 바운드를 통과한 친구들만 heap에 들어간다.

## 느낀점

- 진짜 코딩의 방법은 말도 안되게 다양하다.
- 처음에 그냥 queue를 썼다가 유진이 말듣고 heap으로 바꿨는데 시간 차이가 말도 안되게 많이 난다.
- 진짜... 다음에는 힙도 공부해본다.. 세상에는 다양한 방법이 존재한다 정말루 아직 멀었다.
