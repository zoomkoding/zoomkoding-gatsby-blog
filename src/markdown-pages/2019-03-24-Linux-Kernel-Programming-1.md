---
title: (리눅스 시스템 프로그래밍) LKM + C 예제코드
layout: post
date: '2019-03-24 02:00:00'
author: 줌코딩
tags: linux
cover: "/assets/instacode.png"
categories: os linux
---

## 들어가기 앞서

이번 학기 OS를 공부하면서 처음으로 프로그래밍 과제가 나왔다.

학기 시작하고 2주간 어색한 OS 개념들을 어렴풋이 이해해왔는데 이번 기회를 통해서 좀 더 실질적으로 이해할 수 있기를 바란다.

## 첫 목표

**Create a Linux kernel module (LKM) that works as an agent in kernel space for your commands**


1.  **Log the names of files that a user has accessed** 
2.  **Prevent a kill to a specified process** 
3.  **Hide the dogdoor module from the module list**



## LKM이란?


>- Loadable kernel module, **LKM**
>- 하드웨어 내부구조 이해없이 하드웨어에 접근할 수 있게 해주는 interface이다
>- [운영 체제](https://ko.wikipedia.org/wiki/%EC%9A%B4%EC%98%81_%EC%B2%B4%EC%A0%9C)에서 실행 중인 [커널](https://ko.wikipedia.org/wiki/%EC%BB%A4%EB%84%90_(%EC%BB%B4%ED%93%A8%ED%8C%85))을 확장하는 코드를 포함하는 목적 파일이다. 
>- insmod로 load 됐다가 rmmod로 unload할 수 있다


**LKM이 없다면?** 

>- 리눅스 커널은 드라이브를 다 수용해야하기 때문에 엄청 커야한다.
>- 하드웨어가 추가되거나 드라이버가 업데이트 될 때마다 커널을 리빌드 해야한다.

**LKM의 단점은?**

>- 파일을 드라이버에서 각각 관리해야한다.


## LKM을 위한 환경설정하기


      $ sudo apt-get update
      $ apt-cache search linux-headers-$(uname -r)
      linux-headers-4.15.0-041500-generic - Linux kernel headers for version 4.15.0 on 64 bit x86 SMP
      $ sudo apt-get install (헤더명)
      $ cd /usr/src/(헤더명)
      $ ls

이때 주의할 점은 자신한테 맞는 header를 설치해야 한다.

**apt-cache search linux-headers-$(uname -r)** 명령어를 통해 나온 header를 써야한다


      **jinhyeok@CRA230**:**~**$   apt-cache search linux-headers-$(uname -r)
      linux-headers-4.15.0-041500-generic - Linux kernel headers for version 4.15.0 on 64 bit x86 SMP


## Module Code시 주의할 점
>1. 순서대로 동작하지 않는다. (Event Driven과 같다)
>2. allocate된거는 반드시 release되어야 한다.
>3. printf() 함수가 없다. (printk()를 이용해라)
>4. interrupt가 있을 수 있기 때문에 이에 대한 대비도 해야한다.
>5. Kernel Module에 우선적으로 CPU cycle이 할당되므로 조심해서 코딩해야한다.
>6. Floating Point 모드가 존재하지 않는다.



## LKM 예제 코드 The Hello World



     /**
     * @file    hello.c
     * @author  Jinhyeok Jeong
     * @date    24 March 2019
     * @version 0.1
     * @brief  An introductory "Hello World!" loadable kernel module (LKM) that can display a message
     * in the /var/log/kern.log file when the module is loaded and removed. The module can accept an
     * argument when it is loaded -- the name, which appears in the kernel log files.
     * @see http://www.derekmolloy.ie/ for a full description and follow-up descriptions.
    */
    
    #include <linux/init.h>             // Macros used to mark up functions e.g., __init __exit
    #include <linux/module.h>           // Core header for loading LKMs into the kernel
    #include <linux/kernel.h>           // Contains types, macros, functions for the kernel
    
    MODULE_LICENSE("GPL");              ///< The license type -- this affects runtime behavior
    MODULE_AUTHOR("Derek Molloy");      ///< The author -- visible when you use modinfo
    MODULE_DESCRIPTION("A simple Linux driver for the BBB.");  ///< The description -- see modinfo
    MODULE_VERSION("0.1");              ///< The version of the module
    
    static char *name = "world";        ///< An example LKM argument -- default value is "world"
    module_param(name, charp, S_IRUGO); ///< Param desc. charp = char ptr, S_IRUGO can be read/not changed
    MODULE_PARM_DESC(name, "The name to display in /var/log/kern.log");  ///< parameter description
    
    /** @brief The LKM initialization function
     *  The static keyword restricts the visibility of the function to within this C file. The __init
     *  macro means that for a built-in driver (not a LKM) the function is only used at initialization
     *  time and that it can be discarded and its memory freed up after that point.
     *  @return returns 0 if successful
     */
    static int __init helloBBB_init(void){
       printk(KERN_INFO "EBB: Hello %s from the BBB LKM!\n", name);
       return 0;
    }
    
    /** @brief The LKM cleanup function
     *  Similar to the initialization function, it is static. The __exit macro notifies that if this
     *  code is used for a built-in driver (not a LKM) that this function is not required.
     */
    static void __exit helloBBB_exit(void){
       printk(KERN_INFO "EBB: Goodbye %s from the BBB LKM!\n", name);
    }
    
    /** @brief A module must use the module_init() module_exit() macros from linux/init.h, which
     *  identify the initialization function at insertion time and the cleanup function (as
     *  listed above)
     */
    module_init(helloBBB_init);
    module_exit(helloBBB_exit);


- 16번째줄 - MODULE_LICENSE(“GPL”)은 모듈의 라이센스 정보를 제공하는 것이다
- 21번째줄 - hello를 static  char*으로 저장했다. 
  - 커널모드에서는 글로벌 변수 사용하면 안됌(커널에서 다 돌꺼기 때문에) 반드시 **static**으로 제한해야한다.
- 22번째줄 - module_param(name, type, permissions);
  - 파라미터 3개, 이름, 파라미터 타입, 접근 권한 이렇게 세개를 받는다.
  - charp : char pointer
  - S_IRUGO : user/group/others에게 읽기 권한 제공
- 31, 40번째줄 - 함수는 아무이름으로 해도된다
  - 대신 48, 49번째 줄과 같이 module_init()과 module_exit()으로 꼭 보내져야 함
- 31번째줄 - printk는 printf와 유사하다
  - 다른 점은 log level 적어보내야 한다.


## 예제코드 빌드하기


- 커널 모듈을 빌드하기 위해서는 반드시 makefile이 필요하다.


        obj-m += hello.o
        all:
                make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
        clean:
                make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean


- 1번째줄 - 이 makefile의 목표를 정의한다.
- 나머지는 보통 makefile과 유사하다
  - -C는 kernel directory로 switch시켜주는 용도
  - M=$(PWD)는 프로젝트 파일이 실제 존재하는 위치를 make에 알려주는 용도
  - $(shell uname -r)은 현재 kernel build 버전을 전해주는 용도이다.

**빌드 결과 모습** 


    jinhyeok@CRA230:~/Linux_Kernel_Programming$ make
    make -C /lib/modules/4.15.0-041500-generic/build M=/home/jinhyeok/Linux_Kernel_Programming modules
    make[1]: 디렉터리 '/usr/src/linux-headers-4.15.0-041500-generic' 들어감
      CC [M]  /home/jinhyeok/Linux_Kernel_Programming/hello.o
      Building modules, stage 2.
      MODPOST 1 modules
      CC      /home/jinhyeok/Linux_Kernel_Programming/hello.mod.o
      LD [M]  /home/jinhyeok/Linux_Kernel_Programming/hello.ko
    make[1]: 디렉터리 '/usr/src/linux-headers-4.15.0-041500-generic' 나감
    jinhyeok@CRA230:~/Linux_Kernel_Programming$ ls
    Makefile        hello.c   hello.mod.c  hello.o
    Module.symvers  hello.ko  hello.mod.o  modules.order

hello.**ko** 파일이 바로 loadable kernel module이다!!


## LKM 테스트하기
>- insmode와 rmmod로 LKM을 로드하고 언로드할 수 있다.
>- 그리고 로그의 결과물은 kern.log에 있어서 tail이라는 명령어를 통해 확인 가능하다.

    //로드하기
    sudo insmode hello.ko

    //언로드하기
    sudo rmmod hello.ko

더블 탭으로 실시간으로 로그가 찍히는 것을 확인할 수 있다.


    jinhyeok@CRA230:/var/log$ cd /var/log
    jinhyeok@CRA230:/var/log$ sudo tail -f kern.log
    Mar 24 17:08:08 CRA230 kernel: [141413.098009] EBB: Hello world from the BBB LKM!
    Mar 24 17:13:07 CRA230 kernel: [141711.746656] EBB: Goodbye world from the BBB LKM!


## LKM을 파라미터를 줘서 테스트하기


    jinhyeok@CRA230:~/Linux_Kernel_Programming$ sudo insmod hello.ko name=jinhyeok
    jinhyeok@CRA230:~/Linux_Kernel_Programming$ sudo rmmod hello.ko

뿐만 아니라 **proc**를 이용해서도 확인이 가능하다.

## Proc Interface(procfs/proc) 이란?


>- Virtual file system where files act as agents for a kernel data structure or kernel module to interact with user-level programs
>- 내부 커널 정보 및 디바이스 정보를 **파일형태**로 유저에게 제공
>- LKM이 로드된 정보가 /proc에도 표시된다.

    jinhyeok@CRA230:/proc$ cd /proc
    jinhyeok@CRA230:/proc$ cat modules|grep hello
    hello 16384 0 - Live 0x          (null) (OE)
    
**파라미터는 /sys/module에서 확인이 가능하다**


    jinhyeok@CRA230:~$ cd /sys/module/hello/parameters/
    jinhyeok@CRA230:/sys/module/hello/parameters$ cat name
    jinhyeok


- hello라는 디렉토리 밑에 있는 parameter에 name의 정보가 들어있는 것을 볼 수 있다.


## 정리
>- LKM은 썼다 안썼다가 가능한 kernel의 보조장치 같은 역할인 듯 하다.
>- 본격적으로 나도 한번 모듈을 짜보자.

