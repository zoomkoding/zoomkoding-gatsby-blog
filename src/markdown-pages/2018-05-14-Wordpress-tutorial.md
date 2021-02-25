---
title: (워드프레스-2) 도메인 변경과 Ubuntu에 Wordpress로 웹페이지 개설하기
layout: post
date: '2018-05-14 02:00:00'
author: 줌코딩
tags: DNS 도메인바꾸기 Wordpress설치 웹개설 워드프레스설치 Web개설
cover: "/assets/instacode.png"
categories: wordpress
---


## 1. DNS란 무엇인가? (약어 및 설명)

DNS는 Domain Name System의 약어로 사람이 이해하기 쉬운 도메인 이름을 숫자로 된 IP주소로 변환한 것을 의미한다.

## 2. 브라우저에서 DNS 방식

www.naver.com이라는 URL을 입력했을 상황을 가정해보자!

a. 먼저 Cache에 www.naver.com이 있는지 확인하고 있으면 접속한다.  
b. hosts 파일에 있는지 확인하고 있으면 접속한다.
c. Local DNS에 URL을 요청하고 정보 없으면 Root DNS에 요청한다.
d. Root DNS에  정보가 없다면 local DNS에 com DNS 정보를 제공한다.
e. Local DNS에 com DNS에 요청하는데 이때도 없다면 local DNS에 naver.com DNS 정보를 제공한다.
f. naver.com DNS에 www.naver.com을 요청한다.
g. naver.com DNS는 Local DNS에 www.naver.com 도메인에 대한 IP 정보를 준다.
h. Local DNS는 사용자에게 네이버 도메인에 대한 IP 정보를 준다.
i. 사용자는 Web Browser에 www.naver.com 사이트를 접속한다. 

## 3.도메인을 도메인서버에 등록하지 않고 현재 리눅스 서버에 있는 가상 도메인을 접속하기 위해서 해야하는 작업은? 

도메인을 도메인 서버에 등록하지 않고 가상 도메인을 이용해서 접속하려면 hosts 파일을 수정해주면 된다. 
hosts 파일이란 각 OS에서 간단히 DNS의 설정을 제공해주는 파일로 호스트 이름을 IP주소에 맵핑할 때 사용하는 파일이다.

내용을 보면 일반적인 text파일로 되어있는데 관리자 권한으로 실행하여야 수정이 가능한데

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/1.png)

다음과 같은 텍스트 파일에 원하는 가상 도메인 정보를 입력하여 준다.
나는 127.0.1.2 라는 ip주소에 jin.ya.ho라는 도메인 정보를 입력해주었다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/2.png)

firefox에 해당 ip주소로 접속해보면 원하는 도메인의 내용이 출력되었음을 볼 수 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/3.png)



## 4. 내 컴퓨터의 OS 및 hosts 파일은 어디에 있는가?  

#### a. Windows인 경우에는
windows/System32/drivers/etc에 hosts파일이 존재한다.

#### b. Mac OS인 경우에는
/private/etc에 존재한다.

hosts file을 수정하려면 hosts파일을 관리자 권한으로 실행해야한다!

## 5. VirtualHost는 무엇인가?

VirtualHost는 하나의 서버에서 한 개의 사이트 말고 여러 개의 웹 사이트를 서비스할 수 있도록 해주는 역할을 한다.

## 6. VirtualHost 설정하는 방법 두 가지는 무엇인가? 

설정하는 방법은 크게 두가지로 나뉜다.

a. Named-based Virtual Host
일명 이름 기반의 가상 호스트라고 불리는데 하나의 ip주소에 여러 개의 이름을 가지게 하는 방식이다.

예를 들면,
192.168.0.1 이라는 ip 주소에 
helloworld1.com, 
helloworld2.com
라는 두개의 이름을 설정하는 것이다.

b. IP-based Virtual Host
일명 IP address 기반의 가상 호스트라고 불리는데, 각 웹 사이트 마다 다른 IP address나 port를 가지는 방식이다.

