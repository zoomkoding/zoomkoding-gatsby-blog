---
title: (Linux Week 2nd) Linux Command 정리3
layout: post
date: '2018-03-31 02:00:00'
author: 줌코딩
tags: 리눅스 리눅스명령어 Linux CommandLine Command
cover: "/assets/instacode.png"
categories: linux
---


이번에는 조금 더 많이 정리를 해보려고 한다. 7~10장 까지 총 4챕터를 순식간에 정리할거니까 눈 똑바로 뜨고 정신 똑띠 차리고 가즈아.

## CH 7. Seeing The World As The Shell Sees It
이번 챕터에서는 엔터키의 매직에 배운다고 한다. 나도 잘 모르겠지만 일단 들어가보자.

#### 1. echo 

이 친구의 역할은 텍스트 문장을 보여주는 것이다.
문장을 입력하고 엔터를 치면 그 문장을 출력하여 준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/1.png)

근데 또 신기한거는 echo 치고 *를 입력하면 현 위치에 있는 파일의 이름을 다 출력해준다.
왜냐하면 와일드카드에서 봤듯이 *는 * 이전까지 타입한 내용과 filename과 일치하는 것을 찾아준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/2.png)

echo는 ~와 함께 사용하면 home directory를 나타내는데 사용되기도 한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/3.png)

echo는 $((expression))와 함께라면 연산도 한다!!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/4.png)

심지어 문장 속에서도 연산이 가능하고 같이 출력이 된다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/5.png)

echo 를 {}랑 함께 사용하면서 중간에 ..을 넣으면 그 사이에 잇는 것들이 다 출력된다고 한다!!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/6.png)
![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/7.png)

신기하다...

echo 뒤에 $username하면 그 이름을 출력해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/8.png)

echo $(command)를 이용하면 command의 outpput을 expansion으로 나타낼 수있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/9.png)


그래서 pipeline처럼 사용이 가능하다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/10.png)

echo는 띄어쓰기가 두개이상 하면 안되고, $을 달러싸인으로 쓸라그러면 안된다. 
그래서 이때 필요한게 quotation mark '', ""이다!!
" " 사이에 있는 embeded space는 인정해준다!! 신기방기!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/11.png)

그럼 이걸 한번 보고 생각해보자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/12.png)

왜 echo $(cal)이랑 echo "$(cal)"이랑 저렇게 다른 값을 출력할까
정답은 cal을 수행하고 출력하는데 space와 newline은 생략되었었는데 ""가 부활시켜줬다..!
그렇다면 
'' quotation mark 를 생각해보자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/13.png)

일단 이거보고 가자 " " 을 통과한 내용은 모두 그 command를 따라서 진행된다 하지만 expansion을 모두 막으려면 single quote를 사용하면 된다. 하나도 진행된거 없이 다 고대로 출력 ㄷㄷ...

그리고 $같은 친구들도 출력하고 싶으면 어떡해? 그럼 앞에 \를 붙여주면 된다. 이런 친구들은 "$", "!", "&", " " 같은 친구들을 말한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/14.png)

신기합니다.

## CH 8. Advanced Keyboard Tricks

그럼 우리 이번에는 좀 더 게을러져 보자
일단 신기한거 부터 
clear하면 화면이 정돈된다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/15.png)

그리고 history하면 history list 의 contents를 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/16.png)

신기신기...
그럼 본격적으로 시작해보자!
마우스 안쓰고 키보드로 커서 위치를 지정해줄 수 있다는데 키워드 알려주면 직접해보기 바란다. 이건 뭐 스크린샷이 안되니 어쩔수없지;;

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/17.png)

이건 텍스트 위치를 지정해주는 역할을 한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/18.png)

그리고 신기한거 해당 폴더에 있는 것들 중에서 이름 다 치기 싫으면 첫글자나 적당히만 입력하고 탭키를 누르면 나머지 정보 알아서 입력된다. 신기...!!

