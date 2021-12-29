---
layout: post
title: "Terminate task in terminal"
description: "Kill/Shut down process via terminal"
tags: [ Shell, Command, Linux]
categories: [ Command, Linux]
---

>$ ps aux 

##### Example
>$ ps aux | grep apache

mate      3564  0.0  0.0  23092  1036 pts/0    S+   13:43   0:00 grep --color=auto apache
>$ kill < PID >
>$ kill 3564

or
>$ kill -9 3564
---

Select the desired PID number to use the command: "kill" or "kill -9"