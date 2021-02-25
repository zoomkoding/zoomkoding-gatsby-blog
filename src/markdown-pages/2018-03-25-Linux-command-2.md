---
title: (Linux Week 1st) Linux Command 정리2
layout: post
date: '2018-03-25 02:00:00'
author: 줌코딩
tags: 리눅스 리눅스명령어 Linux CommandLine Command
cover: "/assets/instacode.png"
categories: linux
---


후우 지난 번 CH 1~ 4을 정리하면서 기본적인 Command를 정리해보았다. 중요한 건 아직도 정리할 내용이 수두룩하게 쌓여있다는 거! 공부할 것이 많다는 사실에 짜릿함을 느낀다>< 

다시 자세 교정하고 정신줄 잡고 달려보자. 스아압!~~


## CH 5. Working With Commands

이 챕터에서는 여태까지 배운 왜 존재하는지 모를 커맨드들을 조그음 이해해보려고 한다.

이 챕터에 있는 여러 커맨드를 소개하기 전에 커맨드가 무엇인가에 대해 한번 논해보자...(머리아플각이다)

일단 커맨드는 크게 4종류로 나뉜다.
a. An executable program. (컴퓨터 언어로 쓰여진 컴파일 가능한 파일을 의미한다)
b. A command built into the shell itself. (bash가 지원하는 커맨드를 shell builtins라고 한다. Ex. cd)
c.  A shell function. (environment에 incorporate된 작은 shell script(?)) -추후에 배운단다..
d. An alias. (우리가 정의하는 커맨드다.)

잘모르겠지만 일단 고고!!

#### 1. type  

이 친구는 shell builtin으로 command의 종류를 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/1.png)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/2.png)


#### 2, which

이 친구는 executable의 정확한 로케이션을 알려주는 역할을 한다.
단, executable program에만 알려준다!!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/3.png)

cd는 executable이 아니니까 응답이 없다.. 뭔가 에러 얘기도 안나오니까 기분나쁨...

#### 3. help

bash가 지원하는 shell builtin에 대한 도움말이다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/4.png)

근데 이거 bash에는 도는데 putty에 안된다..;; 뭐지... 확인해봐야할듯 하다.
일단 동의어로는 cd --help가 있다..;; 이거 쉅 때는 됐는데 왜 안되지;;

#### 4. man

매뉴얼을 보여주는 역할을 하는 친구다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/5.png)

매뉴얼에 섹션이 나뉘어져 있는데 그 섹션번호를 입력하면 손쉽게 그 부분의 매뉴얼을 볼 수 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/6.png)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/7.png)

내가 아는 ls , pwd는 section이 한개라 일단 1로 해보자;;

#### 5. apropos

이 친구는 manual 중에서 해당 단어가 있는 곳을 찾아주서 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/8.png)

#### 6. whatis

이건 말 그대로 커맨드의 이름과 한줄 설명이 나온다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/9.png)

#### 7. info

이 친구는 프로그램의 info entry를 열어서 보여준다.
꽤 상세하고 리더를 위해 충분한 설명이 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/10.png)

#### 8. alias

내 고유의 command를 만들어주는 친구이다.

이거 하기전에
꿀팁!! 커맨드 여러개를 한줄에 치려면 커맨드 사이에 ; 를 입력하면 된다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/11.png)

여기서 alias를 사용해보자!
먼저 커맨드 이름을 검색해보자 type을 이용해서 확인이 가능하다.
만약 입력한 이름에 해당하는 커맨드가 없다면 바로 ㄱㄱ

    alias [command 명] ='~~;~~'

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/12.png)

여기서 = ' 사이에 띄어쓰기 하면 안된다!

지우고 싶을 때는 unalias 커맨드명 하면 된다!

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/13.png)

그냥 alias를 입력하면 만들어진 모든 alias들이 보인다

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/14.png)

Alias는 세션이 종료되면 없어진다... 그럼 매번 설정해줘야 하는 건가... 암튼 일단 여기까지 6장 이었다.

## CH 6. Redirection

이번 챕터에서는 input과 output을 한번 바꿔보자 여지껏은 지정된 커맨드에 해당되는 input과 output 출력을 실행해보는게 다였지만 이번엔 한번 우리가 output이 입력되는 위치를 바꿔보자 ㅎㅎ

**Redirecting Standard Output**
일단 예시 한번 보고 가자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/15.png)

    $ ls -a /usr/bin > /home/u21500670/example.txt
여기를 보면 ls -a 라는 커맨드의 결과를 example.txt로 출력하라는 것을 의미한다. 이때 스크린 상에는 출력하지 않게 되는게 특징이다!!