이번엔 history 에 대해 해보자
history는 우리가 입력했던 command 를 순서대로 보여준다. bash는 우리가 로그인 후 입력했던 500개의 command까지 기억해놓는데 history를 입력하면 그 모든 command가 번호화 되어서 나온다!
그래서 여기서 pipeline을 이용하여 grep을 한다면 검색도 가능하다

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/19.png)

또한 위와 같이 ! 하고 히스토리상에 숫자를 입력해주면 그때 사용했던 command가 고대로 진행된다.

그리고 또 신기한 것은 ctrl + r 을 하면 최근에 사용한 command를 search할 수 있도록 도와준다 예를 들면 내가 history라고 치면 최근에 history라는 문구가 포함된 command가 검색되어 enter만 치면 바로 실행 가능케 해준다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/20.png)

이상으로 CH  8은 마친다.

## CH. 9 Permission

이 챕터에서는 OS의 여러 유저가 사용가능하다는 특징을 이해하기 하고 그 시스템 보안 문제를 어떻게 command를 이용하여 해결할지 나와있다. 약간 이해하기 어려울 것 같은 컨셉이지만 일단 들어가보자.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/21.png)
![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/22.png)



위에 명령어와 같이 우리는 /etc/shadow를 열고 싶은데도 permission이 deny되어서 열지 못하는 경우가 생긴다. 
Unix에는 세가지 형태의 그룹이 존재한다. 먼저는 user본인, 그리고 acess를 가진 그룹, 그리고 everybody를 의미하는 world.
그래서 내가 누구인지 보려면 id를 입력해보면 된다.

#### 1. id

id는 내가 누구인지 알려준다

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/23.png)

현재 나는 뭐한게 없어서 일단 처음에 부여받은 숫자만 존재한다, 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/24.png)

근데 교재에서 예시같이 여러 그룹에 속할 수 있다!!

그럼 이번에는 우리가 가질 수 있는 권한에 대해 알아보자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/25.png)

일단 foo 라는 text 파일을 만들어서 그 파일의 형식을 봤더니 맨 앞에 10자리로 뭔가 나온다.
일단 맨 앞자리는 파일의 타입을 나타낸다. 
- : 그냥 regular file
d : directory
l : symbolic list
c : character special file
b : black special file

이란다...ㅎㅎ

그리고 나머지 9 자리는 3자리씩 끊어서 owner, group world 이렇게 세 그룹의 권한을 보여준다.

rwx순인데 r은 파일을 열고 읽을 수 있는 권한, w는 파일을 쓰고 수정할 수 있는 권한, x는 파일을 수행할 수 있는 권한을 의미한다.

이때 이 권한을 바꿔주고 싶으면 chmod를 사용하면된다.

#### 2. chmod

이 친구는 permission을 바꿔주는 역할을 한다. 이때 숫자는 이진수를 사용하여 3자로 나타낸다. 왜? 하나는 본인, 하나는 그룹, 하나는 전체를 위해서다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/26.png)

foo.txt를 666해줬더니 6은 이진수의 110이므로 rw는 가능하게 하되 x은 불가하게 해놨다. 

#### 3. umask

이거는 permission을 최초 파일이 생성됐을 때의 상태로 돌리는 것이다.

굳이 해야될 필요는 없다는데 일단 해보자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/27.png)

오케이 일단 넘어가서

우리의 identity를 바꾸는 걸 해보자
identity 바꾸는 방법에는 3가지가 있다.
a. 로그아웃해서 다시 로그인하기!!
b. su command 사용 하기
c. sudo command 사용 하기

#### 4. su

su는 다른 유저로 시작하고 싶을 때 사용 한다.
su -c 'command' 하면 로그인 후에 바로 command 를 수행해준다.

#### 5. sudo 

sudo는 su와 비슷한 역할을 하지만 그냥 평병한 유저를 superuser 역할을 할 수 있게 해준다.

이 방법들은 다른 계정을 하나 알아야 한번 해보는게 용이할 듯하다!!


####  6. chown

