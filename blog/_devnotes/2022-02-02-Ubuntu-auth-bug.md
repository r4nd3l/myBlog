---
layout: post
title: "Auth req pop stuck"
description: "Authentication Required window stuck after login"
tags: [Ubuntu, Linux, Command]
---

![auth req bug](https://i.stack.imgur.com/iBYvR.jpg?w=1024){: .mx-auto}

I faced the same problem on Pop_!OS, no need to reboot actually;
The easier way is to just restart GNOME by one of two ways:

- pressing `Alt` + `F2`, type `r` then `Enter`, or
- in terminal:

```
$ killall -3 gnome-shell
```

Related bug: [Related bug:](https://bugs.launchpad.net/ubuntu/+source/gnome-shell/+bug/1824874)

source: [source](https://askubuntu.com/questions/1291732authentication-required-window-stuck-after-login)