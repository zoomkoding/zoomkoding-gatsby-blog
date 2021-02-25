---
title: (Linux Week 1st) Linux Command 정리1
layout: post
date: '2018-03-22 02:00:00'
author: 줌코딩
tags: 리눅스 리눅스명령어 Linux CommandLine
cover: "/assets/instacode.png"
categories: linux
---

Linux를 배우기 시작한 지 일주차.. 이제 막 Putty를 깔고 여러 기초적인 command를 직접 써보고 있다. 아직 낯설고 뭐가 뭔지 모르겠다. 이럴 때 일 수록 기본 개념 정리부터 들어가자. 
지금부터 정리하는 개념은 교재 Linux Command Line의 내용을 인용했다.

음음.. 먼저 로그인부터 갑시다. Putty 켜고 호스트 네임 입력하고 들어왔다. 아이디랑 비밀번호 입력하면.. 로그인 성공!!
비밀번호 칠 때 칸이 안움직인다고 당황하지 말자.. 그냥 패스워드 치면 되는거다.(패스워드는 안보이는 게 당연한 건데 왜 안보이는지 의문을 가졌다면 당신은 나와 같은 바보인걸로^^)


![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/1.png)

자 시작해보자. ch1은 introduction이니 읽어볼 시간이 있으면 한번 보는 걸로^^

## Chapter 2.  Shell
Shell이란 키보드 커맨드를 OS가 이해할 수 있게 전달해주는 프로그램이라고 한다.
저기 로그인 화면에서 보이는 $사인이 Shell을 상징한단다!! 그럼 다른 건 모르겠고 기본적인 커맨드 입력부터 가보자.


#### 1. date

이 친구는 현재 시간이랑 날짜를 보여주는 역할을 한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/2.png)

#### 2. cal

이 친구는 이번 달의 달력을 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/3.png)

#### 3. df

이 친구는 현재 디스크 드라이브의  free space를 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/4.png)


(저기 저 permission denied 가 거슬리지만... 일단 넘어가보자)

#### 4. free

이 친구는 df와 비슷하게 free memory의 양을 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/5.png)


#### 5. exit

이 친구는  terminal session을 종료하는 수단으로, 세션 종료 방법으로는 그냥 창을 닫거나 exit을 입력하는 것 두가지 방법이 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/6.png)

이거 치면 나가지니 결과물은 없는 걸로^^

## Chapter 3. Navigator


앞에 쉬운 개념들로 호기심 자극 했으니 이제 본격적으로 들어가보자.
무엇보다 먼저 배워야하는 것은 리눅스에 있는 파일을 찾는 방법이다. 

Linux도 Windows 와 마찬가지로 디렉토리(파일과 비슷)가 트리형태의 구조를 하고 있다. 그리고 역기서 첫번째 디렉토리를 root directory라 하는데 여기에는 file과 subdirectories들이 들어있다.
Linux는 file system tree가 각각 있는 Windows와 달리 하나의 file system tree으로 구성되어 있다. 
그럼 이때 우리가 쓸 수 있는 커맨드를 알아보자.

#### 1. pwd

이 친구는 현재 위치한 디렉토리를 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/7.png)


현재 내가 속한 위치는 home에 안에 있는 u21500670이라는 디렉토리라는 것을 보여준다.

#### 2. ls

이 친구는 현재 위치한 디렉토리에 있는 파일과 디렉토리를 리스팅해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/8.png)


현재 내가 속한 u21500670 디렉토리를 속에는 examples.desktop, gitroom, test 가 있다고 보여주고 있다.

#### 3. cd

이 친구는 working directory를 바꾸고 싶을 때 사용한다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/9.png)


여기서 집고 넘어가야할 것 
Absolute Pathnames vs. Relative Pathnames 

Absolute Pathname은 root directory부터 원하는 디렉토리까지의 모든 branch를 의미한다.  
Relative Pathname은 현재 위치한 디렉토리부터 원하는 디렉토리까지의branch를 의미한다. 
Relative Pathname에 "."과 ".."을 사용하기도 하는데 "."은 현재 working directory를 의미하고 ".."은 현재 working directory 바로 상위 directory를 가르킨다. 

예를 들어보자
Absolute Pathname - 
/home/u21500670/gitroom/git_room/2048_JAVA/javasrc 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/10.png)


Relative Pathname- 현위치가 /home/u21500670이라면 
./gitroom/git_room/2048_JAVA/javasrc와 같다. 
두 Pathnames는 브랜치를 시작하는 지점이 다르다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/11.png)

####  cd other Shortcuts
cd - : 방금 전 working directory로 이동한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/12.png)


