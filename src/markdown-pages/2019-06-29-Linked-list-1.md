---
title: (알고리즘) Double Linked List C++ 구현 알고리즘
layout: post
date: '2019-06-29 04:00:00'
author: 줌코딩
tags: algorithm
cover: "/assets/instacode.png"
categories: algorithm
---

## 링크드 리스트
링크드 리스트는 나의 오랜 숙적이다. 항상 최후의 방법으로 미뤄놓는 방법인데 알고리즘을 하면서 링크드 리스트를 사용하지 않고는 풀기 어려운 문제가 나와서 하는 수 없이 정리를 해본다ㅎㅎ

## 더블 링크드 리스트란?
보통 링크드 리스트라고 하면 다음 원소가 무엇인지(next)를 포인터로 연결해놓게 된다. 하지만 더블 링크드 리스트는 이전 원소의 값도 알려주는(prev) 포인터가 존재한다. 

더블 링크드 리스트는 지금 element 이후와 이전의 원소 정보가 모두 필요할 때 사용한다.

ex) **원소 정방향, 역방향으로 출력하기**

## 참고

[더블 링크드 리스트 참고 사이트](https://hijuworld.tistory.com/55)

**여기서 tail이 움직일 수 있게 코드를 수정했다.**

## Node 구조체

Node를 추가할 때는 ptr 정보를 같이 받아와서 ptr 바로 뒤에다가 새로 생성된 노드를 연결시켜준다.

    struct Node { 
        char data = ' ';
        Node* next, * prev; 
        Node() {
            next = prev = NULL;
            data = ' ';
        }
        Node(char c, Node* ptr)//ptr 뒤에 추가
        {
            data = c;
            prev = ptr;
            next = ptr->next;
            next->prev = prev->next = this; 
        }
        void selvDelete() {
            prev->next = next;
            next->prev = prev;
            delete this;
        }
    };

## Double Linked List 구조체

더블 링크드 리스트에서 더미를 head와 tail에 놔둬서 링크드 리스트가 범위를 초과하지 않을 수 있게 도와준다.

>* 새로운 원소가 추가될 때는 tail 앞에 추가 해주고(추가 후에도 tail 뒤에 있는 원소는 동일하다)
>* tail은 움직일 수 있게 해서 중간에 원소를 추가하거나 삭제할 수 있게 해주었다. 
>* 출력은 head가 더미이기 때문에 head 다음 원소부터 끝 원소까지 


    struct DLinkedList {
        Node *head;
        Node *tail;
        int count;
        DLinkedList() { //생성자
            count = 0;
            head = new Node(); //더미를 선언해서 가지고 있게한다.
            tail = new Node(); //더미를 선언해서 가지고 있게한다.
            head->next = tail; //서로연결한다.
            tail->prev = head;
        }
        void endInsert(char c) { //tail 앞에 추가한다.
            new Node(c, tail->prev);
        }
        void moveRight(){
            if (tail -> data == ' ') return;
            tail = tail -> next;
        }
        void moveLeft(){
            if (tail->prev == head) return;
            tail = tail -> prev;
        }
        void endDelete() { //tail 앞에 제거한다.
            if (tail->prev == head) return;
            tail->prev->selvDelete();
        }
        void printAll() {
            Node* tmp = head;
            while (tmp->next != NULL) {
                cout<< tmp->next->data;
                tmp = tmp->next;
            }
        }
    };



## 최종 예제 코드(백준 1406번)

    #include <string>
    #include <iostream>
    #include <vector>
    #include <cstdlib>

    using namespace std;

    struct Node { 
        char data = ' ';
        Node* next, * prev; 
        Node() {
            next = prev = NULL;
            data = ' ';
        }
        Node(char c, Node* ptr)//ptr 뒤에 추가
        {
            data = c;
            prev = ptr;
            next = ptr->next;
            next->prev = prev->next = this; 
        }
        void selvDelete() {
            prev->next = next;
            next->prev = prev;
            delete this;
        }
    };

    struct DLinkedList {
        Node *head;
        Node *tail;
        int count;
        DLinkedList() { //생성자
            count = 0;
            head = new Node(); //더미를 선언해서 가지고 있게한다.
            tail = new Node(); //더미를 선언해서 가지고 있게한다.
            head->next = tail; //서로연결한다.
            tail->prev = head;
        }
        void endInsert(char c) { //tail 앞에 추가한다.
            new Node(c, tail->prev);
        }
        void moveRight(){
            if (tail -> data == ' ') return;
            tail = tail -> next;
        }
        void moveLeft(){
            if (tail->prev == head) return;
            tail = tail -> prev;
        }
        void endDelete() { //tail 앞에 제거한다.
            if (tail->prev == head) return;
            tail->prev->selvDelete();
        }
        void printAll() {
            Node* tmp = head;
            while (tmp->next != NULL) {
                cout<< tmp->next->data;
                tmp = tmp->next;
            }
        }
    };

    int main(){
        DLinkedList *list = new DLinkedList();
        int n;
        char cmd, input;
        cin >> n;

        for(int i = 0; i < n; i++){
            cin >> cmd;
            if(cmd == 'P'){
                cin >> input;
                list->endInsert(input);
            }
            else if(cmd == 'D'){
                list->moveRight();
            }
            else if(cmd == 'B'){
                list->endDelete();
            }
            else if(cmd == 'L'){
                list->moveLeft();
            }
        }
        list->printAll();
    }


## 주의할점

>* 링크드 리스트 문제는 아무리 간단한 문제라도 그리자 제발...
>* 제발 쉽다고 막 짜지 말아요ㅠㅠㅠ