이 친구는 파일이나 디렉토리의 owner/ group owner를 바꿔주는 역할을 한다. 
이 기능은 superuser만이 가능하다.
자꾸 내가 sudoer가 아니라서 못한다고 하는데ㅠㅠ 아숩다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/28.png)

일단 위 예제를 통해서 용법만 집고 넘어가면 chown을 통해서 tony에게 권한을 넘겨주었다.

#### 7. chgrp

이친구는 그룹의 권한을 바꿔주는 역할을 한다. 원래 예전에는 chown이 그룹까지는 못바꿔서 이 친구가 그 역할을 해줬다고 한다.

#### 8. passwd

이 친구는 비밀번호 바꿔주는 역할을 한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/29.png)

이렇게! 비밀번호 안바꾼다니까 다시하라고한다...ㅎㅎㅎ

## CH 10. Processes

이 챕터에서는 무슨 프로그램이 돌고 있는지 알려주는 그리고 잘못 작동하고 있는 process를 끝내는 command에 대해 배워본다고 한다.

여기서 일단 집고 가야할 것 kernel이라는 친구가 일단 컴퓨터를 키면 init이라는 process를 진행한다. 컴퓨터는 이미 많은 program이 백그라운드에 깔려있어 로그인 하지 않아도 user interface 없이 알아서 루틴을 뛰고 있다. 
여기서 프로그램이 다른 프로그램을 실행 시키는 것을 a parent process와 a child process 라고 표현한다. 
kernel은 process에 id를 매겨서 기억한다 심지어 각 process의 메모리를 기억한다고 한다.

### Viewing Process

#### 1. ps

이 친구는 프로세스를 볼 수 있게 해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/30.png)

여기 나온 PID가 process의 ID이다.  여기서 Time은 CPU가 process를 진행하기까지 필요한 시간이다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/31.png)


ps x와 ps aux를 하면 더 많은 정보를 볼 수 있다.

#### 2. top

ps는 딱 한순간에 machine이 하는 일을 알려주지만 top는 dynamic하게 machine activity를 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/32.png)

이거 계속 바뀐다. 3초에 한번씩 업데이트를 해준다고 한다. 
h를 누르면 help가 뜨고 q를 누르면 top을 종료시켜준다.
사실 우리가 ctrl+alt+del 치고 나오는 거보다 이걸로 process보는게 낫다
왜냐면 이걸로 보는게 훨씬 용량을 덜 잡아먹고 사실 그 system monitor program이 system을 느리게 해서는 안되기 때문이다!!

그럼 본격적으로 이제 process를 우리가 컨트롤해보자.

#### 3. jobs 

이 친구는 현재 작동하고 있는 실제 jobs를 표시해준다

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/33.png)

현재 내 피씨에 active 한 program이 없어서 보여주지는 못하고 있는데 그래도 있다면 밑에 그 job의 이름을 나타내준다.

#### 4. bg

이 친구는 현재 작동하고 있는 프로세스를 잠깐 멈추고 싶을 때 사용한다. 지금 foreground에 있는  process를 background로 이동시키는 역할을 한다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/34.png)

이렇게 %1을 이용하여 background로 이동시키면 멈춘다.
그리고 다시 foreground로 이동시키고 싶을 때는 fg 를 이용하여 process를 앞으로 이동시키면 된다.

#### 5. fg

이 친구는 현재 background에 있는 process를 foreground로 이동시키는 역할을 한다. 그래서 다시 foreground에서 작동할 수 있게 해준다.
여전히 no such job 이라는 메세지..ㅠ 아쉽지만 일단 가보자


#### 6. kill

이 친구는 말그대로 프로그램을 terminate할 때 사용한다. 프로그램을 실행하면 그 파일의 PID가 나오는데 그때 kill command 뒤에 PID를 입력하면 해당 PID를 죽일 수 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/35.png)


#### 7. killall 

이 친구는 a program이 여러개 돌아가고 있다면 이 killall 하나로 프로그램을 다 끌 수 있다. 예를 들어 xlogo가 현재 구동중이라면 "killall xlogo"라는 command하나로 모든 xlogo프로그램을 종료할 수 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/3/36.png)