cd ~user_name : working directory가 다른 유저의 home directory로 바뀐다. 이건 아직 다른 유저 계정을 모르기에 일단 넘어가자.


## Chapter 4. Exploring The System
리눅스 시스템에 대해 본격적으로 시작하기 전에!! 기초 배웠는데 응용안하면 섭하다. 배운 

#### 1. ls 응용

ls 디렉토리_이름 : 해당 디렉토리에 있는 파일과 디렉토리를 리스팅

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/13.png)


ls 디렉토리_이름 디렉토리_이름 : 디렉토리 여러개도 띄워진다.
(~는 홈을 의미한단다.)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/14.png)

ls -l : 리스팅 되는 내용이 긴 포맨으로 나온다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/15.png)


ls -a : 모든 파일을 리스팅한다.(period로 시작하는 숨겨진 파일까지)
ls -F : 리스트 되는 파일명 끝에 indicator character을 넣어준다. 예를 들면 디렉토리 뒤에 /를 추가하여 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/16.png)


ls -h : 파일 사이즈가 사람이 이해할 수 있게 보여준다.
ls -r : 결과를 역순으로 보여주기
ls -s : 결과를 사이즈 순으로 보여주기
ls -t : 파일 수정 시간 순으로 보여주기

여기서 long listing fields를 보면 알아야할 것들이 여러개 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/17.png)


-rw-r--r-- : 첫 캐릭터는 파일 타입을 의미한다. 디렉토리이면 앞이 d로 시작한다. 뒤에 세개는 file owner가 가지고 있는 권한들이다. 그 뒷 세개는 파일 그룹에게 있는 권한, 그 다음 3개는 모두가 가지고 있는 권한을 나타낸다.
1 : hard links에 있는 파일 번호.
u21500670 : file owner의 유저네임.
u21500670 : file 소유한 그룹명.
8980 : 사이즈(byte).
10월 4 2013 : 마지막으로 편집된 날짜.
example.desktop : 파일명

#### 2. file 

이 친구는 파일의 컨텐츠를 보여주는 역할을 한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/18.png)


#### 3. less 

이 친구는 text 파일을 볼 수 있게 해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/19.png)


exit은 q를 이용한다.

## Chapter 5. Manipulating Files And Directories
많이 왔다. 본격적으로 디렉토리를 좀 건드리려한다. 
그럼 일단 파일이랑 디렉토리를 다룰 자주 쓰이는 커맨드를 배워보자:)

#### 1. mkdir 디렉토리

이 친구는 디렉토리를 생성할 때 사용한다.
mkdir dir1 dir2 dir3 : 여러개의 디렉토리 생성도 가능하다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/20.png)


#### 2. cp item1 item2

이 친구는 파일이나 디렉토리를 복사할 때 사용한다.
사용법은 두가지이다.
a. cp item1 item2 : 파일 복사하기(item2가 없으면 새로 생성하여 복사한다)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/21.png)


b. cp item... directory : 파일(들)을 복사하여 입력한 directory로 복사한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/22.png)


cp -i item1 item2 : 파일이 존재할 경우 의사를 물어본다

#### 3. mv

이 친구는 파일명을 변경하거나 파일을 다른 디렉토리로 옮기는 역할을 한다.

a. 파일명을 변경할때,

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/23.png)


b. 파일을 다른 디렉토리로 옮길 때,

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/24.png)


#### 4. rm

이 친구는 파일이나 디렉토리를 지울 때 사용한다.(복수 가능)
디렉토리를 지우기 원한다면 반드시 -r를 사용해야한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/25.png)


#### 5. ln

이 친구는 hard나 symblic links를 생성한다.
hard link 생성시에는 ln file link,

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/1/26.png)



symbolic link 생성시에는 ln -s item link를 사용한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/27.png)




자 여기서 집고 넘어가야할 것!!

### Hard link와 Symbolic link의 차이점을 알아보자

hard link는 말 그래도 파일 자체와 같은 링크를 복사하여 만든다. 그래서 가르키고 있는 파일이 삭제되더라고 hard link 자체는 영향을 받지 않는다. 문제는 hard link가 속해있는 파일 시스템 밖에 있는 파일은 아예 받아오질 못한다.
symbolic link는 window의 shortcut과 같은 개념이라고 보면 된다. 링크가 생성되면 파일 포인터 같은 역할을 하기 때문에 만약 가르키는 파일이 없어진다면 symbolic link는 무의미해지진다!! 

후우.. 쉴새없이 달렸다. 조금은 이해를 한 것 같은데 link의 개념은 실제로 구현해보면서 연습해봐야 할 듯하다. 5과까지 달리느라 고생많았다!!
