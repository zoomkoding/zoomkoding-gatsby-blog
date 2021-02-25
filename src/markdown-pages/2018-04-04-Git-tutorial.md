---
title: Git 기초 배우기! (Git Tutorial 진행해보기)
layout: post
date: '2018-04-04 02:00:00'
author: 줌코딩
tags: Github Git tutorial 깃기초 깃튜토리얼
cover: "/assets/instacode.png"
categories: git
---


이번엔 Git을 이용하기 위한 여러 command를 한번 알아보자. github자체에 있는 연습 프로그램으로 한번 알아보도록 하자.

### 1.1 git init

이 명령어의 역할은 현재 우리가 있는 directory를 Git repository로 정하는 것이다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/1.png)

방금 과정을 통해서 우리가 있던 dir에 빈 repository가 생성되게 된다.

### 1.2 git status

이 명령어는 우리 현재 프로젝트의 상태를 나타내준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/2.png)

아직 잘 모르겠지만 일단 On branch master 이라는 상태와
initial commit 을 했다는 얘기 같고 아직 commit할게 없다는 얘기가 나온다. 
branch는 commit을 가르켜주는 움직이는 포인터라고 한다.
우리가 최초 commit을 만들면 우리는 master branch역할을 하게 된다. 

### 1.3 Adding & Committing

이제 우리 repository에 파일을 생성했다. 그럼 repository가 어떻게 바뀌나 한번 보자.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/3.png)

octocat.txt라는 untracked file이 표시된다. 여기서 untracked라는 메세지는 octocat.txt가 새로운 파일이라는 뜻이다.

### 1.4 Adding Changes

이 때 octocat.txt라는 파일의 변경되는 내용에 tracking 하려면 git add를 이용해 주면 된다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/4.png)

### 1.5 Checking for changes

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/5.png)

git add octocat.txt 를 입력한 후의 status를 확인하니 이제 changes to commit 이라는 메세지를 보여준다. 여기 리스팅 된 파일은 우리 repository에 아직 있지 않다. 그래서 repository에 저장하기 전에 stage에 추가했다 삭제했다가 가능하다.

### 1.6 Committing 

본격적으로 변경된 내용을 저장하려면 commit을 사용하면 된다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/6.png)

이제 committing을 통해서 변경 내용을 알렸다.

### 1.7 Adding All Changes

여기 새로운 directory를 하나 octofamily라는 dir을 하나 만들었다고 치자. 우리가 wildcard를 사용하면 더 많은 파일을 만들 수 있다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/7.png)

이렇게 입력하면 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/8.png)

이렇게 새로운 파일들이 stage위로 보여진다. 그럼 뭐해야될까!

### 1.8 Committing All Changes

또 다시 commit하면 된다. 이렇게 우리가 변경한 내용을 계속해서 기록해주는 것을 commit이라고 보면 될 것 같다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/9.png)

### 1.9 History

그럼 이제 여태까지 무슨 일이 있었는지 살펴보는 명령어에 대해 한번 알아보자
git log라는 명령어를 사용하면 현재까지 있었던 commit의 내용을 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/10.png)

### 1.10 Remote Repositories

좋다. 일단 그럼 우리가 좀 더 나아가서 Github에서 repository를 하나 만들었다. 우리의 local repo에서의 내용을 Github 서버에 올리기 위해서는 remote repository가 하나 생성 되어야 한다. git remote add를 이용해서 remote repository를 생성해보자.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/11.png)

### 1.11 Pushing Remotely

push는 git에 commits을 어디에 입력할지를 말해주는 역할을 한다. 그럼 변경한 local changes를 origin repo에 push하는 걸 한번 해보자.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/12.png)

여기서 우리의 remote 는 origin이고 현재 우리가 속한 local branch는 master라는 의미이고 -u는 깃이 우리가 준 parameter를 기억하게 하여 다음번에는 그냥 git push만으로 push가 가능하도록 해준다.

