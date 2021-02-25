---
title: (워드프레스-1) APT 명령어, APM 설치하기(apache2, php7, mysql) 
layout: post
date: '2018-05-08 02:00:00'
author: 줌코딩
tags: Apt명령어, apm설치, apminstall, apache, php, mysql
cover: "/assets/instacode.png"
categories: wordpress linux
---


## 1. Apt란? 

- Ubuntu는 Debian Linux에서 나온 것으로 dpkg packaging system을 사용한다. 여기서 APT는 Advanced Package Tool로 dpkg packaging system과 interact하기 위해서 나용하는 명령어 툴이다. 

## 2. APT 명령어들 

- apt-get update : 이 명령은 package의 각 버전 변경사항이 있을 시 변경내용을 업데이트 해주는 역할을 한다. 이 명령을 입력하면 다양한 서버에서 가져온 package 정보를 볼 수 있다.

- apt-cache stats : 이 명령은 전체 패키지에 대한 정보를 알려준다. 예를 들면 전체 패키지 이름, 버전/파일 관계, 설명/파일 관계 같은  정보를 알려준다. 

- apt-cache pkgnames : 이 명령은 현재 서버상에 존재하는 모든 package의 이름을 출력한다.

- apt-cache search [검색어] : 이 명령은 존재하는 package 중에서 검색어를 이용하여 찾고 또 그 package에 대한 간단한 설명까지 해준다.
- apt-cache show [패키지명] : 이 명령은 입력한 package에 대한 자세한 정보를 출력해준다. 예를 들면 Architecutre, Version, Multi-Arch같은 정보도 보여준다.

- apt-get install [패키지명] : 이 명령은 추가하고 싶은 패키지를 알아서 다운받아주는 일을 한다. 

- apt-get upgrade : 이 명령은 package의 새로운 버전이 존재한다면 그 버전으로 추가 시켜주는 역할을 한다.

- apt-get autoremove : 지금은 존재하지 않는 패키지에 dependencies를 가지는 packages와 libs를 삭제한다.

- apt-get remove : 이 명령은 패키지를 삭제하는 역할을 하는데 해당 패키지를 위한 설정파일들은 남겨놓은 채로 삭제한다.

- apt-get purge : 이 명령은 패키지를 삭제하면서 패키지의 설정 파일까지 함께 삭제해주는 역할을 한다.

## 3. APM이란? 

웹서버 구축에 제일 중요한 3개 요소인 웹서버 종류, 서버사이드스크립트 종류, 데이버 베이스 종류를 결정해야하는데 APM은 이 중 가장 흔히 쓰이는 조합을 말한다.

A는 Apache라는 웹서버의 한 종류이고, 
P는 PHP라는 서버사이드스크립트의 한 종류이며, 
M은 mySQL이라는 데이터베이스의 한 종류를 의미한다. 

## 4. APM 설치하기

a. 자신의 PC에 웹 서버 설치 후, 설치 확인 화면(터미널에서 확인/브라우저 확인)을 캡처하시오.

![사진]()https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/1.png

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/2.png)

b. MYSQL을 설치 후 mysqld가 시작되었는지 터미널에서 확인하라

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/3.png)

c. PHP7을 설치한 후, <?php phpinfo(); ?>를 저장하여 제대로 나오는지 화면 캡처하시오. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/4.png)

d. Phpmyadmin을 설치한 후, 브라우저에 제대로 나오는지 확인하여 화면 캡처하시오. A. http://127.0.0.1/phpmyadmin/

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/5.png)

e. apache를 시작/중지하는 방법은? 

sudo /etc/init.d/apache2 restart 명령을 이용해서 apache2를 중지 후 다시 실행해주고
service apache2 start 명령을 이용해서 apche2를 시작하고
service apache2 stop 명령을 이용해서 apache2를 중지한다

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/6.png)

9. 홈 디렉터리 변경해 보기 (/var/www/html2)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/7.png)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/8.png)

10. SSH Server 구축하고 putty를 통해 접속한 화면과 우분투 화면을 한 화면으로 캡처하시오.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/APT-APM/9.png)