(1)IP address를 달리하는 방법
helloworld1.com -> 192.168.0.1,
helloworld2.com -> 192.168.0.2 
로 설정하는 방법이다.
(2)port를 달리하는 방법
helloworld1.com -> 192.168.0.1:80
helloworld2.com -> 192.168.0.1:8080 
로 설정하는 방법이다.



## 7. 기존에 있는 사이트 외에 새로운 도메인으로 VirtualHost 설정을 위한 Steps

새로 등록하려는 도메인명 : 192.168.56.101
새로 등록하는 사이트 홈디렉터리 : jin.ya.ho

먼저 새 웹사이트를 위한 디렉토리를 구성한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/4.png)

디렉토리 내에 index.html을 생성하고 그 내용을 다음과 같이 설정해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/5.png)

다음은 새 사이트를 위한 Virtual Host를 설정해준다. 
/etc/pache2/sites-available 속에 있는  000-default.conf 파일을 복사하여 jin.ya.ho.conf 파일을 생성한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/6.png)

그리고 해당 파일 내용 속 ServerName, DocumentRoot를 설정하고 싶은 home directory명과 index.html 파일이 있는 디렉토리로 입력해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/7.png)

이제 새로운 Virtual Host 설정파일을 등록해주는데 이것은 /etc/apache2/sites-enabled에 등록해준다.
a2ensite 명령을 이용하면 손쉽게 등록이 가능해진다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/8.png)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/9.png)

a2ensite 명령을 이용하면 자동으로 site-enabled 디렉토리에 conf파일이 생성된다. 

그리고 마지막으로 /etc/hosts를 수정해준다.
내가 원하는 도메인명과 홈디렉토리명을 입력해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/10.png)

그리고 제대로 생성 됐는지 확인해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/11.png)
![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/12.png)

짜잔! 도메인과 홈디렉토리명을 내가 설정하여 웹사이트를 구성해보았다!

## 8. 내 컴퓨터에서 DNS Server에 등록되지 않은 도메인을 실행시키기 위해 작업해야 하는 것이 무엇인지 설명하시오.

DNS Server에 등록되지 않은 도메인을 수행하기 위해서

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/13.png)

내 mac 아래에 있는 hosts 파일을 수정해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/14.png)

그럼 내 피씨에서도 해당 ip주소를 입력 시에 웹페이지가 열린다!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/15.png)



## 9. 우분투에서 사용자를 추가하는 방법에 대해 쓰시오. 
사용자를 추가하는 명령어로 두가지가 있다. 
- adduser : 이 명령어는 user를 생성하고 user에 해당하는 비밀번호와 각종 정보를 입력 받는다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/16.png)

- useradd : 이 명령어는 user를 생성하지만 비밀번호나 다른 정보는 입력 받지 않는다.
- userdel : 이 명령어는 생성했던 user를 삭제한다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/17.png)

10. Wordpress 설치하는 방법에 대해 단계별로 설명하시오(화면캡처 제출) 

먼저 새로 생성된 계정의 홈 디렉토리로 이동한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/18.png)

이동한 후에 최신 위드프레스를 다운로드하고 압축을 푼다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/19.png)

풀고 난후 압축 파일을 삭제한다!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/20.png)

위드프레스 설정 파일을 복사하고 내용을 수정한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/21.png)

그리고 내 MySQL에 로그인 한 후 
위드프레스용 DB를 생성하고 
DB계정 생성하고 
모든 DB 및 테이블에 접근 권한을 설정하고 
설정한 권한을 적용한 후 종료한다!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/22.png)


이제 wordpress의 소유자와 권한을 변경해주고 apache를 다시 시작한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/23.png)

Firefox를 이용하여 접속하면 웹사이트를 개설하라는 메세지가 뜨는데 여기를 따라서 완료하면!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/24.png)

나만의 웹사이트가 열린다!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Wordpress/25.png)


워드프레스 계정 id: 21500670
홈디렉터리 : wordpress.ya.ho/wordpress
