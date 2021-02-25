---
title: "(ML) 머신러닝 입문기 - 머신러닝캠프 1일차"
layout: post
date: '2019-01-07 11:44:11'
author: 줌코딩
tags: 머신러닝입문 딥러닝 김인중교수님
cover: "/assets/instacode.png"
categories: 머신러닝
---

## Why Machine Learning?

일단 나는 머신러닝이 뭔지도 모르지만 머신러닝 공부하는 친구들에게 익히 들어 알고 있었다..

머신러닝은 수학 안할꺼면 오면 안된다고 ㅋㅋㅋ

근데....

육목대회를 참여하고 나서 생각이 좀 많이 달라졌다.

머신러닝을 이용하면 내가 할 수 있는 것들이 더 넓고 무궁무진하다는 것을....

그리고 학습을 통해서 나만의 육목AI 만들어보고 싶었다..!

그래서 호기롭게 이 분야의 대가이신 **김인중 교수님의 머신러닝 캠프**를 신청하고 도전했다!

이게 엄청 어려워서 잘하시는 분들도 3번 4번 들어야 이해가 된다고 해서 이번에는 그냥 수식을 떠나서 개념 이해에만 집중해봤다.

## 기초

**머신러닝**이란 쉽게 말해 컴퓨터가 직접 명시된 코드가 아닌  트레이닝 샘플들을 바탕으로 액션을 취하게 하는 것을 말한다.

그래서 많은 레이블이 되어있는 트레이닝 샘플들을 주어서 여러가지 **Feature들을 Extract**하게 된다.

그리고 그 Feature들에 따라 원하는 결과를 얻을 수 있도록 알아서 **Weight**를 설정할 수 있게 한다.

여기서는 **Training** 이라는 개념이 중요한데 트레이닝이란

#####                               에러를 최소화하는 Optimization의 과정

이라고 보면 된다.


머신러닝에는 크게 4가지 분야가 있는데 

1. Supervised learning(레이블이 있는 샘플들을 기반으로함)


2. Unsupervised Learning(샘플이 레이블이 없을 때)

	+ Clustering(비슷한 것끼리 묶는 것)
	+ auto-encoder(input과 비슷한 놈으로 베껴쓰는 것)
	+ latent variable models(현상을 역으로 추적하는 방법, ex. 가슴 고통->폐문제->담배, 운동부족)

3. Semi-supervised Learning(레이블 없는 놈들을 레이블 있는 놈들과 섞어 씀)

**4. Reinforcement Learning(끝판왕) - 알파고 같은 친구들이다.**
 
 이것은 누적된 reward를 maximize하도록 머신 러닝시키는 것을 말한다.
 
 여기에는 여러 중요한 개념들이 있는데 바둑으로 치자면
 
 + Policy (정책): 각 state에 대한 추천 액션이다.
 + Value of State(현재 가치): 현 state의 가치를 의미한다.
 + Value of action(Q-function): State에서 액션을 취한 후의 승률을 의미한다.

이 때 **Policy**와 **Value Network**를 잘 구성하면 검색 breath을 줄여주고 depth 줄여줄 수 있다!!

흥미롭다... 근데 엄청 어려운 것 같다


### Recognition System

Recognition에는 크게 두가지가 있다.
 1. Classification(Category를 Return하게 하는 것, ex. 사진 주고 성별, 숫자 예측)
 2. Regression(Input을 바탕으로 Value를 예측하게 하는 것 ex. 키를 주고 몸무게 예측)

Recognition System에서 중요한 것은

Feature Extraction 단계에서 Recognition을 진행하고 Feature을 **Vector**형식으로 추출해낸다.
그리고 Classification 과정에서 trained된 parameter를 바탕으로 최적화 과정을 거친 후에 결과를 return 하게 된다.

여기서 Feature을 Vector로 처리하는 이유는 다루기 쉽고 중요정보만 집중할 수 있다는 당점이 있기 때문이다.

#### Feature Space

Vector로 바뀌어진 Feature들을 Feature Space 상에 표시할 수 있고
이를 통해서 **Boundary를** 그을 수 있다. (이 선을 통해서 classification이 이루어진다.)

하지만 이 Boundary는 오류를 포함하기도 한다!!
그러면 이 선을 더 굴곡지게 해서 학습 데이터를 더 잘 구분하면 결과가 좋아질까!?

음 이건 케바케인데

