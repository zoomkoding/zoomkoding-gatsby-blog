---
title: MacBook에 Virtual Box, Ubuntu, APM 설치하는 법
layout: post
date: '2018-05-05 02:00:00'
author: 줌코딩
tags: 맥북 VirtualBox설치 Ubuntu설치 APM설치 맥리눅스설치 MacUbuntu설치 리눅스한국어
cover: "/assets/instacode.png"
categories: linux
---


오늘은 새로 받은 따끈따끈한 MacBook을 이용해서 Virtual Box, Ubuntu를 설치해보자.

## 1. Virtual Box 설치하기

먼저 Mac에 Virtual Box를 설치해보자.

a. virtualbox.org로 이동해서 홈페이지에 있는 Download VirtualBox 5.2를 클릭한다.

b. VirtualBox 5. 2. 10 platform 밑에 있는 OS X hosts를 클릭해라.

c. 다운로드 목록에 있는 dmg 파일을 과정에 따라 다운로드 한다!

## 2. Ubuntu 설치하기

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/1.png)

a. www.ubuntu.com에 접속한다.

b. Download - Desktop 에서 가장 최신 메뉴를 다운로드한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/2.png)

c. 돈을 0으로 바꾸고 Not now, take me to the download 버튼을 클릭한다.

## 3. VirtualBox 이용해서 Ubuntu 구동해보기!

a. VirtualBOx를 켠다,

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/3.png)

b. 이름, 종류, 버전을 설정한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/4.png)

c. 메모리 크기를 설정한다. 메모리 크기는 작게 하면 나중에 원하는 패키지를 다 다운 받지 못할 수 있음으로 넉넉히 한다. (1기가로 했다가 한번 다시 깔았었다.. 다시 깔 때는 6기가로 했다는ㅎㅎ)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/5.png)

d. 새 가상 하드 디스크를 만든다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/6.png)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/7.png)

e. 만들기를 진행한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/8.png)

f. 그리고 하아아안참 기다리면 설치가 완료된다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/9.png)

g. 중간에 지역과 개인정보 입력을 물어보는데 거기에 맞춰서 입력해주면 끝!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Mac-ubuntu-virtualbox/10.png)

이런 페이지를 한참 볼것이다.... 내 피씨는 새 것임에도 불구하고 한 40분정도 소요됐다. 

## 4. git을 설치하기

이 과정은 명령어를 하나씩 입력하면 되는 것이라 순서대로 명령을 입력해주면 알아서 다운로드가 진행된다. 

a. sudo apt-get update

설치 초기 단계의 패키지 정보가 최신화 되지 않아서 업데이트가 필요하다고 한다.

b. sudo apt-get install git

그리고 git을 설치한다. 그럼 알아서 타다다다닥 설치해주는 리눅스 클래스!

## 5. APM 설치하기

APM 웹서버 구축에서 

1. 웹서버 종류
2. 서버사이드스크립트 종류
3. 데이터베이스 종류

이 세종류를 잘 정해야 하는데 APM은 이 중 가장 흔히  쓰이는 조합인

A - Apache(웹서버 종류)
P - PHP(서버사이드스크립트 종류)
M - mySQL(데이터베이스 종류)

을 의미한다.

그럼 바로 명령어를 통해 설치를 진행해보자!

### 5.1 Apache2 설치하기

a. sudo apt-get install apache2

이 명령어는 apache2를 설치해준다.

b. sudo apt-get upgrade

그리고 각각 패키지 업데이트해준다.

c.  firefox localhost

firefox를 통해 Apache2 Ubuntu Default Page가 뜨면 설치 완료!

### 5.2 Mysql 설치하기

a. sudo apt-get install mysql-server

다중 사용자가 접근 가능하도록 서버를 설치한다.

### 5.3 PHP 설치하기

a. sudo add-apt-repository spa:ondrej/php

이 명령을 이용해서 PHP를 위한 저장소를 만든다

b. sudo apt-get update

저장소로부터 패키지 목록을 가져온다.

c.  sudo apt-get install php7.2-mysql php7.2-curl php7.2-xml php7.2-zip php7.2-gd php7.2-mbstring 

PHP7.2 패키지를 설치한다.

d. sudo sh -c 'echo "<?php phpinfo(); ?>" > /var/www/html/info.php'

이명령은 php 잘 설치 되있나 보기 위해서 info파일에 내용을 추가한다.

e. firefox localhost/info.php

localhost 웹페이지가 잘 뜨면 완료

phpMyAdmin 설치하기

이것은 MySQL을 관리할 수 있는 웹 인터페이스라고 한다.

a. sudo apt-get install phpmyadmin

이것을 입력하면 웹서버를 선택하라고 한다. 
apache2선택!
phpmyadmin의 데이터베이스를 dbconfig-common으로 설정하시겠습니까?
예!
암호 설정시에는 조금 신중하자!

그리고 localhost/phpmyadmin 접속해서 MySQL 계정 정보를 입력하고 실행하라.

## 6. 한영 변환하기

리눅스를 한국말로 볼 수 있게 변환할 수 있다.
a. 먼저 설정에서 지역 및 언어를 클릭한다
b.설정 바꾸기! 
언어 - 한국어
형식 - 대한민국 
입력 소스 한국어(101/104키 호환, 한국어(Hangul)
로 변환하고
c. 터미널 창에서 한국말이 입력되면 끝!


이상으로 내 첫 애플 아이템인 MacBook Pro에 Ubuntu를 설치하고 패키지를 설치해보았다! 앞으로 더 난해한 내용을 배우게 될텐데 한번 열심히 해보자:) 맥북 선물해주신 소중대 사랑합니다ㅎㅎ