### 1.12 Pulling Remotely

이제 우리 repository가 github상에서 여러 유저가 이것저것 하지 않겠나! 그럼 우리는 이 changes를 pull 함으로 받아 낼 수 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/13.png)

### 1.13 Differences

방금 push해온 정보에 파일이 바뀌었다고 하는데 그럼 어떤 변화가 있었는지 우리가 한 last commit이랑 한번 비교해볼 수 있게 해주는게 git diff라는 명령어다. 
여기에서는 우리의 가장 최근 commit이랑 다른 점을 보고 싶어서 HEAD포인터를 사용한다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/14.png)

### 1.14 Staged Differences

위에 내용을 한번 보자. diff는 우리가 staged 해놓은 파일의 변경 내용을 확인할 수 있게 해주는 역할을 해준다.
그럼 git add 를 이용해서 octofamily/octodog.txt를 stage 상으로 올려보자 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/15.png)

### 1.15 Staged Differences

git diff --staged라는 명령어를 이용하면 방금 stage에서 있었던 일을 볼 수 있다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/16.png)

방금 추가한 octodog.txt 파일이 +++됐다고 적혀있는 것을 볼 수 있다.

### 1.16 Resetting the Stage

그럼 이번에는 octodog를 stage상에 있는 파일을 한번 내려보자! git reset이라는 명령을 이용하면 가능하다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/17.png)

### 1.17 Undo

방금전에 reset으로 octodog라는 파일이 stage상에서 사라졌는데 만일 방금 전에 했던 commit했던 지점으로 돌아가고 싶다면 git checkout --<target> 명령을 사용하면 된다.

### 1.18 Branching Out

개발자들이 작업을 할때 copy를 만들어 놓기도 한다. 이때 이 카피를 branch라고 하는데 여기서 작업을 하다가 master branch와 merge한다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/18.png)

### 1,19 Switching Branches

git branch를 입력하면 지금 있는 branch를 다 보여준다.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/19.png)

이때 나온 branch 중에서 하나로 switch하고 싶을 때는 git checkout <branch>를 입력하면 된다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/20.png)

### 1.20 Removing All The Things

clean_up branch로 이동한 상태에서 우리가 여기에 있는 파일을 삭제하고 싶다면 어떻게 해야겠는가? 이럴 때 사용하는 command가 git rm이다.
git rm는 파일을 삭제해줌과 동시에 파일이 삭제되는 것을 stage해준다. 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/21.png)

와일드카드 '*'를 이용해서 txt파일을 다 rm를 이용해서 삭제했더니 폴더에서 사라지고 stage에 그게 display 됐다!!

### 1.21 Commiting Branch Changes

일단 branch의 변경 내용을 commit해보자.

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/22.png)

### 1.22 Switching Back to master

지금 속해 있는 clean_up branch에서 master branch로 돌아가자 .

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/23.png)

### 1.23 Preparing to Merge

이제 그럼 여태까지 clean_up에서 했던 작업을 master branch로 merge 해보자! 

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/24.png)

결과물이다!! clean_up branch에서 파일 5개를 삭제 했던 것을 고대로 main branch에서도 수행하게 되었다. 신기하네...ㅎㅎ

### 1.24 Keeping Things Clean

그럼 이제 모든 작업이 끝났다. 이제 clean_up branch로 작업할게 다 끝났기 때문에 git branch -d를 이용해서 branch를 삭제해보자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/25.png)

### 1.25 The Final Push

이제 모든 작업이 다 끝났으니 우리가 했던 작업 내용을 remote repository로 push 하고 작업을 마무리하자

![사진](https://raw.githubusercontent.com/zoomKoding/zoomKoding.github.io/source/assets/_posts/Git-tutorial/26.png)

이상으로 기본 튜토리얼 과정을 마무리했다. 이제 git의 기본 중에 기본을 알았으니 그만 헤매시길...^^