sample이 적은데 선을 복잡하게 하는 것은 오히려 데이터를 **Overfitting**하게 할 수 있다.

여기서 Overfitting은 학습데이터에 너무 딱 맞춰서 오히려 성능이 떨어지는 현상을 말한다.

데이터가 다양하고 많을 경우에는 복잡한 모델을 사용하는 것이 적합하다고 볼 수 있다!!

### Bayesian Theorem

이거는 이산수학 시간에 배운 내용이다 ㅎㅎ

예를 들어 키와 성별의 상관관계를 알아보고자 한다.

이 때 전세계에 있는 180을 모두 불러와서 구분하고 181을 모두 불러와서 구분하고...

이거는 불가능하다..

그렇기 때문에 역으로 

남자인 사람을 1000명 모아서 키를 분류하는 것이 오히려 더 수월 할 것이다.(정확도는 살짝 아쉽겠지만 말이다ㅎㅎ)

## Neural Networks Basics

이건 Deep Learning에 근간이 되는 내용이다.

**Neural Network**란 인간의 뇌의 생물학적 구조에서 착안해서 각 node와 node 사이의 connection으로 연결되어 있는 형태를 말한다.

이 때 각 connection의 **weight**는 학습에 의해서 결정 된다.

각 layer는 input을 받아드리고 더 높은 차원의 정보를 생성해낸다..!!

**weight**는 다른게 아니라 함수에서 parameter라고 보면 된다.

input에 해당하는 weight을 다 곱한 값을 더한 후에 activation function을 거치는 것을** perceptron**이라고 한다


이 parameter를 최적화 하는 과정을 **Gradient Descent**라고 한다.



#### Gradient Descent

Gradient descent는 iterative error minimization technique이다. 

다시말해 error을 최소화 하는 과정, parameter optimization 과정이라고 보면된다.

미분을 통해서 error가 최소화 되는 지점으로 점점 보내는 것을 의미한다. 

이때 보내지는 정도를 **learning Rate**이라고 하는데 

이게 너무 작으면 찾는게 너무 느리고 또 local minima라는 구덩이에 빠질 가능성이 높고

반대로 너무 크면 수렴하지를 못한다는 단점이 있다. 

따라서 learning rate을 잘 결정해주는 것이 매우 중요하다고 한다.


#### Single no! Multi layer perceptron

싱글 레이어로는 XOR도 구분 못한다는 것이 수학적으로 밝혀지게 되면서 Multi layer 의 중요성이 대두됐다.

#### Activation Function

weight를 곱한 친구들이 다 더해지면 activation function을 거치게 된다. 

왜냐고? 
 + 여기를 거쳐야 데이터가 linear하지 않게 나타나고
 + 범위를 정해줄 수 있고
 + 측정값을 확률 혹은 결과값으로 나타낼 수 있다!

여기에는 **Tanh, ReLU** 등이 있다.

#### Loss Function...(이거 개념을 잘 모르겠다)

#### Back-Propagation

이 과정을 통해서 gradient 정보를 보내주고 각 weight를 업데이트 해주게 된다. 


## Deep Learning

이런 multi layer을 깊이 쌓으면서 학습하는 것을 deep learning 이라고 한다. 

이 때 깊이가 깊어져도 학습이 잘되지 않는 문제가 생기는데

이것는  vanishing gradient problem, local minima, overfitting 등이 있다.

#### vanishing gradient

back propagation algorithm이 깊이가 깊을 수록 잘 안된다.
(아직 잘 이해가 가지 않는다..)

이를 해결하기 위해 나온 것이 CNN, GRU와 같은 architecture이고 batch normalization과 같은 algorithms이 있다.

### Convolutional Neural Networks(CNN)

Convolution layer와 pooling 등을 이용한 heterogeneous layer이다. 

convolution이라는  weight 스펙트럼으로 전체를 훑는 것을 의미한다.

### Recurrent Neural Networks(RNN)

계속 자신에게 업데이트 해주는 식의 network 구조이다

이것은 시간 순으로 진행되기 때문에 병렬 처리가 불가능하다.

### Generative Model(GAN)

이거는 마치 해커와 화이트 해커가 서로를 뛰어넘으려고 하는 것처럼

Generator에서 샘플을 만들어 내고 Real World의 샘플과 비교하는 Discriminator를 두어서

계속해서 Generator가 실제와 구분이 가지 않을 정도의 결과물을 생성해내도록 하는 것이다.