그런데 만약에 앞에 커맨드에 해당하는 결과가 에러가 난다면?? 그럼 좀 당황스러운데.. 에러값이 example.txt로 들어갈까? 함 돌려보자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/16.png)

에러 내용이 스크린 상으로 입력되었다. 그리고 파일의 용량이 0으로 보아 txt파일 자체는 쓸 준비를 했는데 내용이 들어오지 않은 것 같다.

똑똑하다 ㅋㅋ 그렇다면 엠티파일을 만들 때 redirection operator를 써도 될 거 같은데 ㅎㅎ

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/17.png)

된.다.

근데 만약에 overwrite안하고 그냥 뒤에 덧붙이고 싶으면 어떻게 해야할까 ㅎㅎ
이때 사용하는 것이 >> 이다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/18.png)

example1.txt 용량 커진거 보소:)

**Redirecting Standard Error**
만약에 에러값을 보내고 싶으면 어떻게 할까?
에러를 입력하려면 텍스트 파일 앞에 있는 operator 앞에 2만 붙여주면 된다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/19.png)

**Redirecting Standard Output And Standard Error To One File**
모든 결과물을 single file에 넣고 싶을 때 두가지 방법이 있다.
하나는 2>&1 notation을 이용하는 방법이다

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/20.png)

또 다른 방법은 &>라는 notation을 이용해서 인풋과 아웃풋을 모두 받는 방법이 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/21.png)


**Disposing Of Unwanted Output**
결과가 항상 필요한 것은 아니다. 사실 에러 메세지나 상태 메세지는 버리고 싶을 때가 있다. 이때는 이것을 보내는 것이 /dev/null이다
쓰레기통 같은 개념인거 같다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/22.png)


**Redirecting Standard Input**
이번에는 input을 어떻게 다른위치로 보낼 수 있는 지 알아보자

#### 1. cat
이 친구는 하나 이상의 파일을 읽고 standard output에게 복사해준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/23.png)

그냥 cat을 하면

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/24.png)

이렇게 커서가 밑으로 내려가서 입력을 받는다. 이때 문장을 쳐주고 ctrl d 하면 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/25.png)

이렇게 나온다. 왜 한번더 반복하냐면 input을 받아서 보낼 곳이 없어서 그냥 스크린에 보여준 것이다.

그렇다면 이번에는 
파일을 만들어서 그 안에 input을 넣어보자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/26.png)

이렇게 cat > [파일명] 을 입력하면 뒤에 입력한 text가 파일 안으로 쏙 들어가게 된다.

확인해보자.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/27.png)

그렇다면 cat < [파일명] 이 된다면 결과는 뭐가 나올까?

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/28.png)

동일하다! 왜? 이것은 키보드로 부터 input을 받은 것이 아니라 텍스트 파일로 부터 input을 받은 것이기 때문에 cat [파일명]과 동일한 값을 출력한다.

여기서 집고 갈 <pipe line>
파이프라인은 | 를 이용하여 하나의 output과 input의 커맨드를 묶을 수 있게 해준다.

#### 2. 필터
이거는 pipe line을 굉장히 많이 사용한다고 보면 된다. 필터는 input을 받아서 어떻게 좀 바뀐 내용으로 output하는 역할을 한다. 

그중 자주 쓰이는 sort를 한번 배워보자
a. sort
이 친구는 파이프라인에서 이용하면 data를 하나의 분류된 list로 만들어 준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/29.png)

이렇게 치면...

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/30.png)

이렇게 알파벳 순으로 정리된 내용의 data가 출력된다.

b. uniq
이 친구는 sorted data에서 반복된 내용이 있으면 삭제해 주는 역할을 한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/31.png)

이렇게! 끼워주면~ uniq 알아서 sort된 내용에서 반복되는 내용을 삭제해준다!
근데 만약에 역으로 반복된 내용만 보고 싶다면 uniq -d를 이용하면 된다!


c. wc
이 친구는 줄, 단어, 바이트 수를 보여주는 역할을 한다.
(-l을 붙이면 라인수만 보여준다)

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/32.png)

d. grep
이 친구는  파일 내에 있는 텍스트 패던을 찾아주는 역할을 한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/33.png)

e. head / tail
이 친구들은 파일의 첫 10줄, 뒤에 10줄을 출력해주는 역할을 한다. 
-n을 사용 시에는 원하는 양 만큼의 라인을 출력할 수 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/34.png)

f. tee 
스탠다드 인풋을 읽고 이것을 스텐다드 아읏풋과 여러 파일에 복사한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Linux-command/2/35.png)
